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
	<div id="bruteforcesettings" class="section">
		<h2>{{ t('bruteforcesettings', 'Brute-force IP whitelist') }}</h2>
		<p class="settings-hint">{{ t('bruteforcesettings', 'To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all.') }}</p>

		<table id="whitelist-list">
			<tbody>
				<BruteForceItem v-for="item in items"
					:key="item.id"
					:item="item"
					@delete="deleteWhitelist"
				/>
			</tbody>
		</table>

		<br/>
		<h3>{{ t('bruteforcesettings', 'Add new whitelist') }}</h3>
		<form @submit.prevent="addWhitelist">
			<input type="text" id="ip" name="ip" placeholder="2001:db8::" v-model="newWhitelist.ip">/
			<input type="number" id="mask" name="mask" placeholder="64" v-model="newWhitelist.mask">
			<input type="submit" class="button" :value="t('bruteforcesettings', 'Add')">
		</form>
	</div>
</template>

<script>
import axios from 'axios';
import BruteForceItem from './components/BruteForceItem'

export default {
	name: 'App',
	components: {
		BruteForceItem
	},
	data: function() {
		return {
			items: [],
			newWhitelist: {
				ip: '',
				mask: ''
			}
		};
	},
	beforeMount: function() {
		let requestToken = OC.requestToken;
		let tokenHeaders = { headers: { requesttoken: requestToken } };

		axios.get(OC.generateUrl('apps/bruteforcesettings/ipwhitelist'), tokenHeaders)
			.then((response) => {
			this.items = response.data;
		});
	},
	methods: {
		deleteWhitelist(id) {
			let requestToken = OC.requestToken;
			let tokenHeaders = { headers: { requesttoken: requestToken } };

			axios.delete(OC.generateUrl('apps/bruteforcesettings/ipwhitelist/{id}', {id: id}), tokenHeaders)
				.then((response) => {
					this.items = this.items.filter(item => item.id !== id);
				});
		},
		addWhitelist() {
			let requestToken = OC.requestToken;
			let tokenHeaders = { headers: { requesttoken: requestToken } };

			axios.post(
				OC.generateUrl('apps/bruteforcesettings/ipwhitelist'),
				{
					ip: this.newWhitelist.ip,
					mask: this.newWhitelist.mask
				},
				tokenHeaders)
				.then((response) => {
					console.log(response.data);
			console.log(this.items);
					this.items.push(response.data);
			console.log(this.items);

					this.newWhitelist.ip = '';
					this.newWhitelist.mask = '';
				}
			);
		}
	},
}
</script>
