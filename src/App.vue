<!--
  - @copyright Copyright (c) 2018 Roeland Jago Douma <roeland@famdouma.nl>
  - @author Roeland Jago Douma <roeland@famdouma.nl>
  - @license GNU AGPL version 3 or any later version
  -
  - SPDX-FileCopyrightText: 2018 Roeland Jago Douma <roeland@famdouma.nl>
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<NcSettingsSection
		:name="t('bruteforcesettings', 'Brute-force allow list')"
		doc-url="https://docs.nextcloud.com/server/stable/admin_manual/configuration_server/bruteforce_configuration.html">
		<p class="settings-hint">
			{{ t('bruteforcesettings', 'To exclude IP ranges from the brute-force protection specify them below. Note that any allowed IP can perform authentication attempts without any throttling. For security reasons, it is recommended to list as few remote addresses as possible or ideally even none at all.') }}
		</p>

		<NcCheckboxRadioSwitch
			:model-value="isApplyAllowListToRateLimitEnabled"
			:disabled="loadingRateLimit"
			type="switch"
			@update:model-value="saveApplyAllowListToRateLimit">
			{{ t('bruteforcesettings', 'Bypass rate limiting for allowed IPs') }}
		</NcCheckboxRadioSwitch>

		<NcNoteCard
			v-if="noteCardLevel"
			:type="noteCardLevel">
			{{ noteCardText }}
		</NcNoteCard>

		<!-- Whitelist -->
		<ul class="whitelist-list">
			<BruteForceItem
				v-for="item in sortedItems"
				:key="item.id"
				:item="item"
				@delete="deleteWhitelist"
				@edit="editWhitelist" />
		</ul>

		<h3>{{ t('bruteforcesettings', 'Add new IP address') }}</h3>
		<div class="whitelist-form">
			<div class="whitelist-form__ip-mask">
				<NcInputField
					id="ip"
					v-model="newWhitelist.ip"
					class="whitelist__ip"
					type="text"
					name="ip"
					:label="t('bruteforcesettings', 'IP address')"
					placeholder="2001:db8::" />
				<!-- TRANSLATORS : "Mask" is an IP address mask-->
				<NcInputField
					id="mask"
					v-model="newWhitelist.mask"
					class="whitelist__mask"
					type="number"
					name="mask"
					min="1"
					max="128"
					maxlength="2"
					:label="t('bruteforcesettings', 'Mask')"
					placeholder="64" />
			</div>
			<NcTextArea
				id="comment"
				v-model="newWhitelist.comment"
				resize="none"
				class="whitelist__comment"
				:label="t('bruteforcesettings', 'Comment')"
				:placeholder="commentHint"
				:helper-text="hasExceededTextLimit && !openEditDialog ? helperText : ''"
				:error="hasExceededTextLimit && !openEditDialog" />
			<NcButton
				variant="secondary"
				class="whitelist__submit"
				:disabled="disabled"
				@click="addWhitelist">
				<template #icon>
					<PlusIcon />
				</template>
				{{ t('bruteforcesettings', 'Add') }}
			</NcButton>
		</div>
		<NcModal v-if="openEditDialog" @close="clearEditing">
			<div class="whitelist-edit__content">
				<h2>{{ t('bruteforcesettings', 'Edit comment for {subnet}', { subnet: editingItem.ip + '/' + editingItem.mask }) }}</h2>
				<NcTextArea
					id="edit-comment"
					v-model="editingItem.comment"
					resize="none"
					:label="t('bruteforcesettings', 'Comment')"
					:placeholder="commentHint"
					:helper-text="hasExceededTextLimit && openEditDialog ? helperText : ''"
					:error="hasExceededTextLimit && openEditDialog" />
				<NcButton
					class="whitelist-edit__submit"
					variant="primary"
					:disabled="loadingEdit"
					@click="saveEdit">
					<template #icon>
						<PencilIcon v-if="!loadingEdit" />
						<NcLoadingIcon v-else />
					</template>
					{{ t('bruteforcesettings', 'Save') }}
				</NcButton>
			</div>
		</NcModal>
	</NcSettingsSection>
</template>

<script>
import { showError } from '@nextcloud/dialogs'
import { loadState } from '@nextcloud/initial-state'
import { t } from '@nextcloud/l10n'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcCheckboxRadioSwitch from '@nextcloud/vue/components/NcCheckboxRadioSwitch'
import NcInputField from '@nextcloud/vue/components/NcInputField'
import NcLoadingIcon from '@nextcloud/vue/components/NcLoadingIcon'
import NcModal from '@nextcloud/vue/components/NcModal'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import NcSettingsSection from '@nextcloud/vue/components/NcSettingsSection'
import NcTextArea from '@nextcloud/vue/components/NcTextArea'
import PencilIcon from 'vue-material-design-icons/PencilOutline.vue'
import PlusIcon from 'vue-material-design-icons/Plus.vue'
import BruteForceItem from './components/BruteForceItem.vue'
import {
	addWhitelist,
	deleteWhitelist,
	getWhitelist,
} from './services/bruteforceSettingsServices.js'

const COMMENT_MAX_LENGTH = 1000

export default {
	name: 'App',

	components: {
		BruteForceItem,
		NcButton,
		NcNoteCard,
		NcSettingsSection,
		NcCheckboxRadioSwitch,
		NcInputField,
		NcTextArea,
		PencilIcon,
		PlusIcon,
		NcModal,
		NcLoadingIcon,
	},

	data() {
		return {
			items: [],
			newWhitelist: {
				ip: '',
				mask: '',
				comment: '',
			},

			remoteAddress: '',
			delay: 0,
			isBypassListed: false,
			isApplyAllowListToRateLimitEnabled: false,
			loadingRateLimit: false,
			loadingEdit: false,
			openEditDialog: false,
			editingItem: null,
			hasExceededTextLimit: false,
			helperText: t('bruteforcesettings', 'Comment cannot exceed {max} characters.', { max: COMMENT_MAX_LENGTH }),
			commentHint: t('bruteforcesettings', 'Leave an internal comment, why this IP is allowed, e.g. the  location, so it can be revoked, when it is no longer needed.'),
		}
	},

	computed: {
		sortedItems() {
			return [...this.items].sort((a, b) => {
				return a.ip.localeCompare(b.ip)
			})
		},

		noteCardText() {
			if (this.delay) {
				return t('bruteforcesettings', 'Your remote address was identified as "{remoteAddress}" and is throttled at the moment by {delay}ms.', { remoteAddress: this.remoteAddress, delay: this.delay })
			}
			if (this.isBypassListed) {
				return t('bruteforcesettings', 'Your remote address was identified as "{remoteAddress}" and is bypassing brute-force protection.', { remoteAddress: this.remoteAddress })
			}
			return t('bruteforcesettings', 'Your remote address was identified as "{remoteAddress}" and is not actively throttled at the moment.', { remoteAddress: this.remoteAddress })
		},

		noteCardLevel() {
			if (this.delay) {
				return 'error'
			}
			if (this.isBypassListed) {
				return 'warning'
			}
			return 'success'
		},

		disabled() {
			return !this.newWhitelist.ip.length || !this.newWhitelist.mask.length
		},
	},

	beforeMount() {
		this.remoteAddress = loadState('bruteforcesettings', 'remote-address', '127.0.0.1')
		this.isBypassListed = loadState('bruteforcesettings', 'bypass-listed', false)
		this.delay = loadState('bruteforcesettings', 'delay', 0)
		this.isApplyAllowListToRateLimitEnabled = loadState('bruteforcesettings', 'apply_allowlist_to_ratelimit', false)
		this.loadWhitelist()
	},

	methods: {
		t,
		async loadWhitelist() {
			const response = await getWhitelist()
			this.items = response.data
		},

		async deleteWhitelist(id) {
			await deleteWhitelist(id)
			this.items = this.items.filter((item) => item.id !== id)
		},

		async addWhitelist() {
			this.hasExceededTextLimit = this.newWhitelist?.comment && this.newWhitelist?.comment?.length > COMMENT_MAX_LENGTH
			if (this.hasExceededTextLimit) {
				return
			}
			try {
				const response = await addWhitelist(this.newWhitelist)

				this.items.push(response.data)
				this.newWhitelist.ip = ''
				this.newWhitelist.mask = ''
				this.newWhitelist.comment = ''
			} catch {
				showError(t('bruteforcesettings', 'There was an error adding the IP to the allow list.'))
			}
		},

		saveApplyAllowListToRateLimit(value) {
			this.loadingRateLimit = true
			OCP.AppConfig.setValue('bruteforcesettings', 'apply_allowlist_to_ratelimit', value ? 1 : 0, {
				success: () => {
					this.loadingRateLimit = false
					this.isApplyAllowListToRateLimitEnabled = value
				},
			})
		},

		editWhitelist(item) {
			this.openEditDialog = true
			this.editingItem = { ...item }
			this.hasExceededTextLimit = false
		},

		async saveEdit() {
			this.hasExceededTextLimit = this.editingItem?.comment && this.editingItem?.comment?.length > COMMENT_MAX_LENGTH
			if (this.hasExceededTextLimit) {
				return
			}
			this.loadingEdit = true
			try {
				const response = await addWhitelist(this.editingItem)
				this.clearEditing()
				// Update the item in the list
				const index = this.items.findIndex((i) => i.id === response.data.id)
				if (index !== -1) {
					this.items.splice(index, 1, response.data)
				}
			} catch {
				showError(t('bruteforcesettings', 'There was an error updating the allow list entry.'))
			} finally {
				this.loadingEdit = false
			}
		},

		clearEditing() {
			this.openEditDialog = false
			this.editingItem = null
			this.hasExceededTextLimit = false
		},
	},
}
</script>

<style lang="scss" scoped>
.whitelist-list {
	display: flex;
	flex-direction: column;
	gap: var(--default-grid-baseline);
	margin-block: calc(var(--default-grid-baseline) * 2);
	width: calc(500px + var(--default-grid-baseline) * 2);
	max-height: 400px;
	overflow-y: auto;
}

.whitelist-form {
	display: flex;
	flex-direction: column;
	gap: calc(var(--default-grid-baseline) * 2);
}

.whitelist-form__ip-mask {
	display: flex;
	gap: calc(var(--default-grid-baseline) * 2);
	align-items: center;
}

.whitelist__ip {
	width: 350px !important;
	height: var(--default-clickable-area);
	line-height: var(--default-clickable-area);
}

.whitelist__mask {
	width: 150px !important;
	height: var(--default-clickable-area);
	line-height: var(--default-clickable-area);
}

.whitelist__comment {
	width: calc(500px + var(--default-grid-baseline) * 2) !important; // to align with ip + mask fields
}

.whitelist__submit {
	margin-top: 6px;
}

.whitelist-edit__content {
	padding: calc(var(--default-grid-baseline) * 2);

	& > h2 {
		text-align: center;
		font-size: 1.2em;
		line-break: anywhere;
	}
}

.whitelist-edit__submit {
	margin-top: calc(var(--default-grid-baseline) * 2);
	display: block;
	margin-inline: auto;
}

</style>
