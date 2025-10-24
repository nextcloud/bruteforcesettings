/*
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import axios from '@nextcloud/axios'
import { generateUrl } from '@nextcloud/router'

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
	return axios.delete(generateUrl(`apps/bruteforcesettings/ipwhitelist/${id}`))
}
