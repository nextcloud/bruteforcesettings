OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Параметры защиты от перебора пароля",
    "Whitelist IPs" : "Белый список адресов",
    "Brute-force protection is meant to protect Nextcloud servers from attempts to\nguess account passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute-force protection makes requests coming from an IP on a\nbrute-force protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of accounts on one IP address." : "Защита от подбора паролей предназначена для защиты серверов Nextcloud от попыток угадать пароли учетных записей различными способами. Помимо очевидной атаки «*давайте попробуем большой\nсписок часто используемых паролей*», она также затрудняет использование\nнемного более сложных атак через форму сброса пароля или попытки\nнайти токены паролей приложений.\n\nПри срабатывании защита от подбора паролей замедляет запросы, поступающие с IP-адреса на\nконтроллере, защищенном от подбора паролей, с тем же API на 24 часа.\n\nС помощью этого приложения администратор может исключить IP-адрес или диапазон из этой\nзащиты, что может быть полезно для целей тестирования или при ложных\nсрабатываниях из-за большого количества учетных записей на одном IP-адресе.",
    "Brute-force IP whitelist" : "Список IP-адресов, исключённых для защиты от перебора",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Диапазоны адресов, перечисленные ниже, не будут защищены защитой от перебора пароля. Внимание: частота попыток входа с этих адресов не будет ограничиваться. Из соображений безопасности, рекомендуется указывать как можно меньше адресов, а в идеальном случае — не использовать этот список.",
    "Add a new whitelist" : "Добавьте новый белый список",
    "IP address" : "IP адрес",
    "Mask" : "Маска",
    "Add" : "Добавить",
    "Your remote address was identified as \"{remoteAddress}\" and is throttled at the moment by {delay}ms." : "Ваш удаленный адрес был идентифицирован как «{remoteAddress}» и в данный момент ограничен {delay}ms.",
    "Your remote address was identified as \"{remoteAddress}\" and is bypassing brute-force protection." : "Ваш удаленный адрес был идентифицирован как \"{remoteAddress}\" и обходит защиту от перебора.",
    "Your remote address was identified as \"{remoteAddress}\" and is not actively throttled at the moment." : "Ваш удаленный адрес был идентифицирован как «{remoteAddress}» и в данный момент активно не регулируется.",
    "There was an error adding the IP to the whitelist." : "Произошла ошибка при добавлении IP-адреса в белый список.",
    "Delete entry for {subnet}" : "Удалить записи для {subnet}",
    "Add new whitelist" : "Добавить в белый список"
},
"nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);");
