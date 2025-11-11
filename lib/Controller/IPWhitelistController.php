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
			$comment = $this->appConfig->getValueString(Config::APPID, $key . Config::COMMENT_SUFFIX, lazy: true);

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
	public function add(string $ip, int $mask, string $comment = ''): JSONResponse {
		// Make IPv6 lowercase for consistency
		$ip = strtolower($ip);

		if (!filter_var($ip, FILTER_VALIDATE_IP)
			|| (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4) && ($mask < 0 || $mask > 32))
			|| (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6) && ($mask < 0 || $mask > 128))) {
			return new JSONResponse([], Http::STATUS_BAD_REQUEST);
		}

		$newValue = $ip . '/' . $mask;
		$configMap = $this->appConfig->getAllValues(Config::APPID, Config::ALLOWLIST_PREFIX);

		$id = 0;
		$maxId = 0;
		foreach ($configMap as $key => $value) {
			$tmpId = (int)substr($key, strlen(Config::ALLOWLIST_PREFIX));
			if ($value === $newValue && !str_ends_with($key, Config::COMMENT_SUFFIX)) {
				$id = $tmpId;
				break;
			}

			if ($tmpId > $maxId) {
				$maxId = $tmpId;
			}
		}

		if ($id === 0) {
			$id = $maxId + 1;
		}

		$this->appConfig->setValueString(Config::APPID, Config::ALLOWLIST_PREFIX . $id, $newValue);
		$comment = trim(substr($comment, 0, Config::MAX_COMMENT_LENGTH));
		if ($comment !== '') {
			$this->appConfig->setValueString(Config::APPID, Config::ALLOWLIST_PREFIX . $id . Config::COMMENT_SUFFIX, $comment, lazy: true);
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
