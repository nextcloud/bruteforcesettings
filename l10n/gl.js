OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Axustes contra ataques por forza bruta",
    "Whitelist IPs" : "Lista de autorización de IP",
    "Brute-force protection is meant to protect Nextcloud servers from attempts to\nguess account passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute-force protection makes requests coming from an IP on a\nbrute-force protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of accounts on one IP address." : "A protección contra ataques por forza bruta está deseñada para protexer os\nservidores NextCloud de intentos de obter os contrasinais das contas de varias\nmaneiras. Ademais do ataque máis obvio «*imos probar unha gran lista de\ncontrasinais frecuentes*», tamén dificulta o uso de ataques máis sofisticados como\nos feitos a través do formulario de restabelecemento do contrasinal ou tentando\natopar os testemuños de contrasinais da aplicación.\n\nSe está activada, a protección fai que as solicitudes que proveñan dese IP se\nredirixan a un controlador protexido contra forza bruta coa mesma API de xeito\nmáis lento durante un período de 24 horas.\n\nCon esta aplicación, o administrador pode eximir un IP ou un intervalo deles desta\nprotección, pode ser útil para fins de proba ou cando haxa falsos positivos\npor mor dunha gran cantidade de usuarios nun mesmo enderezo IP.",
    "Brute-force IP whitelist" : "Lista de autorización de IP para ataques por forza bruta",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Para incluír intervalos de IP na lista de autorización da protección por forza bruta, especifíqueos embaixo. Teña en conta que calquera IP na lista de autorización pode realizar intentos de autenticación sen ningunha limitación. Por mor da seguranza, recomendase incluír na lista de autorización o menos número posíbel de servidores ou incluso, idealmente, ningún.",
    "Add a new whitelist" : "Engadir unha lista de autorización nova",
    "IP address" : "Enderezo IP",
    "Mask" : "Máscara",
    "Add" : "Engadir",
    "Your remote address was identified as \"{remoteAddress}\" and is throttled at the moment by {delay}ms." : "O seu enderezo remoto foi identificado como «{remoteAddress}» e neste momento ten unha estrangulación de {delay}ms.",
    "Your remote address was identified as \"{remoteAddress}\" and is bypassing brute-force protection." : "O seu enderezo remoto foi identificado como «{remoteAddress}» e está a eludir a protección da forza bruta.",
    "Your remote address was identified as \"{remoteAddress}\" and is not actively throttled at the moment." : "O seu enderezo remoto foi identificado como «{remoteAddress}» e non está a ser estrangulada activamente neste momento",
    "There was an error adding the IP to the whitelist." : "Produciuse un erro ao engadir o IP á lista de autorización.",
    "Delete entry for {subnet}" : "Eliminar a entrada para {subnet}",
    "Add new whitelist" : "Engadir unha lista de autorización nova"
},
"nplurals=2; plural=(n != 1);");
