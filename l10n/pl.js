OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Ustawienia brute-force",
    "Whitelist IPs" : "Biała lista adresów IP",
    "Brute-force protection is meant to protect Nextcloud servers from attempts to\nguess account passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute-force protection makes requests coming from an IP on a\nbrute-force protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of accounts on one IP address." : "Ochrona Brute Force ma na celu ochronę serwerów Nextcloud przed próbami\nodgadnięcia haseł użytkowników na różne sposoby. Poza oczywistym\natakiem na zasadzie \"*spróbujmy użyć dużej listy często używanych\nhaseł*\", utrudnia to także stosowanie nieco bardziej wyrafinowanych ataków\npoprzez formularz resetowania hasła lub próbę znalezienia tokenów hasła do aplikacji.\n\nJeśli zostanie uruchomiona ochrona, spowoduje to, że żądania przychodzące\nz adresu IP na kontrolerze chronionym przed przemocą z tym samym\ninterfejsem API będą wolniejsze przez 24 godziny.\n\nDzięki tej aplikacji administrator może wykluczyć z ochrony adres IP lub\ncały zakres. Może to być pomocne w celach testowych lub gdy pojawia się\ndużo fałszywych alarmów z powodu dużej liczby użytkowników z jednym\nadresem IP.",
    "Your remote address was identified as \"{remoteAddress}\" and is throttled at the moment by {delay}ms." : "Twój adres zdalny został rozpoznany jako \"{remoteAddress}\" i jest obecnie ograniczany przez {delay} ms.",
    "Your remote address was identified as \"{remoteAddress}\" and is bypassing brute-force protection." : "Twój adres zdalny został rozpoznany jako \"{remoteAddress}\" i omija ochronę przed atakami brute-force.",
    "Your remote address was identified as \"{remoteAddress}\" and is not actively throttled at the moment." : "Twój adres zdalny został rozpoznany jako \"{remoteAddress}\" i obecnie nie jest ograniczany.",
    "There was an error adding the IP to the whitelist." : "Wystąpił błąd podczas dodawania adresu IP do białej listy.",
    "Brute-force IP whitelist" : "Biała lista IP brute-force",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Aby dodać do białej listy zakresy adresów IP, które będą wykluczone z ochrony przed brutalną siłą, określ je poniżej. Pamiętaj, że każdy z adresu IP z białej listy może wykonać próby uwierzytelnienia bez ograniczania przepustowości. Ze względów bezpieczeństwa zaleca się umieszczenie na białej liście jak najmniejszej liczby hostów, a najlepiej wcale.",
    "Apply whitelist to rate limit" : "Zastosuj białą listę do limitu zapytań",
    "Add a new whitelist" : "Dodaj nową białą listę",
    "IP address" : "Adres IP",
    "Mask" : "Maska",
    "Add" : "Dodaj",
    "Delete entry for {subnet}" : "Usuń wpis dla {subnet}"
},
"nplurals=4; plural=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);");
