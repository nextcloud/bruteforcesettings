<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2016-2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 Roeland Jago Douma <roeland@famdouma.nl>
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

return [
	'routes' => [
		[ 'name' => 'IPWhitelist#getAll', 'url' => '/ipwhitelist', 'verb' => 'GET' ],
		[ 'name' => 'IPWhitelist#add', 'url' => '/ipwhitelist', 'verb' => 'POST' ],
		[ 'name' => 'IPWhitelist#remove', 'url' => '/ipwhitelist/{id}', 'verb' => 'DELETE' ],
	]
];
