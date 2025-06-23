<!--
  - @copyright Copyright (c) 2018 Roeland Jago Douma <roeland@famdouma.nl>
  - @author Roeland Jago Douma <roeland@famdouma.nl>
  - @license GNU AGPL version 3 or any later version
  -
  - SPDX-FileCopyrightText: 2018 Roeland Jago Douma <roeland@famdouma.nl>
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<tr>
		<td><span>{{ ip }}/{{ mask }}</span></td>
		<td class="action-column">
			<NcButton :title="t('bruteforcesettings', 'Delete entry for {subnet}', { subnet: ip + '/' + mask })"
				variant="tertiary"
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
import NcButton from '@nextcloud/vue/components/NcButton'
import { t } from '@nextcloud/l10n'

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

	emits: ['delete'],

	data() {
		return {
			id: this.item.id,
			ip: this.item.ip,
			mask: this.item.mask,
		}
	},

	methods: {
		t,
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
