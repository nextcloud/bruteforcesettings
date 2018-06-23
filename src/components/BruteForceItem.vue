
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
	<tr>
		<td><span>{{ip}}/{{mask}}</span></td>
		<td class="action-column">
			<span>
				<a class="icon-delete has-tooltip" :title="t('bruteforcesettings', 'Delete')" @click="$emit('delete', id)"></a>
			</span>
		</td>
	</tr>
</template>

<script>
	export default {
		name: 'BruteForceItem',
		props: {
			item: {
				type: Object,
				required: true
			}
		},
		data: function() {
			return {
				id: this.item.id,
				ip: this.item.ip,
				mask: this.item.mask,
			};
		},
	}
</script>
