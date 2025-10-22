<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2016-2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 Roeland Jago Douma <roeland@famdouma.nl>
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\BruteForceSettings\Settings;

use OCP\AppFramework\Http\TemplateResponse;
use OCP\AppFramework\Services\IAppConfig;
use OCP\AppFramework\Services\IInitialState;
use OCP\IRequest;
use OCP\Security\Bruteforce\IThrottler;
use OCP\Settings\ISettings;

class IPWhitelist implements ISettings {
	public function __construct(
		protected IRequest $request,
		protected IInitialState $initialState,
		protected IThrottler $throttler,
		protected IAppConfig $appConfig,
	) {
	}

	#[\Override]
	public function getForm(): TemplateResponse {
		$this->initialState->provideInitialState('remote-address', $this->request->getRemoteAddress());
		$this->initialState->provideInitialState('bypass-listed', $this->throttler->isBypassListed($this->request->getRemoteAddress()));
		$this->initialState->provideInitialState('delay', $this->throttler->getDelay($this->request->getRemoteAddress()));
		$this->initialState->provideInitialState('apply_allowlist_to_ratelimit', $this->appConfig->getAppValueBool('apply_allowlist_to_ratelimit'));

		return new TemplateResponse('bruteforcesettings', 'ipwhitelist');
	}

	#[\Override]
	public function getSection(): string {
		return 'security';
	}

	#[\Override]
	public function getPriority(): int {
		return 5;
	}
}
