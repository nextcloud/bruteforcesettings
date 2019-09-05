OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Nastavitve preprečevanja nasilnega vdora",
    "Whitelist IPs" : "Beli seznam naslovov IP",
    "Brute Force Protection is meant to protect Nextcloud servers from attempts to\nguess user passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute force protection makes requests coming from an IP on a\nbruteforce protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of users on one IP address." : "Varovanje pred nasilnim vdorom oz. Brute Force Protection je namenjeno zaščiti strežnikov Nextcloud pred različnimi poskusi ugibanja uporabniška gesla. Ob očitnem »*poskusimo najprej s seznamom najpogosteje uporabljenih gesel*«, preprečuje tudi nekatere nekoliko bolj izpopolnjene vrste napadov, na primer prek možnosti ponastavitve gesla ali z iskanjem žetonov gesel za program.\n\nČe se varovanje samodejno sproži, zahteve, ki prihajajo iz določenega naslova IP, preusmeri in upočasni za obdobje 24 ur.\n\nS programom lahko skrbnik preizkuša posamezne naslove ali celotna območja IP, pa tudi za ugotavljanje napačnih pozitivnih odzivov zaradi večjega števila uporabnikov, ki so znotraj iste domene oziroma na enakem naslovu IP.",
    "Brute-force IP whitelist" : "Beli seznam naslovov IP za preprečevanje nasilnega vdora",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Za dodajanje na beli seznam je treba posamezen naslov ali obseg naslovov IP vpisati v spodnje polje. Vedite, da lahko katerikoli naslov IP s seznama opravlja overitve brez vsakršnega zadrževanja, zato je iz varnostnih razlogov priporočljivo, da je na belem seznamu čim manj gostiteljev ali celo nobenega.",
    "Add new whitelist" : "Dodaj nov beli seznam",
    "Add" : "Dodaj",
    "Delete" : "Izbriši"
},
"nplurals=4; plural=(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);");
