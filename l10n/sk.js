OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Nastavenia pre útoky hrubou silou",
    "Whitelist IPs" : "Zoznam povolených IP adries",
    "Brute-force protection is meant to protect Nextcloud servers from attempts to\nguess account passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute-force protection makes requests coming from an IP on a\nbrute-force protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of accounts on one IP address." : "Ochrana proti útokom hrubou silou slúži k ochrane Nextcloud serverov proti pokusom o uhádnutie užívateľských hesiel rôznymi spôsobmi. Okrem zrejmého útoku \"vyskúšame všetky bežne používané heslá\" sťažuje aj sofistikovanejšie útoky, vedené prostredníctvom formulára pre resetovanie hesla alebo pokusom o zistenie tokenu aplikácie.\n\nAk je zistený útok, aplikácia na 24 hodín spomalí prijímanie požiadaviek z útočníkovej IP adresy na danom aplikačnom programovom rozhraní chráneného radiča.\n\nSprávca môže v tejto aplikácii z tejto ochrany odčleniť IP adresu alebo celý IP rozsah, čo sa môže hodiť pre testovacie účely alebo ak z jednej adresy prichádza veľa užívateľov.",
    "Brute-force IP whitelist" : "Zoznam povolených IP adries pre útok hrubou silou",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Zadať rozsahy adries IP ako dôveryhodné v rámci ochrany proti útoku hrubou silou môžete nižšie. Je potrebné si uvedomiť, že adresy z tohto zoznamu môžu uskutočňovať pokusy o overenie bez akéhokoľvek obmedzenia. Z bezpečnostných dôvodov odporúčame mať uvedených čo najmenej adries, ideálne žiadne.",
    "Add a new whitelist" : "Pridať nový zoznam povolených adries",
    "IP address" : "IP adresa",
    "Mask" : "Maska",
    "Add" : "Pridať",
    "Your remote address was identified as \"{remoteAddress}\" and is throttled at the moment by {delay}ms." : "Váša vzdialená adresa bola identifikovaná ako \"{remoteAddress}\" a momentálne je obmedzená na {delay} ms.",
    "Your remote address was identified as \"{remoteAddress}\" and is bypassing brute-force protection." : "Váša vzdialená adresa bola identifikovaná ako \"{remoteAddress}\" a obchádza ochranu pred hrubou silou.",
    "Your remote address was identified as \"{remoteAddress}\" and is not actively throttled at the moment." : "Váša vzdialená adresa bol identifikovaná ako \"{remoteAddress}\" a momentálne nie je aktívne obmedzená.",
    "There was an error adding the IP to the whitelist." : "Vyskytla sa chyba pri pridávaní IP adresy do zoznamu povolených.",
    "Delete entry for {subnet}" : "Vymažte záznam pre {subnet}",
    "Add new whitelist" : "Pridať nový zoznam povolených adries"
},
"nplurals=4; plural=(n % 1 == 0 && n == 1 ? 0 : n % 1 == 0 && n >= 2 && n <= 4 ? 1 : n % 1 != 0 ? 2: 3);");
