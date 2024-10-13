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

use OCA\BruteForceSettings\Controller\IPWhitelistController;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\JSONResponse;
use OCP\IConfig;
use OCP\IRequest;
use Test\TestCase;

class IPWhitelistControllerTest extends TestCase {

	/** @var IConfig|\PHPUnit_Framework_MockObject_MockObject */
	private $config;
	/** @var IPWhitelistController */
	private $controller;

	public function setUp() {
		parent::setUp();

		$this->config = $this->createMock(IConfig::class);
		$this->controller = new IPWhitelistController(
			'bruteforce',
			$this->createMock(IRequest::class),
			$this->config
		);
	}

	public function testGetAll() {
		$this->config->method('getAppKeys')
			->with($this->equalTo('bruteForce'))
			->willReturn([
				'foobar',
				'whitelist_0',
				'whitelist_99',
			]);

		$this->config->method('getAppValue')
			->will($this->returnCallback(function ($app, $key) {
				if ($app !== 'bruteForce') {
					$this->fail();
				}
				if ($key === 'whitelist_0') {
					return '192.168.2.0/24';
				} elseif ($key === 'whitelist_99') {
					return 'dead:beef:cafe::/92';
				}
				$this->fail();
			}));

		$expected = new JSONResponse([
			[
				'id' => 0,
				'ip' => '192.168.2.0',
				'mask' => '24',
			],
			[
				'id' => 99,
				'ip' => 'dead:beef:cafe::',
				'mask' => '92',
			]
		]);

		$this->assertEquals($expected, $this->controller->getAll());
	}

	public function dataAdd() {
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

	/**
	 * @dataProvider dataAdd
	 *
	 * @param string $ip
	 * @param int $mask
	 * @param bool $valid
	 */
	public function testAdd($ip, $mask, $valid) {
		if (!$valid) {
			$expected = new JSONResponse([], Http::STATUS_BAD_REQUEST);
		} else {
			$this->config->method('getAppKeys')
				->with($this->equalTo('bruteForce'))
				->willReturn([
					'foobar',
					'whitelist_0',
					'whitelist_99',
				]);

			$this->config->expects($this->once())
				->method('setAppValue')
				->with(
					$this->equalTo('bruteForce'),
					$this->equalTo('whitelist_100'),
					$this->equalTo($ip . '/' . $mask)
				);

			$expected = new JSONResponse([
				'id' => 100,
				'ip' => $ip,
				'mask' => $mask,
			]);
		}

		$this->assertEquals($expected, $this->controller->add($ip, $mask));
	}

	public function testRemove() {
		$this->config->expects($this->once())
			->method('deleteAppValue')
			->with(
				$this->equalTo('bruteForce'),
				$this->equalTo('whitelist_42')
			);

		$expected = new JSONResponse([]);
		$this->assertEquals($expected, $this->controller->remove(42));
	}
}
