OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Brute-force beállítások",
    "Whitelist IPs" : "IP-címek fehérlistára tétele",
    "Brute Force Protection is meant to protect Nextcloud servers from attempts to\nguess account passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute force protection makes requests coming from an IP on a\nbruteforce protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of accounts on one IP address." : "A Brute Force védelem célja, hogy megvédje a Nextcloud szervereket a különböző módszerekkel történő jelszó kitalálási kísérletektől. Ez nemcsak a nyilvánvaló \"próbáljunk ki egy nagy listát a gyakran használt jelszavakból\" támadást nehezíti meg, hanem nehezebbé teszi a kissé bonyolultabb támadásokat is a jelszó visszaállító űrlapon keresztül, vagy az alkalmazás jelszó tokenek keresését.\n\nHa bekapcsolva van, a Brute Force védelem lassítja azokat a kéréseket, amelyek egy Brute Force védelemmel ellátott vezérlőről érkeznek ugyanarról az IP-ről, ugyanazzal az API-val, 24 órás időszakban.\n\nEzzel az alkalmazással az adminisztrátor felmenthet egy IP-címet vagy tartományt ettől a védelemtől, ami hasznos lehet tesztelési célokra, vagy ha hamis pozitívumok vannak, mert sok fiók van egy IP-címen.",
    "Brute-force IP whitelist" : "Brute-force IP-cím fehérlista",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Itt adhatja meg a brute-force támadás elleni védelem szempontjából fehérlistára tett IP-tartományokat. Vegye figyelembe, hogy minden ilyen IP-cím hitelesítési kérelme késleltetés nélkül végrehajtódik. Biztonsági okokból a lehető legkevesebb gépet érdemes fehérlistára tenni, vagy leginkább egyetlen egyet sem.",
    "Add new whitelist" : "Új fehérlista hozzáadása",
    "Add" : "Hozzáadás",
    "Delete" : "Törlés"
},
"nplurals=2; plural=(n != 1);");
