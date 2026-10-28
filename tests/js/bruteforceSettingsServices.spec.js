/*
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import axios from '@nextcloud/axios'
import { confirmPassword } from '@nextcloud/password-confirmation'
import { afterEach, describe, expect, test, vi } from 'vitest'
import { addWhitelist, deleteWhitelist } from '../../src/services/bruteforceSettingsServices.js'

vi.mock('@nextcloud/axios', () => ({
	default: {
		post: vi.fn(),
		delete: vi.fn(),
	},
}))
vi.mock('@nextcloud/password-confirmation', () => ({
	confirmPassword: vi.fn(),
}))

describe('bruteforceSettingsServices', () => {
	afterEach(() => {
		vi.clearAllMocks()
	})

	test('confirms the password before adding an entry', async () => {
		confirmPassword.mockRejectedValue(new Error('Cancelled'))

		await expect(addWhitelist({ ip: '10.0.0.0', mask: 8 })).rejects.toThrow('Cancelled')
		expect(axios.post).not.toHaveBeenCalled()
	})

	test('confirms the password before deleting an entry', async () => {
		confirmPassword.mockRejectedValue(new Error('Cancelled'))

		await expect(deleteWhitelist(1)).rejects.toThrow('Cancelled')
		expect(axios.delete).not.toHaveBeenCalled()
	})

	test('sends the request after the password is confirmed', async () => {
		confirmPassword.mockResolvedValue()

		await addWhitelist({ ip: '10.0.0.0', mask: 8 })
		await deleteWhitelist(1)

		expect(axios.post).toHaveBeenCalledOnce()
		expect(axios.delete).toHaveBeenCalledOnce()
	})
})
