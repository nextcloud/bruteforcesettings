OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Kaba kuvvet ayarları",
    "Whitelist IPs" : "Beyaz listedeki IP adresleri",
    "Brute-force protection is meant to protect Nextcloud servers from attempts to\nguess account passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute-force protection makes requests coming from an IP on a\nbrute-force protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of accounts on one IP address." : "Kaba kuvvet koruması Nextcloud sunucularını çeşitli hesap parolası bulma yöntemlerine \nkarşı korur. Bilinen **büyük sık kullanılan parola listesini denemek** saldırısının yanında\nparola sıfırlama formunu ya da uygulama parola kodlarını kullanan daha karmaşık \nsaldırı yöntemlerine karşı da koruma sağlar.\n\nKaba kuvvet koruması belirli bir IP adresinden yapılan bir saldırıyı algıladığında\nistekler 24 saat süreyle kaba kuvvet koruması tarafından korunan ve aynı API \nuygulamasını kullanan daha yavaş bir denetçiye yönlendirilir\n\nBu uygulama ile, yöneticiler bir IP adresinin bu koruma tarafından engellenmemesini\nsağlayabilir. Böylece denemeler sırasında ya da aynı adresten gelen çok sayıda \nhesap nedeniyle hatalı algılama durumunda engelleme yapılmaması sağlanır.",
    "Brute-force IP whitelist" : "Kaba kuvvet IP beyaz listesi",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Beyaz listeye eklenerek kaba kuvvet korumasına katılmayacak IP aralıklarını aşağıda belirtebilirsiniz. Beyaz listeye alınan IP adreslerinin sınırsız sayıda kimlik doğrulama isteğinde bulunabileceğini unutmayın. Güvenlik nedeniyle olabildiğince ideal olarak hiç ya da olabildiğince az sayıda adres belirtmeniz önerilir.",
    "Add a new whitelist" : "Yeni bir beyaz liste ekle",
    "IP address" : "IP adresi",
    "Mask" : "Maske",
    "Add" : "Ekle",
    "Your remote address was identified as \"{remoteAddress}\" and is throttled at the moment by {delay}ms." : "Uzak adresiniz \"{remoteAddress}\" olarak belirlenmiş ve şu anda {delay}ms süreyle kısıtlanıyor.",
    "Your remote address was identified as \"{remoteAddress}\" and is bypassing brute-force protection." : "Uzak adresiniz \"{remoteAddress}\" olarak belirlenmiş ve kaba kuvvet saldırısı korumasını atlıyor.",
    "Your remote address was identified as \"{remoteAddress}\" and is not actively throttled at the moment." : "Uzak adresiniz \"{remoteAddress}\" olarak belirlenmiş ve şu anda etkin olarak kısıtlanmıyor.",
    "There was an error adding the IP to the whitelist." : "IP adresi beyaz listeye eklenirken bir sorun çıktı.",
    "Delete entry for {subnet}" : "{subnet} kaydını sil",
    "Add new whitelist" : "Yeni beyaz liste ekle"
},
"nplurals=2; plural=(n > 1);");
