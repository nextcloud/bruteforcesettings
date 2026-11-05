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

use OCA\BruteForceSettings\AuditLog\Operation;
use OCA\BruteForceSettings\Config;
use OCA\BruteForceSettings\Controller\IPWhitelistController;
use OCA\BruteForceSettings\Tests\AuditLog\AuditEventHelper;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\PasswordConfirmationRequired;
use OCP\AppFramework\Http\JSONResponse;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\IAppConfig;
use OCP\IRequest;
use OCP\Log\Audit\CriticalActionPerformedEvent;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

class IPWhitelistControllerTest extends TestCase {

	private IAppConfig&MockObject $config;
	private IEventDispatcher&MockObject $eventDispatcher;
	private IPWhitelistController $controller;

	public function setUp(): void {
		parent::setUp();

		$this->config = $this->createMock(IAppConfig::class);
		$this->eventDispatcher = $this->createMock(IEventDispatcher::class);
		$this->controller = new IPWhitelistController(
			'bruteforce',
			$this->createMock(IRequest::class),
			$this->config,
			$this->eventDispatcher,
		);
	}

	private function expectAuditEvent(Operation $operation, string $message, array $parameters): void {
		$this->eventDispatcher->expects($this->once())
			->method('dispatchTyped')
			->with($this->callback(fn (CriticalActionPerformedEvent $event): bool => $event->getLogMessage() === $message
				&& $event->getParameters() === $parameters
				&& AuditEventHelper::hasOperation($event, $operation->value)));
	}

	private function expectNoAuditEvent(): void {
		$this->eventDispatcher->expects($this->never())
			->method('dispatchTyped');
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
			['1234:567:ABEF::1A2B', 24, true, '1234:567:abef::1a2b'],
			['::1', 64, true, null, 1],
			['1234:567:abef::1a2b', -1, false],
			['1234:567:abef::1a2b', 129, false],
		];
	}

	#[DataProvider('dataAdd')]
	public function testAdd(string $ip, int $mask, bool $valid, ?string $expectedIp = null, int $expectedId = 100): void {
		$expectedIp = $expectedIp ?? $ip;

		if (!$valid) {
			$expected = new JSONResponse([], Http::STATUS_BAD_REQUEST);
		} else {
			$this->config->method('getAllValues')
				->with(Config::APPID, Config::ALLOWLIST_PREFIX)
				->willReturn([
					'foobar' => 'No entry',
					'whitelist_1' => '::1/64',
					'whitelist_99' => '::2/64',
				]);

			$this->config->expects($this->once())
				->method('setValueString')
				->with(
					$this->equalTo('bruteForce'),
					$this->equalTo('whitelist_' . $expectedId),
					$this->equalTo($expectedIp . '/' . $mask)
				);

			$expected = new JSONResponse([
				'id' => $expectedId,
				'ip' => $expectedIp,
				'mask' => $mask,
				'comment' => '',
			]);
		}

		if ($valid && $expectedId === 100) {
			$this->expectAuditEvent(
				Operation::AllowlistEntryAdded,
				'Brute-force allowlist entry %s added for %s/%s',
				['entryId' => 100, 'ip' => $expectedIp, 'mask' => $mask],
			);
		} else {
			$this->expectNoAuditEvent();
		}

		$this->assertEquals($expected, $this->controller->add($ip, $mask));
	}

	public function testAddDoesNotLogComment(): void {
		$this->config->method('getAllValues')
			->willReturn([]);

		$this->expectAuditEvent(
			Operation::AllowlistEntryAdded,
			'Brute-force allowlist entry %s added for %s/%s',
			['entryId' => 1, 'ip' => '10.0.0.0', 'mask' => 8],
		);

		$this->controller->add('10.0.0.0', 8, 'Office network');
	}

	public function testRemove() {
		$this->config->method('getValueString')
			->with('bruteForce', 'whitelist_42')
			->willReturn('dead:beef::/64');
		$this->config->expects($this->exactly(2))
			->method('deleteKey')
			->with(
				$this->equalTo('bruteForce'),
				$this->stringStartsWith('whitelist_42')
			);

		$this->expectAuditEvent(
			Operation::AllowlistEntryRemoved,
			'Brute-force allowlist entry %s removed for %s/%s',
			['entryId' => 42, 'ip' => 'dead:beef::', 'mask' => 64],
		);

		$expected = new JSONResponse([]);
		$this->assertEquals($expected, $this->controller->remove(42));
	}

	public function testRemoveUnknown(): void {
		$this->config->method('getValueString')
			->willReturn('');
		$this->config->expects($this->exactly(2))
			->method('deleteKey');

		$this->expectNoAuditEvent();

		$this->assertEquals(new JSONResponse([]), $this->controller->remove(42));
	}

	public static function dataPasswordConfirmationRequired(): array {
		return [
			['add'],
			['remove'],
		];
	}

	#[DataProvider('dataPasswordConfirmationRequired')]
	public function testPasswordConfirmationRequired(string $method): void {
		$attributes = (new \ReflectionMethod(IPWhitelistController::class, $method))->getAttributes(PasswordConfirmationRequired::class);
		$this->assertCount(1, $attributes);
	}
}
