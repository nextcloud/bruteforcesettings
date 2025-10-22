<?php
/**
 * @copyright 2016, Roeland Jago Douma <roeland@famdouma.nl>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
 * @license GNU AGPL version 3 or any later version
 *
 * SPDX-FileCopyrightText: 2016 Roeland Jago Douma <roeland@famdouma.nl>
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\BruteForceSettings\Tests\Controller;

use OCA\BruteForceSettings\Config;
use OCA\BruteForceSettings\Controller\IPWhitelistController;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\JSONResponse;
use OCP\IAppConfig;
use OCP\IRequest;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

class IPWhitelistControllerTest extends TestCase {

	private IAppConfig&MockObject $config;
	private IPWhitelistController $controller;

	public function setUp(): void {
		parent::setUp();

		$this->config = $this->createMock(IAppConfig::class);
		$this->controller = new IPWhitelistController(
			'bruteforce',
			$this->createMock(IRequest::class),
			$this->config
		);
	}

	public function testGetAll(): void {
		$this->config->method('getKeys')
			->with($this->equalTo(Config::APPID))
			->willReturn([
				'foobar',
				'whitelist_1',
				'whitelist_2_comment',
				'whitelist_99',
			]);

		$this->config->method('getValueString')
			->willReturnCallback(function ($app, $key) {
				if ($key === 'whitelist_1') {
					return '192.168.2.0/24';
				} elseif ($key === 'whitelist_1_comment') {
					return '';
				} elseif ($key === 'whitelist_99') {
					return 'dead:beef:cafe::/92';
				} elseif ($key === 'whitelist_99_comment') {
					return '99 problems';
				}
				$this->fail();
			});

		$expected = new JSONResponse([
			[
				'id' => 1,
				'ip' => '192.168.2.0',
				'mask' => '24',
				'comment' => '',
			],
			[
				'id' => 99,
				'ip' => 'dead:beef:cafe::',
				'mask' => '92',
				'comment' => '99 problems',
			]
		]);

		$this->assertEquals($expected, $this->controller->getAll());
	}

	public static function dataAdd(): array {
		return [
			['8.500.2.3', 24, false],
			['1.2.3.4', 24, true],
			['1.2.3.4', -1, false],
			['1.2.3.4', 33, false],

			['dead:nope::8', 24, false],
			['1234:567:abef::1a2b', 24, true],
			['1234:567:abef::1a2b', -1, false],
			['1234:567:abef::1a2b', 129, false],
		];
	}

	#[DataProvider('dataAdd')]
	public function testAdd(string $ip, int $mask, bool $valid): void {
		if (!$valid) {
			$expected = new JSONResponse([], Http::STATUS_BAD_REQUEST);
		} else {
			$this->config->method('getKeys')
				->with($this->equalTo('bruteForce'))
				->willReturn([
					'foobar',
					'whitelist_0',
					'whitelist_99',
				]);

			$this->config->expects($this->once())
				->method('setValueString')
				->with(
					$this->equalTo('bruteForce'),
					$this->equalTo('whitelist_100'),
					$this->equalTo($ip . '/' . $mask)
				);

			$expected = new JSONResponse([
				'id' => 100,
				'ip' => $ip,
				'mask' => $mask,
				'comment' => '',
			]);
		}

		$this->assertEquals($expected, $this->controller->add($ip, $mask));
	}

	public function testRemove() {
		$this->config->expects($this->exactly(2))
			->method('deleteKey')
			->with(
				$this->equalTo('bruteForce'),
				$this->stringStartsWith('whitelist_42')
			);

		$expected = new JSONResponse([]);
		$this->assertEquals($expected, $this->controller->remove(42));
	}
}
