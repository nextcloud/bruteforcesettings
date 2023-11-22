<!--
  - @copyright Copyright (c) 2018 Roeland Jago Douma <roeland@famdouma.nl>
  -
  - @author Roeland Jago Douma <roeland@famdouma.nl>
  -
  - @license GNU AGPL version 3 or any later version
  -
  - This program is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as
  - published by the Free Software Foundation, either version 3 of the
  - License, or (at your option) any later version.
  -
  - This program is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  - GNU Affero General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with this program. If not, see <http://www.gnu.org/licenses/>.
  -
  -->
<template>
	<NcSettingsSection :title="t('bruteforcesettings', 'Brute-force IP whitelist')"
		doc-url="https://docs.nextcloud.com/server/stable/admin_manual/configuration_server/bruteforce_configuration.html">
		<p class="settings-hint">
			{{ t('bruteforcesettings', 'To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all.') }}
		</p>

		<NcNoteCard v-if="noteCardLevel"
			:type="noteCardLevel">
			{{ noteCardText }}
		</NcNoteCard>

		<!-- Whitelist -->
		<table id="whitelist-list">
			<tbody>
				<BruteForceItem v-for="item in items"
					:key="item.id"
					:item="item"
					@delete="deleteWhitelist" />
			</tbody>
		</table>

		<h3>{{ t('bruteforcesettings', 'Add new whitelist') }}</h3>
		<form @submit.prevent="addWhitelist">
			<input id="ip"
				v-model="newWhitelist.ip"
				type="text"
				name="ip"
				placeholder="2001:db8::">/
			<input id="mask"
				v-model="newWhitelist.mask"
				type="number"
				name="mask"
				min="1"
				max="128"
				maxlength="2"
				placeholder="64">
			<NcButton native-type="submit">
				<template #icon>
					<Plus />
				</template>
				{{ t('bruteforcesettings', 'Add') }}
			</NcButton>
		</form>
	</NcSettingsSection>
</template>

<script>
import { generateUrl } from '@nextcloud/router'
import { loadState } from '@nextcloud/initial-state'
import axios from '@nextcloud/axios'
import NcButton from '@nextcloud/vue/dist/Components/NcButton.js'
import NcNoteCard from '@nextcloud/vue/dist/Components/NcNoteCard.js'
import NcSettingsSection from '@nextcloud/vue/dist/Components/NcSettingsSection.js'
import Plus from 'vue-material-design-icons/Plus'

import BruteForceItem from './components/BruteForceItem'

export default {
	name: 'App',
	components: {
		BruteForceItem,
		NcButton,
		NcNoteCard,
		NcSettingsSection,
		Plus,
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
		}
	},

	computed: {
		noteCardText() {
			if (this.delay) {
				return t('bruteforcesettings', 'Your remote address was identified as "{remoteAddress}" and is throttled at the moment by {delay}ms.', { remoteAddress: this.remoteAddress, delay: this.delay })
			}
			if (this.isBypassListed) {
				return t('bruteforcesettings', 'Your remote address was identified as "{remoteAddress}" and is bypassing brute force protection.', { remoteAddress: this.remoteAddress })
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
	},
	beforeMount() {
		this.remoteAddress = loadState('bruteforcesettings', 'remote-address', '127.0.0.1')
		this.isBypassListed = loadState('bruteforcesettings', 'bypass-listed', false)
		this.delay = loadState('bruteforcesettings', 'delay', 0)

		axios.get(generateUrl('apps/bruteforcesettings/ipwhitelist'))
			.then((response) => {
				this.items = response.data
			})
	},
	methods: {
		deleteWhitelist(id) {
			axios.delete(generateUrl('apps/bruteforcesettings/ipwhitelist/{id}', { id }))
				.then((response) => {
					this.items = this.items.filter(item => item.id !== id)
				})
		},
		addWhitelist() {
			axios.post(generateUrl('apps/bruteforcesettings/ipwhitelist'),
				{
					ip: this.newWhitelist.ip,
					mask: this.newWhitelist.mask,
				})
				.then((response) => {
					this.items.push(response.data)
					this.newWhitelist.ip = ''
					this.newWhitelist.mask = ''
				})
		},
	},
}
</script>

<style lang="scss" scoped>
#whitelist-list {
	min-width: 262px;
}

form {
	display: flex;
	align-items: center;
	input {
		margin: 8px;
	}
}
</style>
