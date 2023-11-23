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
		<td><span>{{ ip }}/{{ mask }}</span></td>
		<td class="action-column">
			<NcButton :title="t('bruteforcesettings', 'Delete entry for {subnet}', { subnet: ip + '/' + mask })"
				type="tertiary"
				@click="$emit('delete', id)">
				<template #icon>
					<Delete :size="20" />
				</template>
			</NcButton>
		</td>
	</tr>
</template>

<script>
import Delete from 'vue-material-design-icons/Delete.vue'
import { NcButton } from '@nextcloud/vue'

export default {
	name: 'BruteForceItem',
	components: {
		Delete,
		NcButton,
	},
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			id: this.item.id,
			ip: this.item.ip,
			mask: this.item.mask,
		}
	},
}
</script>

<style scoped>
	td span {
		padding: 10px 15px;
		display: inline-block;
	}

	.action-column {
		width: 46px;
	}

	.action-column a {
		display: inline-block;
	}
</style>
