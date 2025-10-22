<?php

/**
 * SPDX-FileCopyrightText: 2017 Roeland Jago Douma <roeland@famdouma.nl>
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\BruteForceSettings\Tests\Settings;

use OCA\BruteForceSettings\Settings\IPWhitelist;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\AppFramework\Services\IAppConfig;
use OCP\AppFramework\Services\IInitialState;
use OCP\IRequest;
use OCP\Security\Bruteforce\IThrottler;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

class IPWhitelistTest extends TestCase {
	private IRequest&MockObject $request;
	private IInitialState&MockObject $initialState;
	private IThrottler&MockObject $throttler;
	private IAppConfig&MockObject $appConfig;
	private IPWhitelist $settings;

	public function setUp(): void {
		parent::setUp();

		$this->request = $this->createMock(IRequest::class);
		$this->initialState = $this->createMock(IInitialState::class);
		$this->throttler = $this->createMock(IThrottler::class);
		$this->appConfig = $this->createMock(IAppConfig::class);
		$this->settings = new IPWhitelist(
			$this->request,
			$this->initialState,
			$this->throttler,
			$this->appConfig,
		);
	}

	public function testGetForm() {
		$expected = new TemplateResponse('bruteforcesettings', 'ipwhitelist');

		$this->assertEquals($expected, $this->settings->getForm());
	}

	public function testGetSection(): void {
		$this->assertSame('security', $this->settings->getSection());
	}

	public function testGetPriority(): void {
		$this->assertSame(5, $this->settings->getPriority());
	}
}
