OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Configuração de Força-Bruta",
    "Whitelist IPs" : "Whitelist de IPs",
    "Brute Force Protection is meant to protect Nextcloud servers from attempts to\nguess user passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute force protection makes requests coming from an IP on a\nbruteforce protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of users on one IP address." : "A proteção contra força bruta tem como objetivo proteger servidores Nextcloud de diferentes\nformas de tentar adivinhar senhas de usuários. Além do óbvio ataque \"*vamos tentar\numa grande lista de senhas comumente usadas*\", essa proteção também dificulta\nataques mais sofisticados que usam o formulário de redefinição de senha ou que tentam\nobter tokens de aplicativo.\n\nQuando acionada, a proteção contra força bruta torna mais lentas, por 24 horas, as solicitações\nvindas de um mesmo IP.\n\nCom este aplicativo, a administração pode isentar desta proteção um endereço ou um\nintervalo de endereços IP, o que pode ser útil para fins de teste ou quando há falsos\npositivos em situações onde muitos usuários utilizam um mesmo endereço IP.",
    "Brute-force IP whitelist" : "Lista branca de IP para força bruta",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Para colocar IPs na whitelist de proteção de força bruta, especifique-os abaixo. Atente que qualquer IP na lista de autorizações pode efetuar tentativas de autenticação sem qualquer limitação. Por motivos de segurança, recomenda-se colocar na lista de permissões o menor número possível de hosts ou, idealmente, nenhum deles.",
    "Add new whitelist" : "Adicionar uma nova whitelist",
    "Add" : "Adicionar",
    "Delete" : "Excluir"
},
"nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
