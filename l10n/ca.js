OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Configuració de força bruta",
    "Whitelist IPs" : "Adreces IP segures",
    "Brute Force Protection is meant to protect Nextcloud servers from attempts to\nguess user passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute force protection makes requests coming from an IP on a\nbruteforce protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of users on one IP address." : "La Protecció d'Atac per Força Bruta serveix per protegir servidors Nextcloud d'intents d'esbrinar\nper vàries maneres les contrasenyes dels usuaris. A part de fer servir atacs obvis com ara\n\"provem aquesta llista immensa de contrasenyes més usades\", aquest servei també ajuda\na fer més difícil emprar atacs més sofisticats que fan servir el formulari per refer la contrasenya\no intentar trobar contrasenyes dels identificadors de les apps.\n\nSi s'activa, la protecció de força bruta farà que les sol·licituds que provinguin d'una IP en un\ncontrolador protegit de força bruta amb la mateixa API vagin més lentes durant un període de 24\nhores.\n\nAmb aquest app, l'administrador pot excloure una adreça IP o un rang d'IPs d'aquesta protecció\nla qual cosa pot ser útil per quan es fan proves, o quan hi ha falsos positius degut a que\nmolts usuaris estan fent servir la mateixa adreça IP.",
    "Brute-force IP whitelist" : "Llista blanca d'IPs de força bruta",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Per afegir rangs d'IPs a la llista blanca de la protecció de força bruta especifiqueu-les aquí sota. Tingueu present que qualsevol adreça IP llistada aquí podrà generar intents autenticació sense estar-ne controlada. Per raons de seguretat, es recomana llistar-ne les menys possibles o fins i tot cap.",
    "Add new whitelist" : "Afegeix una nova llista blanca",
    "Add" : "Afegeix",
    "Delete" : "Suprimeix"
},
"nplurals=2; plural=(n != 1);");
