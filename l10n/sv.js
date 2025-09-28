OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Brute-force inställningar",
    "Whitelist IPs" : "Vitlistade IP-adresser",
    "Brute-force protection is meant to protect Nextcloud servers from attempts to\nguess account passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute-force protection makes requests coming from an IP on a\nbrute-force protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of accounts on one IP address." : "Skydd mot uttömmande sökning skyddar Nextcloud servrar från försök att\ngissa lösenord på olika sätt. Utöver den uppenbara \"*låt oss prova en stor\nlista med vanliga lösenord*\"-attacken, blir det också svårare att använda\nlite mer sofistikerade attacker via lösenordsåterställningsformuläret eller försöka\nhitta app-tokens.\n\nOm skyddet mot uttömmande sökning löser ut  gör det API-anrop från en IP-adress långsammare under 24 timmar.\n\nMed denna app kan administratören undanta en IP-adress eller flera från\nskyddet, vilket kan vara användbart för test syften eller vid ååterkommande\nfalsklarm, t ex på grund av att många konton loggar in från samma IP-adress.",
    "Your remote address was identified as \"{remoteAddress}\" and is throttled at the moment by {delay}ms." : "Din fjärradress identifierades som \"{remoteAddress}\" och stryps för tillfället {delay}ms.",
    "Your remote address was identified as \"{remoteAddress}\" and is bypassing brute-force protection." : "Din fjärradress identifierades som \"{remoteAddress}\" och kringgår brute-force skyddet.",
    "Your remote address was identified as \"{remoteAddress}\" and is not actively throttled at the moment." : "Din fjärradress identifierades som \"{remoteAddress}\" och är inte aktivt strypt för tillfället.",
    "There was an error adding the IP to the whitelist." : "Det uppstod ett fel när IP-adressen skulle läggas till i vitlistan.",
    "Brute-force IP whitelist" : "Brute-force IP-vitlista",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Ange IP-intervall du vill utesluta från \"brute-force\" skyddet nedan. Observera att varje vitlistad IP kan utföra autentiseringsförsök utan någon strypning. Av säkerhetsskäl rekommenderas att du listar så få värdar som möjligt eller helst inga alls.",
    "Apply whitelist to rate limit" : "Verkställ dessa undantag från brute-force skyddet",
    "Add a new whitelist" : "Lägg till en ny vitlista",
    "IP address" : "IP-adress",
    "Mask" : "Mask",
    "Add" : "Lägg till",
    "Delete entry for {subnet}" : "Ta bort post för {subnet}"
},
"nplurals=2; plural=(n != 1);");
