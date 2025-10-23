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
		:title="`${item.ip}/${item.mask}`"
		:name="`${item.ip}/${item.mask}`"
		force-display-actions>
		<template v-if="item.comment" #subname>
			<span :title="item.comment">{{ item.comment }}</span>
		</template>
		<template #extra-actions>
			<NcButton
				:title="t('bruteforcesettings', 'edit comment for {subnet}', { subnet: item.ip + '/' + item.mask })"
				variant="tertiary"
				@click="$emit('edit', item)">
				<template #icon>
					<IconPencilOutline :size="20" />
				</template>
			</NcButton>
		</template>
		<template #actions>
			<NcActionButton
				:title="t('bruteforcesettings', 'Delete entry for {subnet}', { subnet: item.ip + '/' + item.mask })"
				variant="tertiary"
				@click="$emit('delete', item.id)">
				<template #icon>
					<IconDelete :size="20" />
				</template>
			</NcActionButton>
		</template>
	</NcListItem>
</template>

<script>
import { t } from '@nextcloud/l10n'
import NcActionButton from '@nextcloud/vue/components/NcActionButton'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcListItem from '@nextcloud/vue/components/NcListItem'
import IconPencilOutline from 'vue-material-design-icons/PencilOutline.vue'
import IconDelete from 'vue-material-design-icons/TrashCanOutline.vue'

export default {
	name: 'BruteForceItem',
	components: {
		IconDelete,
		NcActionButton,
		NcButton,
		NcListItem,
		IconPencilOutline,
	},

	props: {
		item: {
			type: Object,
			required: true,
		},
	},

	emits: ['delete', 'edit'],

	methods: {
		t,
	},
}
</script>
