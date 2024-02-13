# 💪 Nextcloud Brute Force Settings

This app makes it possible (via the Web UI) to view the status of a connection and modify certain parameters of the [brute force protection](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/bruteforce_configuration.html) built into Nextcloud Server. 

![Screenshot of configuration](https://raw.githubusercontent.com/nextcloud/bruteforcesettings/master/screenshots/1.png)

Currently an admin can view the status of the IP address they are connecting from as well as specify IPv4 or IPv6 addresses and ranges to exempt from brute force protection. 

Additional [enhancements](https://github.com/nextcloud/bruteforcesettings/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement) may be made in the future, within this app and/or in combination with Nextcloud Server for additional monitoring or behavior adjustments related to brute force protection.

> [!TIP]
> Most nuisance triggering of brute force protection can be resolved through [proper configuration of reverse proxies](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/bruteforce_configuration.html#brute-force-protection-and-load-balancer-reverse-proxy). In other cases, select IP addresses that need to be whitelisted can be configured within this app (while leaving brute force protection enabled). This can be useful for testing purposes or when there are a lot of people (or devices) connecting from a known, single IP address.

> [!IMPORTANT]
> Disabling this app merely removes your ability to *adjust* brute force related settings - **it does not disable brute force protection in Nextcloud Server itself.** If that is your goal, you must [set a special value in your Nextcloud  `config.php`](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/config_sample_php_parameters.html#auth-bruteforce-protection-enabled) to disable brute force protection. 

## Background

[Brute force protection](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/bruteforce_configuration.html) is meant to protect Nextcloud servers from attempts to guess passwords and tokens in various ways. Besides the obvious "*let's try a big list of commonly used passwords*" attack, it also makes it harder to use slightly more sophisticated attacks via the reset password form or trying to find app password tokens.

If triggered, brute force protection makes requests - coming from an IP on a brute force protected controller - slower for up to a 24 hour period 

## Installation

### Nextcloud 25 and newer

The app is [shipped](https://docs.nextcloud.com/server/latest/developer_manual/app_publishing_maintenance/release_process.html#shipped-apps) and comes with the installation of Nextcloud Server. No additional steps are necessary to install.

### Nextcloud 24 and older

Old versions of this remain available through the [app store](https://apps.nextcloud.com/apps/bruteforcesettings). They can be [installed through Nextcloud's app management UI](https://docs.nextcloud.com/server/latest/admin_manual/apps_management.html#managing-apps). 

> [!NOTE]
> Newer versions of the app are not included in the app store since it is now a shipped app.

## Releases and CHANGELOGs

As a shipped app:

- changes are posted within the [Nextcloud Server changelog](https://nextcloud.com/changelog/).
- releases are **not** posted in this GitHub repository, but they are [tagged](https://github.com/nextcloud/bruteforcesettings/tags) for code perusal.
- it is automatically kept up-to-date with each Nextcloud Server release.

## Usage

- The user interface added by this app is found under *Administration settings -> Security* under the *Brute-force IP whitelist* heading.

## How it works

This application merely manages some of the settings associated with brute force protection. To understand how that protection works, review the [How it works](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/bruteforce_configuration.html#how-it-works) section of Brute Porce Protection chapter in the Administration Manual.

## Documentation

* The functionality of Brute Force Protection itself is documented in the Nextcloud Administration Manual in the [Brute force protection](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/bruteforce_configuration.html) chapter.
  - Additional special configuration parameters are also documented in the Nextcloud Administration Manual in the [Configuration Parameters](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/config_sample_php_parameters.html#auth-bruteforce-protection-enabled) section.
  - There are also [several brute force related `occ` commands](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/occ_command.html#security).
* Developers can enable brute force protection on security sensitive areas of their application as described in the [brute force protection section of the Developer Manual](https://docs.nextcloud.com/server/latest/developer_manual/basics/controllers.html#brute-force-protection).

## Related

* The optional [`suspicious_login` app](https://github.com/nextcloud/suspicious_login).
* [Using `fail2ban` with Nextcloud Server](https://docs.nextcloud.com/server/latest/admin_manual/installation/harden_server.html#setup-fail2ban).
* The [Hardening and security guidance](https://docs.nextcloud.com/server/latest/admin_manual/installation/harden_server.html) chapter of the Nextcloud Administration Manual.
* The [Logging](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/logging_configuration.html) chapter of the Nextcloud Administration Manual.
* The [optional audit log](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/logging_configuration.html#admin-audit-log-optional) provided by the `admin_audit` app.
* The [Reverse Proxy configuration](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/reverse_proxy_configuration.html) chapter of the Nextcloud Administration Manual.
* [Rate limiting](https://docs.nextcloud.com/server/latest/developer_manual/digging_deeper/security.html#programmatic-rate-limiting) in Nextcloud Server (built into some sensitive areas) and [using it](https://docs.nextcloud.com/server/latest/developer_manual/basics/controllers.html#rate-limiting)

## Help & Contributing

- Bug reports: https://github.com/nextcloud/bruteforcesettings/issues (*not* for general troubleshooting assistance)
- Enhancement ideas: https://github.com/nextcloud/bruteforcesettings/issues
- Pull requests: https://github.com/nextcloud/bruteforcesettings/pulls
- Troubleshooting assistance: https://help.nextcloud.com
- Code: https://github.com/nextcloud/bruteforcesettings/tree/master

Keep in mind that the brute force protection implementation is primarily within Nextcloud Server itself so for some details it may be more appropriate to look there.
