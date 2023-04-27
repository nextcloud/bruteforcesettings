OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Nastavenia pre útoky hrubou silou",
    "Whitelist IPs" : "Zoznam povolených IP adries",
    "Brute-force IP whitelist" : "Zoznam povolených IP adries pre útok hrubou silou",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Zadať rozsahy adries IP ako dôveryhodné v rámci ochrany proti útoku hrubou silou môžete nižšie. Je potrebné si uvedomiť, že adresy z tohto zoznamu môžu uskutočňovať pokusy o overenie bez akéhokoľvek obmedzenia. Z bezpečnostných dôvodov odporúčame mať uvedených čo najmenej adries, ideálne žiadne.",
    "Add new whitelist" : "Pridať nový zoznam povolených adries",
    "Add" : "Pridať",
    "Delete" : "Zmazať",
    "Brute Force Protection is meant to protect Nextcloud servers from attempts to\nguess user passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute force protection makes requests coming from an IP on a\nbruteforce protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of users on one IP address." : "Ochrana proti útokom hrubou silou slúži k ochrane Nextcloud serverov proti\npokusom o uhádnutie používateľského hesla. Okrem zrejmého útoku \"vyskúšame\nvšetky bežne používané heslá\" sťažuje aj sofistikovanejšie útoky, vedené\nprostredníctvom formulára pre resetovanie hesla alebo pokuso o zistenie\ntokenu aplikácie.\n\nAk je zistený útok, aplikácia na 24 hodín spomalí prijímanie požiadaviek z útočníkovej IP adresy na danom aplikačnom programovom rozhraní chráneného radiča.\n\nSprávca môže v tejto aplikácii z tejto ochrany odčleniť IP adresu alebo \ncelý IP rozsah, čo sa môže hodiť pre testovacie účely alebo ak z jednej\nadresy prichádza veľa používateľov."
},
"nplurals=4; plural=(n % 1 == 0 && n == 1 ? 0 : n % 1 == 0 && n >= 2 && n <= 4 ? 1 : n % 1 != 0 ? 2: 3);");
