OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Ustawienia brute-force",
    "Whitelist IPs" : "Biała lista adresów IP",
    "Brute Force Protection is meant to protect Nextcloud servers from attempts to\nguess user passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute force protection makes requests coming from an IP on a\nbruteforce protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of users on one IP address." : "Ochrona Brute Force ma na celu ochronę serwerów Nextcloud przed próbami\nodgadnięcią haseł użytkowników na różne sposoby. Poza oczywistymi \natakami na zasadzie \"*spróbujmy użyć duzej listy typowych haseł \nużytkowników*\", utrudnia wykorzystanie bardziej skomplikowanych ataków\n poprzez formularz zmiany hasła lub próbę znalezienia tokenów haseł aplikacji\n\nPo wyzwoleniu, ochrona brute force spowalnia zapytania pochodzące z \ndanego IP na chronionym kontrolerze z tym samym API przez okres 24 godzin.\n\nZ tą aplikacją administrator może wykluczyć adres IP lub cały zakres \nz ochrony co może być pomocne w celach testowych lub gdy pojawia się \ndużo fałszywych alarmów z powodu dużej liczby użytkowników z jednym \nadresem IP.",
    "Brute-force IP whitelist" : "Biała lista IP brute-force",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Aby dodać do białej listy zakresy IP, należy je określić poniżej. Zwróć uwagę, że z dowolnego dopuszczonego adresu IP może zostać przeprowadzona próba uwierzytelnienia bez zabezpieczenia przed atakiem. Ze względów bezpieczeństwa zaleca się dodanie do białej listy tak małej liczby hostów, jak to możliwe, a najlepiej nawet żadnej.",
    "Add new whitelist" : "Dodaj nową białą listę",
    "Add" : "Dodaj",
    "Delete" : "Usuń"
},
"nplurals=4; plural=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);");
