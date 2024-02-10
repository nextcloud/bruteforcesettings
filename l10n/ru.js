OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Параметры защиты от перебора пароля",
    "Whitelist IPs" : "Белый список адресов",
    "Brute-force IP whitelist" : "Список IP-адресов, исключённых для защиты от перебора",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Диапазоны адресов, перечисленные ниже, не будут защищены защитой от перебора пароля. Внимание: частота попыток входа с этих адресов не будет ограничиваться. Из соображений безопасности, рекомендуется указывать как можно меньше адресов, а в идеальном случае — не использовать этот список.",
    "Add" : "Добавить",
    "Your remote address was identified as \"{remoteAddress}\" and is throttled at the moment by {delay}ms." : "Ваш удаленный адрес был идентифицирован как «{remoteAddress}» и в данный момент ограничен {delay}ms.",
    "Your remote address was identified as \"{remoteAddress}\" and is not actively throttled at the moment." : "Ваш удаленный адрес был идентифицирован как «{remoteAddress}» и в данный момент активно не регулируется.",
    "Delete entry for {subnet}" : "Удалить записи для {subnet}",
    "Brute Force Protection is meant to protect Nextcloud servers from attempts to\nguess account passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute force protection makes requests coming from an IP on a\nbruteforce protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of accounts on one IP address." : "Brute Force Protection (Защита паролей от взлома методом перебора) предназначена для защиты серверов Nextcloud от попыток  различными способами угадать пароли пользователей. Помимо очевидной типа «*давайте попробуем использовать большой список часто используемых паролей*», это также затрудняет использование более лёгких атак с помощью формы сброса пароля или попыток привязать токены к паролю приложения.\n\nПриложение защиты от перебора пароля добавляет на 24 часа задержку в ответах ответы на запросы, поступающие с одного и того же IP-адреса.\n\nПриложение позволяет администратору исключать IP-адрес или диапазон IP-адресов из такой защиты, что может быть полезно при тестировании, а также при наличии ложных срабатываний из-за большого количества пользователей, использующих один IP-адрес.",
    "Add new whitelist" : "Добавить в белый список",
    "Delete" : "Удалить"
},
"nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);");
