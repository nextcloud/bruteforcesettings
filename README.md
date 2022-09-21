# BruteForceSettings

This app provides the possibility to manage some settings of the brute force protection in Nextcloud.

- [See app in NC AppStore](https://apps.nextcloud.com/apps/bruteforcesettings)

## Screenshot

![Screenshot of configuration](https://raw.githubusercontent.com/nextcloud/bruteforcesettings/master/screenshots/1.png)

## Description

Brute Force Protection is meant to protect Nextcloud servers from attempts to guess account passwords in various ways. Besides the obvious "*let's try a big list of commonly used passwords*" attack, it also makes it harder to use slightly more sophisticated attacks via the reset password form or trying to find app password tokens.

If triggered, brute force protection makes requests coming from an IP on a bruteforce protected controller with the same API slower for a 24 hour period.

With this app, the admin can exempt an IP address or range from this protection which can be useful for testing purposes or when there are false positives due to a lot of accounts on one IP address.
