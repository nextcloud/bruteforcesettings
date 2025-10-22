<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2016-2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 Roeland Jago Douma <roeland@famdouma.nl>
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\BruteForceSettings\Controller;

use OCA\BruteForceSettings\Config;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\JSONResponse;
use OCP\IAppConfig;
use OCP\IRequest;

class IPWhitelistController extends Controller {

	public function __construct(
		string $appName,
		IRequest $request,
		private readonly IAppConfig $appConfig,
	) {
		parent::__construct($appName, $request);
	}

	/**
	 * @return JSONResponse
	 */
	public function getAll(): JSONResponse {
		$keys = $this->appConfig->getKeys(Config::APPID);
		$keys = array_filter($keys, static function (string $key) {
			return str_starts_with($key, Config::ALLOWLIST_PREFIX) && !str_ends_with($key, Config::COMMENT_SUFFIX);
		});

		$result = [];
		foreach ($keys as $key) {
			$id = (int)substr($key, strlen(Config::ALLOWLIST_PREFIX));

			$value = $this->appConfig->getValueString(Config::APPID, $key);
			$values = explode('/', $value);
			$comment = $this->appConfig->getValueString(Config::APPID, $key . Config::COMMENT_SUFFIX);

			$result[$id] = [
				'id' => $id,
				'ip' => $values[0],
				'mask' => $values[1],
				'comment' => $comment,
			];
		}

		return new JSONResponse(array_values($result));
	}

	/**
	 * @param string $ip
	 * @param int $mask
	 * @param string $comment
	 * @return JSONResponse
	 */
	public function add(string $ip, int $mask): JSONResponse {
		if (!filter_var($ip, FILTER_VALIDATE_IP) ||
			(filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4) && ($mask < 0 || $mask > 32)) ||
			(filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6) && ($mask < 0 || $mask > 128))) {
			return new JSONResponse([], Http::STATUS_BAD_REQUEST);
		}

		$keys = $this->appConfig->getKeys(Config::APPID);
		$keys = array_filter($keys, static function (string $key) {
			return str_starts_with($key, Config::ALLOWLIST_PREFIX) && !str_ends_with($key, Config::COMMENT_SUFFIX);
		});

		$id = 0;
		foreach ($keys as $key) {
			$tmp = (int)substr($key, strlen(Config::ALLOWLIST_PREFIX));
			if ($tmp > $id) {
				$id = $tmp;
			}
		}
		$id++;

		$value = $ip . '/' . $mask;
		$this->appConfig->setValueString(Config::APPID, Config::ALLOWLIST_PREFIX . $id, $value);
		$comment = trim($comment);
		if ($comment !== '') {
			$this->appConfig->setValueString(Config::APPID, Config::ALLOWLIST_PREFIX . $id . Config::COMMENT_SUFFIX, $comment);
		}

		return new JSONResponse([
			'id' => $id,
			'ip' => $ip,
			'mask' => $mask,
			'comment' => $comment,
		]);
	}

	/**
	 * @param int $id
	 * @return JSONResponse
	 */
	public function remove(int $id): JSONResponse {
		$this->appConfig->deleteKey(Config::APPID, Config::ALLOWLIST_PREFIX . $id);
		$this->appConfig->deleteKey(Config::APPID, Config::ALLOWLIST_PREFIX . $id . Config::COMMENT_SUFFIX);

		return new JSONResponse([]);
	}
}
