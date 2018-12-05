OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Поставке заштите од масовних покушаја",
    "Whitelist IPs" : "Дозвољене IP адресе",
    "Brute Force Protection is meant to protect Nextcloud servers from attempts to\nguess user passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute force protection makes requests coming from an IP on a\nbruteforce protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of users on one IP address." : "Заштита од масовних покушаја служи да заштити Некстклауд сервер од покушаја да се погоди корисничка лозинка на разне начине. Од очигледног напада \"*ајде да испробамо све лозинке са огромног списка најчешћих лозинки*\", такође ће отежати и софистицираније нападе преко формулара за ресетовање лозинке или покушавајући да добави токене апликативних лозинки.\n\nАко се окине, заштита од масовних покушаја ће све захтеве са IP адресе учинити споријим на 24h.\n\nУз ову апликацију, администратор може да изузме IP адресу или опсег, што може бити добро приликом тестирања или када има грешака због тога што много корисника долазе са једне исте IP адресе.",
    "Brute-force IP whitelist" : "Листа дозвољених ИП адреса",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Испод одредите конкретне IP адресе које желите да искључите из заштите од масовних покушаја. Треба да знате да свака од ових, искључених адреса може да ради проверу идентитета без икаквих ограничења и успоравања. Препоручују се да, из безбедоносних разлога, овде буде што мањи број адреса или идеално - ниједна.",
    "Add new whitelist" : "Додај нови списак дозвољених",
    "Add" : "Додај",
    "Delete" : "Обриши"
},
"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);");
