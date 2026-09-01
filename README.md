# 💪 Nextcloud Brute Force Settings

[![REUSE status](https://api.reuse.software/badge/github.com/nextcloud/bruteforcesettings)](https://api.reuse.software/info/github.com/nextcloud/bruteforcesettings)

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

* The [`suspicious_login` app](https://github.com/nextcloud/suspicious_login):
  - *Detects logins to a Nextcloud account that are successful but potentially suspicious based on their IP address without requiring any upkeep (or, generally, configuration)*
* The [`password_policy` app](
https://github.com/nextcloud/password_policy)
  - *Manages password related policies with sane defaults and some flexibility*
* [Using `fail2ban` with Nextcloud Server](https://docs.nextcloud.com/server/latest/admin_manual/installation/harden_server.html#setup-fail2ban).
* The [Hardening and security guidance](https://docs.nextcloud.com/server/latest/admin_manual/installation/harden_server.html) chapter of the Nextcloud Administration Manual.
* The [Logging](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/logging_configuration.html) chapter of the Nextcloud Administration Manual.
* The [optional audit log](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/logging_configuration.html#admin-audit-log-optional) provided by the `admin_audit` app.
* The [Reverse Proxy configuration](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/reverse_proxy_configuration.html) chapter of the Nextcloud Administration Manual.
* [Rate limiting](https://docs.nextcloud.com/server/latest/developer_manual/digging_deeper/security.html#programmatic-rate-limiting) in Nextcloud Server (built into some sensitive areas) and [using it](https://docs.nextcloud.com/server/latest/developer_manual/basics/controllers.html#rate-limiting)

## Troubleshooting

*invalid password attempts from *any* IP address are disabling accounts*

* The above is likely the `password_policy` app if accounts are being *deactivated* outright.
* If actions are merely being slowed down or reported as temporarily unavailable (for no more 30 minutes), that sounds like Brute force protection. Reviewing the BFP chapter in the Nextcloud Admin Manual will help you understand how it functions and decide how to best integrate it into your environment as well as the most probable reasons for false positives and nuisance triggers.
* If multiple accounts are impacted, make sure to confirm the source IP addresses indicated in the Nextcloud Log for each client connection are unique. If not, you may need to review your Trusted Proxies configuration.
* It's possible for more than one of the above to be true simultaneously.

*valid login attempts are triggering emails about logins from suspicious IP addresses*

* The above is the `suspicious_login` app.

*certain functions (transactions) return errors when used too heavily*

* This is Nextcloud's Rate Limiting functionality, which limits transactions that are otherwise valid (and coming from already authenticated users), but are occurring too frequently*.
* In some cases, such as CalDAV, this rate limiting may be customizable. In most cases, reasonable defaults are hard coded.

*transactions - and certainly login attempts - are slow or seem to be banned for up to 30 minutes for some (or all) users*

* If seemingly **all** (or many) users are impacted, make sure to confirm the source IP addresses indicated in the Nextcloud Log for each client connection are unique. If not, you may need to review your Trusted Proxies configuration.
* If some, this is likely BPF

## Development ideas:

<-- xxx Add links to Issues tracking, where applicable -->
* Additional monitoring
 - Reset attempts history for an IP address from the Web UI
 - Reporting/Summarizing (per account, per system)
* Management
  - Whitelist/blacklist management
  - Additional customization of behavior 
* Delegation
* Integration
  - With `suspicious_login`
  - A single/consolidated Security panel (BPF, Password Policies, 

(to be filled in)

## Help & Contributing

- Bug reports: https://github.com/nextcloud/bruteforcesettings/issues (*not* for general troubleshooting assistance)
- Enhancement ideas: https://github.com/nextcloud/bruteforcesettings/issues
- Pull requests: https://github.com/nextcloud/bruteforcesettings/pulls
- Troubleshooting assistance: https://help.nextcloud.com
- Code: https://github.com/nextcloud/bruteforcesettings/tree/master

Keep in mind that the brute force protection implementation is primarily within Nextcloud Server itself so for some details it may be more appropriate to look there.
