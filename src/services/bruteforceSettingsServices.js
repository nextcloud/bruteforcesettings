/*
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import axios from '@nextcloud/axios'
import { confirmPassword } from '@nextcloud/password-confirmation'
import { generateUrl } from '@nextcloud/router'

import '@nextcloud/password-confirmation/style.css'

/**
 * Get the current IP whitelist
 */
export async function getWhitelist() {
	return axios.get(generateUrl('apps/bruteforcesettings/ipwhitelist'))
}

/**
 * Add a new IP to the whitelist
 *
 * @param {object} item Item to add
 * @param {string} item.ip IP to add
 * @param {number} item.mask Mask to add
 * @param {string} item.comment Comment
 */
export async function addWhitelist(item) {
	await confirmPassword()
	return axios.post(
		generateUrl('apps/bruteforcesettings/ipwhitelist'),
		item,
	)
}

/**
 * Delete an IP from the whitelist
 *
 * @param {string} id ID of the IP to delete
 */
export async function deleteWhitelist(id) {
	await confirmPassword()
	return axios.delete(generateUrl(`apps/bruteforcesettings/ipwhitelist/${id}`))
}
