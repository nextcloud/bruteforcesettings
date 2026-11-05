<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\BruteForceSettings\AuditLog;

/**
 * Operations Brute-force settings writes to the admin audit log, in the form `app.entity.action`.
 * The values are matched by log consumers (filters, alert rules, SIEM imports), so changing one is a breaking change for them.
 * Case names may be renamed.
 */
enum Operation: string {
	case AllowlistEntryAdded = 'bruteforcesettings.allowlist_entry.added';
	case AllowlistEntryRemoved = 'bruteforcesettings.allowlist_entry.removed';

	public function description(): string {
		return match ($this) {
			self::AllowlistEntryAdded => 'An IP range is added to the brute-force allowlist.',
			self::AllowlistEntryRemoved => 'An IP range is removed from the brute-force allowlist.',
		};
	}
}
