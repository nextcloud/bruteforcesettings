/*
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [vue()],
	test: {
		environment: 'jsdom',
		globals: true,
		environmentOptions: {
			jsdom: {
				url: 'http://localhost',
			},
		},
		server: {
			deps: {
				// Allow importing CSS from dependencies
				inline: ['@nextcloud/vue'],
			},
		},
		include: ['tests/js/*.{test,spec}.?(c|m)[jt]s?(x)'],
		pool: 'vmThreads',
	},
})
