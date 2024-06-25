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

namespace OCA\BruteForceSettings\Settings;

use OCP\AppFramework\Http\TemplateResponse;
use OCP\AppFramework\Services\IInitialState;
use OCP\IRequest;
use OCP\Security\Bruteforce\IThrottler;
use OCP\Settings\ISettings;

class IPWhitelist implements ISettings {
	public function __construct(
		protected IRequest $request,
		protected IInitialState $initialState,
		protected IThrottler $throttler,
	) {
	}

	public function getForm(): TemplateResponse {
		$this->initialState->provideInitialState('remote-address', $this->request->getRemoteAddress());
		$this->initialState->provideInitialState('bypass-listed', $this->throttler->isBypassListed($this->request->getRemoteAddress()));
		$this->initialState->provideInitialState('delay', $this->throttler->getDelay($this->request->getRemoteAddress()));

		return new TemplateResponse('bruteforcesettings', 'ipwhitelist');
	}

	public function getSection(): string {
		return 'security';
	}

	public function getPriority(): int {
		return 5;
	}
}
