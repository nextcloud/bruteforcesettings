OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Definições de \"brute-force\"",
    "Whitelist IPs" : "Lista branca de IPs",
    "Brute Force Protection is meant to protect Nextcloud servers from attempts to\nguess user passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute force protection makes requests coming from an IP on a\nbruteforce protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of users on one IP address." : "A proteção de força bruta tem o objetivo de proteger os servidores Nextcloud de tentativas de\nadivinhar as senhas dos utilizadores de várias formas. Além do óbvio \"* vamos tentar uma grande\nlista de senhas mais usadas * \", também dificulta o uso de\nataques um pouco mais sofisticados através do formulário de redefinição de senha ou tentando\nencontrar tokens de senhas da aplicação.\n\nSe acionada, a proteção de força bruta faz pedidos provenientes de um IP num\ncontrolador de força bruta protegido, com a mesma API mais lenta por um período de 24 horas.\n\nCom esta app, o administrador pode isentar um endereço IP ou intervalo desta\nproteção, que poderá ser útil para fins de teste ou quando houver falsos\npositivos devido a muitos utilizadores num endereço IP.",
    "Brute-force IP whitelist" : "Lista branca de IPs \"brute-force\"",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Para incluir na lista branca os intervalos de IP da proteção de \"brute-force\", especifique-os abaixo. Note que qualquer IP da lista branca pode executar tentativas de autenticação sem qualquer limitação. Por motivos de segurança, é recomendado colocar na lista branca o menor número possível de hosts ou, idealmente, até mesmo nenhum.",
    "Add new whitelist" : "Adicionar nova lista de permissões",
    "Add" : "Adicionar",
    "Delete" : "Apagar"
},
"nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
