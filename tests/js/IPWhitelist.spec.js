/*
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { expect, describe, test, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import App from '../../src/App.vue'
import { nextTick } from 'vue'
import {
	getWhitelist,
	addWhitelist,
	deleteWhitelist
} from '../../src/services/bruteforceSettingsServices.js'

vi.mock('../../src/services/bruteforceSettingsServices.js', () => ({
	getWhitelist: vi.fn(),
	addWhitelist: vi.fn(),
	deleteWhitelist: vi.fn()
}))

describe('App', () => {
	afterEach(() => {
		vi.clearAllMocks()		
	})
    test('renders properly a list of IPs', async () => {
		getWhitelist.mockResolvedValue({
			data: [
				{ id: 1, ip: '192.168.1.1', mask: '24' },
				{ id: 2, ip: '192.168.1.2', mask: '24' }
			]
		})
        const wrapper = mount(App)
		expect(getWhitelist).toHaveBeenCalled()
		await nextTick()

		const listItems = wrapper.findAll('li')
		expect(listItems).toHaveLength(2)
		expect(listItems[0].text()).toContain('192.168.1.1')
		expect(listItems[0].text()).toContain('24')
		expect(listItems[1].text()).toContain('192.168.1.2')
		expect(listItems[1].text()).toContain('24')
	})

	test('can add IP addresses', async () => {
		addWhitelist.mockResolvedValue({
			data: {
				id: 3,
				ip: '192.168.1.1',
				mask: '0'
			}
		})
		const wrapper = mount(App)

		const input = wrapper.find('input[name="ip"]')
		input.setValue('192.168.1.1')
		const maskInput = wrapper.find('input[name="mask"]')
		maskInput.setValue('0')
		
		await nextTick()
		const button = wrapper.find('.whitelist__submit')
		button.trigger('click')
		await flushPromises()

		expect(addWhitelist).toHaveBeenCalledWith('192.168.1.1', '0')
		const listItems = wrapper.findAll('li')
		expect(listItems[2].text()).toContain('192.168.1.1')
		expect(listItems[2].text()).toContain('0')
	})

	test('can delete IP addresses', async () => {
		getWhitelist.mockResolvedValue({
			data: [
				{ id: 1, ip: '192.168.1.1', mask: '24' }
			]
		})
		deleteWhitelist.mockResolvedValue({})

		const wrapper = mount(App)
		await nextTick()
	
		const listItems = wrapper.findAll('li')
		expect(listItems).toHaveLength(1)
		const button = listItems[0].find('button[title="Delete entry for 192.168.1.1/24"]')
		button.trigger('click')
		await flushPromises()

		expect(deleteWhitelist).toHaveBeenCalledWith(1)
		expect(wrapper.findAll('li')).toHaveLength(0)
	})
})
