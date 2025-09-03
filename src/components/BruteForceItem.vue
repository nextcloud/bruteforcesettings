<!--
  - @copyright Copyright (c) 2018 Roeland Jago Douma <roeland@famdouma.nl>
  - @author Roeland Jago Douma <roeland@famdouma.nl>
  - @license GNU AGPL version 3 or any later version
  -
  - SPDX-FileCopyrightText: 2018 Roeland Jago Douma <roeland@famdouma.nl>
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<NcListItem
		class="whitelist-item"
		:name="`${ip}/${mask}`">
		<template #extra-actions>
			<NcButton
				:title="t('bruteforcesettings', 'Delete entry for {subnet}', { subnet: ip + '/' + mask })"
				variant="tertiary"
				@click="$emit('delete', id)">
				<template #icon>
					<Delete :size="20" />
				</template>
			</NcButton>
		</template>
	</NcListItem>
</template>

<script>
import { t } from '@nextcloud/l10n'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcListItem from '@nextcloud/vue/components/NcListItem'
import Delete from 'vue-material-design-icons/TrayArrowDown.vue'

export default {
	name: 'BruteForceItem',
	components: {
		Delete,
		NcButton,
		NcListItem,
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
