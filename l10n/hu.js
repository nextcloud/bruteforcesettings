OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Brute-force beállítások",
    "Whitelist IPs" : "IP-címek fehérlistára tétele",
    "Brute Force Protection is meant to protect Nextcloud servers from attempts to\nguess account passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute force protection makes requests coming from an IP on a\nbruteforce protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of accounts on one IP address." : "A brute-force támadás elleni védelem arra szolgál, hogy megvédje a Nextcloud\nkiszolgálókat a fiókjelszavak kitalálásának néhány módjától. A\nnyilvánvaló „*próbáljunk ki egy nagy listát gyakori jelszavakkal*” támadás\nmellett nehezebbé teszi a kifinomultabb támadásokat is, amelyek a\njelszó-visszaállítási űrlapot használnák ki, vagy alkalmazásjelszó-tokenekkel\npróbálkoznak.\n\nHa aktiválásra kerül, a brute-force támadás elleni védelem 24 órára \nlelassítja az API-t az arról az IP-címről érkező kérések kiszolgálásakor.\n\nEzzel az alkalmazással a rendszergazda bizonyos IP-címek esetén\nkikapcsolhatja a védelmet, amely tesztelési célokra lehet hasznos, vagy\nha fals pozitív esetek vannak, mert több fiókot is ugyanarról az\nIP-címről használnak.",
    "Brute-force IP whitelist" : "Brute-force IP-cím fehérlista",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Itt adhatja meg a brute-force támadás elleni védelem szempontjából fehérlistára tett IP-tartományokat. Vegye figyelembe, hogy minden ilyen IP-cím hitelesítési kérelme késleltetés nélkül végrehajtódik. Biztonsági okokból a lehető legkevesebb gépet érdemes fehérlistára tenni, vagy leginkább egyetlen egyet sem.",
    "Add new whitelist" : "Új fehérlista hozzáadása",
    "Add" : "Hozzáadás",
    "Delete" : "Törlés"
},
"nplurals=2; plural=(n != 1);");
