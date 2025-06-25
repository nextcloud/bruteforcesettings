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
		:name="t('bruteforcesettings', 'Brute-force IP whitelist')"
		doc-url="https://docs.nextcloud.com/server/stable/admin_manual/configuration_server/bruteforce_configuration.html">
		<p class="settings-hint">
			{{ t('bruteforcesettings', 'To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all.') }}
		</p>

		<NcNoteCard
			v-if="noteCardLevel"
			:type="noteCardLevel">
			{{ noteCardText }}
		</NcNoteCard>

		<!-- Whitelist -->
		<ul class="whitelist-list">
			<BruteForceItem
				v-for="item in items"
				:key="item.id"
				:item="item"
				@delete="deleteWhitelist" />
		</ul>

		<NcCheckboxRadioSwitch
			:model-value="isApplyAllowListToRateLimitEnabled"
			:disabled="loading"
			type="switch"
			@update:model-value="saveApplyAllowListToRateLimit">
			{{ t('spreed', 'Apply whitelist to rate limit') }}
		</NcCheckboxRadioSwitch>

		<h3>{{ t('bruteforcesettings', 'Add a new whitelist') }}</h3>
		<div class="whitelist__form">
			<NcInputField
				id="ip"
				class="whitelist__ip"
				:value.sync="newWhitelist.ip"
				type="text"
				name="ip"
				:label="t('bruteforcesettings', 'IP address')"
				placeholder="2001:db8::" />
			<!-- TRANSLATORS : "Mask" is an IP address mask-->
			<NcInputField
				id="mask"
				class="whitelist__mask"
				:value.sync="newWhitelist.mask"
				type="number"
				name="mask"
				min="1"
				max="128"
				maxlength="2"
				:label="t('bruteforcesettings', 'Mask')"
				placeholder="64" />
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
	</NcSettingsSection>
</template>

<script>
import axios from '@nextcloud/axios'
import { showError } from '@nextcloud/dialogs'
import { loadState } from '@nextcloud/initial-state'
import { t } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcCheckboxRadioSwitch from '@nextcloud/vue/components/NcCheckboxRadioSwitch'
import NcInputField from '@nextcloud/vue/components/NcInputField'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import NcSettingsSection from '@nextcloud/vue/components/NcSettingsSection'
import PlusIcon from 'vue-material-design-icons/Plus.vue'
import BruteForceItem from './components/BruteForceItem.vue'

export default {
	name: 'App',

	components: {
		BruteForceItem,
		NcButton,
		NcNoteCard,
		NcSettingsSection,
		NcCheckboxRadioSwitch,
		NcInputField,
		PlusIcon,
	},

	data() {
		return {
			items: [],
			newWhitelist: {
				ip: '',
				mask: '',
			},

			remoteAddress: '',
			delay: 0,
			isBypassListed: false,
			isApplyAllowListToRateLimitEnabled: false,
			loading: false,
		}
	},

	computed: {
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

		axios.get(generateUrl('apps/bruteforcesettings/ipwhitelist'))
			.then((response) => {
				this.items = response.data
			})
	},

	methods: {
		t,
		deleteWhitelist(id) {
			axios.delete(generateUrl('apps/bruteforcesettings/ipwhitelist/{id}', { id }))
				.then(() => {
					this.items = this.items.filter((item) => item.id !== id)
				})
		},

		async addWhitelist() {
			try {
				const response = await axios.post(
					generateUrl('apps/bruteforcesettings/ipwhitelist'),
					{
						ip: this.newWhitelist.ip,
						mask: this.newWhitelist.mask,
					},
				)

				this.items.push(response.data)
				this.newWhitelist.ip = ''
				this.newWhitelist.mask = ''
			} catch {
				showError(t('bruteforcesettings', 'There was an error adding the IP to the whitelist.'))
			}
		},

		saveApplyAllowListToRateLimit(value) {
			this.loading = true
			OCP.AppConfig.setValue('bruteforcesettings', 'apply_allowlist_to_ratelimit', value ? 1 : 0, {
				success: () => {
					this.loading = false
					this.isApplyAllowListToRateLimitEnabled = value
				},
			})
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
	width: 250px;
	max-height: 400px;
	overflow-y: auto;
}

.whitelist__form {
	display: flex;
	gap: calc(var(--default-grid-baseline) * 2);
	align-items: center;
}

.whitelist__ip {
	width: 300px !important;
	height: var(--default-clickable-area);
	line-height: var(--default-clickable-area);
}

.whitelist__mask {
	width: 100px !important;
	height: var(--default-clickable-area);
	line-height: var(--default-clickable-area);
}

.whitelist__submit {
	margin-top: 6px;
}

</style>
