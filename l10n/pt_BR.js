OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Configuração de Força-Bruta",
    "Whitelist IPs" : "Coloque IPs na lista de isentos",
    "Brute-force protection is meant to protect Nextcloud servers from attempts to\nguess account passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute-force protection makes requests coming from an IP on a\nbrute-force protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of accounts on one IP address." : "A proteção de força bruta destina-se a proteger os servidores Nextcloud contra\ntentativas de adivinhar senhas de contas de várias maneiras. Além do óbvio ataque do\ntipo “*vamos tentar uma grande lista de senhas comumente usadas*”, ela também\ndificulta o uso de ataques um pouco mais sofisticados por meio do formulário de\nredefinição de senha ou da tentativa de encontrar tokens de senha de aplicativos.\n\nSe acionada, a proteção de força bruta torna as solicitações provenientes de um IP\nem um controlador protegido por força bruta com a mesma API mais lentas por um\nperíodo de 24 horas.\n\nCom este aplicativo, o administrador pode isentar um endereço IP ou intervalo de\nendereços IP desta proteção, o que pode ser útil para fins de teste ou quando\nhouver falsos positivos devido a muitas contas em um endereço IP.",
    "Your remote address was identified as \"{remoteAddress}\" and is throttled at the moment by {delay}ms." : "Seu endereço remoto foi identificado como \"{remoteAddress}\" e está limitado a {delay}ms no momento.",
    "Your remote address was identified as \"{remoteAddress}\" and is bypassing brute-force protection." : "Seu endereço remoto foi identificado como \"{remoteAddress}\" e está ignorando a proteção de força bruta.",
    "Your remote address was identified as \"{remoteAddress}\" and is not actively throttled at the moment." : "Seu endereço remoto foi identificado como \"{remoteAddress}\" e não está ativamente limitado no momento.",
    "There was an error adding the IP to the whitelist." : "Ocorreu um erro ao adicionar o IP à lista de isentos.",
    "Brute-force IP whitelist" : "Lista de IPs isentos da proteção contra força bruta",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Para colocar IPs na lista de isentos de proteção contra força bruta, especifique-os abaixo. Note que qualquer IP isento pode efetuar tentativas de autenticação sem nenhuma limitação. Por motivos de segurança, é recomendável colocar o menor número possível de endereços na lista de isenção ou mesmo, idealmente, não colocar nenhum.",
    "Apply whitelist to rate limit" : "Aplicar lista de isentos ao limite de taxa",
    "Add a new whitelist" : "Adicionar uma nova lista de isentos",
    "IP address" : "Endereço IP",
    "Mask" : "Máscara",
    "Add" : "Adicionar",
    "Delete entry for {subnet}" : "Excluir entrada para {subnet}"
},
"nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
