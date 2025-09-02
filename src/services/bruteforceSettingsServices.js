/*
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import axios from '@nextcloud/axios'
import { generateUrl } from '@nextcloud/router'

/**
 * Get the current IP whitelist
 */
async function getWhitelist() {
	return axios.get(generateUrl('apps/bruteforcesettings/ipwhitelist'))
}

/**
 * Add a new IP to the whitelist
 *
 * @param ip IP to add
 * @param mask Mask to add
 */
async function addWhitelist(ip, mask) {
	return axios.post(
		generateUrl('apps/bruteforcesettings/ipwhitelist'),
		{
			ip,
			mask,
		},
	)
}

/**
 * Delete an IP from the whitelist
 *
 * @param id ID of the IP to delete
 */
async function deleteWhitelist(id) {
	return axios.delete(generateUrl(`apps/bruteforcesettings/ipwhitelist/${id}`))
}

export {
	addWhitelist,
	deleteWhitelist,
	getWhitelist,
}
