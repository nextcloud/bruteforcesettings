OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "Поставке заштите од масовних покушаја",
    "Whitelist IPs" : "Бела листа ИП адреса",
    "Brute Force Protection is meant to protect Nextcloud servers from attempts to\nguess account passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute force protection makes requests coming from an IP on a\nbruteforce protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of accounts on one IP address." : "Заштита од масовних покушаја служи да заштити Некстклауд сервер од покушаја\nда се лозинка налога погоди на разне начине. Од очигледног напада\n„хајде да испробамо све лозинке са огромног списка најчешћих лозинки“, такође ће\nотежати и софистицираније нападе преко формулара за ресетовање лозинке или покушавајући\nда добави токене апликативних лозинки.\n\nАко је окинута, заштита од масовних покушаја ће све захтеве са IP адресе одложити на 24ч.\n\nОвом апликацијом администратор може да изузме IP адресу или опсег адреса, што може бити добро приликом тестирања\nили када има лажних узбуна због тога што много налога долази са једне исте IP адресе.",
    "Brute-force IP whitelist" : "Бела листа ИП адреса",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "Испод одредите ИП опсеге које желите да изузмете из заштите од масовних покушаја. Треба да знате да свака од ових, изузетих адреса може да обавља покушаје пријављивања без икаквог успоравања. Препоручује се да, из безбедоносних разлога, овде буде што мањи број адреса или идеално - ниједна.",
    "Add new whitelist" : "Додај нову белу листу",
    "Add" : "Додај",
    "Delete" : "Обриши"
},
"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);");
