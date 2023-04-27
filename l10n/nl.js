OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Bruteforce instellingen",
    "Whitelist IPs" : "Whitelist IPs",
    "Brute-force IP whitelist" : "Bruteforce IP toegangslijst",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Om IP ranges op een toegangslijst te zetten om uit te sluiten van de brute-force bescherming, kun je ze hieronder opgeven. Let op: vanaf elk IP adres op de IP toegangslijst, kunnen onbeperkt inlogacties plaatsvinden. Vanuit de optiek van beveiliging, wordt geadviseerd om geen, of anders zo min mogelijk servers op de IP toegangslijst te zetten.",
    "Add new whitelist" : "Voeg nieuwe IP toegangslijst toe",
    "Add" : "Toevoegen",
    "Delete" : "Verwijderen",
    "Brute Force Protection is meant to protect Nextcloud servers from attempts to\nguess user passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute force protection makes requests coming from an IP on a\nbruteforce protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of users on one IP address." : "Brute Force Protection is bedoeld om Nextcloud servers te beschermen tegen pogingen\nom inloggegevens op verschillende manieren te raden. Naast de \"*laten we een groot\naantal vaak gebruikte wachtwoorden proberen*\" aanval, beschermt het ook tegen meer\ngeavanceerrde aanvallen via de wachtwoordherstel functie en pogingen om \napp wachtwoord token te vinden.\n\nWanneer getriggerd, vertraagt de brute force protection aanvallen van een IP op een\nbruteforce beschermde controller met dezelde API gedurende een 24 uur periode.\n\nMet deze app, kan de beheerder IP adressen of een serie uitsluiten van deze\nbeveiliging voor testdoeleinden of als er veel false positives ontstaan\nwegens veel legitieme gebruikers op 1 IP adres."
},
"nplurals=2; plural=(n != 1);");
