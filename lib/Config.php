<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\BruteForceSettings;

class Config {
	public const APPID = 'bruteForce';
	public const ALLOWLIST_PREFIX = 'whitelist_';
	public const COMMENT_SUFFIX = '_comment';
	public const MAX_COMMENT_LENGTH = 1000;

}
