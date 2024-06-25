<?php

declare(strict_types=1);

/**
 * @copyright 2016, Roeland Jago Douma <roeland@famdouma.nl>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
 * @license GNU AGPL version 3 or any later version
 *
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
