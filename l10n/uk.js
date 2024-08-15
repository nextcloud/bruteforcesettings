OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Налаштування захисту від підбору паролів",
    "Whitelist IPs" : "Білий список IP-адрес",
    "Brute-force protection is meant to protect Nextcloud servers from attempts to\nguess account passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute-force protection makes requests coming from an IP on a\nbrute-force protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of accounts on one IP address." : "Захист від спроб підбору паролів має на меті убезпечення серверів Nextcloud від спроб вгадати пароль з використанням різних способів. Окрім очевидного типу атаки \"давайте спробуємо спиcок найбільш уживаних паролів\", ця система також ускладнює використання більш витончених атак через форму поновлення пароля або через спроби підбору токенів застосунків.\n\nЗахист від підбору паролів уповільнює роботу запитів з підозрілої адреси на 24 години.\n\nЗ цим застосунком адміністратор може вимкнути захист для певної IP-адреси або діапазону. Це може бути корисним для тестування, або в разі хибного спрацювання через використання однієї IP-адреси багатьма користувачами.",
    "Brute-force IP whitelist" : "Білий список IP-адрес",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Зазначте діапазони IP-адрес для додавання до білого списку. Майте на увазі, що користувачі з  білого списку адрес зможуть авторизовуватися без будь-яких обмежень. З міркувань безпеки рекомендовано додавати якнайменше адрес до білого списку чи навіть жодної.",
    "Add a new whitelist" : "Додати новий білий список",
    "IP address" : "Адреса IP",
    "Mask" : "Маска",
    "Add" : "Додати",
    "Your remote address was identified as \"{remoteAddress}\" and is throttled at the moment by {delay}ms." : "Вашу віддалену адресу визначено як \"{remoteAddress}\". Наразі уповільнено взаємодію з цією адресою терміном на {delay} мс.",
    "Your remote address was identified as \"{remoteAddress}\" and is bypassing brute-force protection." : "Вашу віддалену адресу визначено як \"{remoteAddress}\", до неї не застосовуватиметься захист від підбору паролів.",
    "Your remote address was identified as \"{remoteAddress}\" and is not actively throttled at the moment." : "Вашу віддалену адресу визначено як \"{remoteAddress}\". До цієї адреси наразі не застосовується обмеження.",
    "There was an error adding the IP to the whitelist." : "Помилка під час додавання адреси IP до білого списку.",
    "Delete entry for {subnet}" : "Вилучити запис для {subnet}",
    "Add new whitelist" : "Додати новий білий список"
},
"nplurals=4; plural=(n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);");
