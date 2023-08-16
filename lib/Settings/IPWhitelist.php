<?php

declare(strict_types=1);

/**
 * @copyright 2016, Roeland Jago Douma <roeland@famdouma.nl>
 *
 * @author Roeland Jago Douma <roeland@famdouma.nl>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
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
