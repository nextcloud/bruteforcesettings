OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Nastavení ochrany proti útokům vedeným zkoušením všech možných hesel",
    "Whitelist IPs" : "IP adresy ze kterých je umožněn přístup",
    "Brute Force Protection is meant to protect Nextcloud servers from attempts to\nguess account passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute force protection makes requests coming from an IP on a\nbruteforce protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of accounts on one IP address." : "Ochrana proti útokům hrubou silou slouží k ochraně Nextcloud serverů proti\npokusům o uhádnutí hesla k účtu. Krom zřejmého útoku „vyzkoušíme\nvšechna běžně používaná hesla“ ztěžuje i sofistikovanější útoky, vedené\nprostřednictvím formuláře pro resetování hesla, nebo pokusu o zjištění\ntokenu aplikace.\n\nPokud je zjištěn útok, aplikace na 24 hodin zpomalí přijímání požadavků z útočníkovy IP adresy na daném aplikačním programovém rozhraní (API) chráněného řadiče.\n\nSprávce může v této aplikaci z takovéto ochrany vyjmout IP adresu či\ncelý rozsah, což se může hodit pro testovací účely, nebo pokud z jedné\nadresy přichází mnoho účtů.",
    "Brute-force IP whitelist" : "Seznam IP adres vyjmutých ze zamezování útokům hrubou silou",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Pro označení rozsahů IP adres jako bezpečných ohledně ochrany proti útoku hrubou silou, zadejte je níže. Uvědomte si ale, že IP adresy z tohoto seznamu mohou provádět pokusy o ověření bez jakéhokoli omezení. Z důvodu zabezpečení je doporučeno mít zde co nejméně strojů nebo ideálně vůbec žádné.",
    "Add new whitelist" : "Přidat nový seznam výjimek",
    "Add" : "Přidat",
    "Your remote address was identified as \"{remoteAddress}\" and is throttled at the moment by {delay}ms." : "Vaše vzdálená adresa byla identifikována jako „{remoteAddress}“ a v tuto chvíli je provoz z ní omezován prodlevou {delay}ms.",
    "Your remote address was identified as \"{remoteAddress}\" and is bypassing bruteforce protection." : "Vaše vzdálená adresa byla identifikována jako „{remoteAddress}“ a v tuto chvíli je ochrana před útokem hrubou silou z ní neaktivní.",
    "Your remote address was identified as \"{remoteAddress}\" and is not actively throttled at the moment." : "Vaše vzdálená adresa byla identifikována jako „{remoteAddress}“ a v tuto chvíli je provoz z ní není omezován.",
    "Delete entry for {subnet}" : "Smazat položku pro {subnet}",
    "Delete" : "Smazat"
},
"nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;");
