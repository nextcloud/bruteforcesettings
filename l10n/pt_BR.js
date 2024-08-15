OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Configuração de Força-Bruta",
    "Whitelist IPs" : "Whitelist de IPs",
    "Brute-force protection is meant to protect Nextcloud servers from attempts to\nguess account passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute-force protection makes requests coming from an IP on a\nbrute-force protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of accounts on one IP address." : "A proteção de força bruta destina-se a proteger os servidores Nextcloud\n contra tentativas de adivinhar senhas de contas de várias maneiras. Além\n do óbvio \"*vamos tentar um grande lista de senhas comumente usadas*\", \ntambém dificulta seu uso ataques um pouco mais sofisticados através do \nformulário de redefinição de senha ou tentando encontre tokens de senha\n de aplicativo. Se acionada, a proteção de força bruta faz solicitações \nprovenientes de um IP em um controlador protegido por força bruta com a \nmesma API mais lento por um período de 24 horas. Com este aplicativo, o \nadministrador pode isentar um endereço IP ou intervalo deste proteção que \npode ser útil para fins de teste ou quando há falsos positivos devido a\n muitas contas em um endereço IP.",
    "Brute-force IP whitelist" : "Lista de IPs isentos da proteção contra força bruta",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Para colocar IPs na lista de isentos de proteção contra força bruta, especifique-os abaixo. Note que qualquer IP isento pode efetuar tentativas de autenticação sem nenhuma limitação. Por motivos de segurança, é recomendável colocar o menor número possível de endereços na lista de isenção ou mesmo, idealmente, não colocar nenhum.",
    "Add a new whitelist" : "Adicionar uma nova lista de permissões",
    "IP address" : "endereço IP",
    "Mask" : "Mascara",
    "Add" : "Adicionar",
    "Your remote address was identified as \"{remoteAddress}\" and is throttled at the moment by {delay}ms." : "Seu endereço remoto foi identificado como \"{remoteAddress}\" e está limitado no momento por {delay}ms.",
    "Your remote address was identified as \"{remoteAddress}\" and is bypassing brute-force protection." : "Seu endereço remoto foi identificado como \"{remoteAddress}\" e está ignorando a proteção de força bruta.",
    "Your remote address was identified as \"{remoteAddress}\" and is not actively throttled at the moment." : "Seu endereço remoto foi identificado como \"{remoteAddress}\" e não está ativamente limitado no momento.",
    "There was an error adding the IP to the whitelist." : "Ocorreu um erro ao adicionar o IP à lista de permissões.",
    "Delete entry for {subnet}" : "Excluir entrada para {subnet}",
    "Add new whitelist" : "Adicionar uma nova whitelist"
},
"nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
