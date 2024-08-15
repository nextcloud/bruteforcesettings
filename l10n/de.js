OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Brute-Force Einstellungen",
    "Whitelist IPs" : "IPs whitelisten",
    "Brute-force protection is meant to protect Nextcloud servers from attempts to\nguess account passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute-force protection makes requests coming from an IP on a\nbrute-force protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of accounts on one IP address." : "Brute-Force-Schutz soll Nextcloud-Server vor verschiedenartigen Versuchen schützen, die\nBenutzerpasswörter zu erraten. Neben den\noffensichtlichen \"*lass uns eine große Liste der am häufigsten verwendeten\nPasswörter versuchen*\" Angriffen erschwert es auch etwas raffiniertere\nAngriffe über das Reset-Passwort-Formular oder den Versuch, das\nApp-Passwort-Token finden.\n\nWenn ausgelöst, verlangsamt der Brute-Force-Schutz Anfragen, die\nvon einer IP auf einen Brute-Force-geschützten Controller mit der\ngleichen API kommen für einen Zeitraum von 24 Stunden.\n\nMit dieser App kann die Administration eine IP-Adresse oder einen Bereich von\ndiesem Schutz ausnehmen, was für Testzwecke nützlich sein kann oder\nwenn es sich um falsche Treffer handelt, weil viele Benutzer von einer \nIP-Adresse aus zugreifen.",
    "Brute-force IP whitelist" : "Brute-Force IP-Whitelist",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Um IP-Bereiche vom Brute-Force-Schutz auszunehmen (whitelisting), die Bereiche unten angeben. Bitte beachte, dass jede IP-Adresse ohne Brute-Force-Schutz Authentifizierungsversuche ohne jegliche Einschränkung vornehmen kann. Aus Sicherheitsgründen ist es empfohlen, so wenig Host-Adressen wie möglich auszunehmen, im Idealfall keine einzige. ",
    "Add a new whitelist" : "Eine neue Whitelist hinzufügen",
    "IP address" : "IP-Adresse",
    "Mask" : "Maske",
    "Add" : "Hinzufügen",
    "Your remote address was identified as \"{remoteAddress}\" and is throttled at the moment by {delay}ms." : "Deine Remote-Adresse wurde als „{remoteAddress}“ identifiziert und ist derzeit um {delay}ms gedrosselt.",
    "Your remote address was identified as \"{remoteAddress}\" and is bypassing brute-force protection." : "Deine Remote-Adresse wurde als \"{remoteAddress}“ identifiziert und umgeht den Brute-Force-Schutz.",
    "Your remote address was identified as \"{remoteAddress}\" and is not actively throttled at the moment." : "Deine Remote-Adresse wurde als „{remoteAddress}“ identifiziert und wird derzeit nicht aktiv gedrosselt.",
    "There was an error adding the IP to the whitelist." : "Es gab einen Fehler beim Hinzufügen der IP zur Whitelist.",
    "Delete entry for {subnet}" : "Eintrag für {subnet} löschen",
    "Add new whitelist" : "Neue Whitelist hinzufügen"
},
"nplurals=2; plural=(n != 1);");
