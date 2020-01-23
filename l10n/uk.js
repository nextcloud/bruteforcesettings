OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Налаштування брут-форсу",
    "Whitelist IPs" : "Білий список IP-адресів",
    "Brute Force Protection is meant to protect Nextcloud servers from attempts to\nguess user passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute force protection makes requests coming from an IP on a\nbruteforce protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of users on one IP address." : "Захист від спроб підбору паролей має на меті убезпечення серверів Nextcloud від спроб вгадати пароль з використанням різних шляхів. Крім очевидного типу атаки \"спробуймо спикок найбільш уживаних паролей\" ця система також ускладнює використання більш складних атак через форму поновлення пароля або через спроби підбору токенів застосунків.\n\nЗахист від підбору паролей уповільнює роботу запитів з підозрілої адреси на 24 години.\n\nЗа допомогою налаштувань адміністратор може виключити певні адреси або діапазони адрес шляхом внесення до білого списку. Це може бути корисним для тестування або при фальшивих спрацюваннях системи, наприклад коли багато користувачів підключаються з однієї адреси.",
    "Brute-force IP whitelist" : "Білий список IP-адрес брут-форсу",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Вкажіть діапазони IP-адрес для додавання до білого списку. Майте на увазі, що будь-яка адреса з білого списку може виконувати спроби аутентифікації без будь-яких обмежень. З міркувань безпеки рекомендовано додавати якнайменше адрес до білого списку, чи навіть жодної.",
    "Add new whitelist" : "Додати новий білий список",
    "Add" : "Додати",
    "Delete" : "Видалити"
},
"nplurals=4; plural=(n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);");
