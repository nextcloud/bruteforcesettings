OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "防暴力攻擊設定",
    "Whitelist IPs" : "白名單 IP",
    "Brute Force Protection is meant to protect Nextcloud servers from attempts to\nguess account passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute force protection makes requests coming from an IP on a\nbruteforce protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of accounts on one IP address." : "暴力保護是用來防止 Nextcloud 伺服器被嘗試\n用各種方式猜測帳號密碼。除了明顯的「*嘗試大量\n常用的密碼清單*」攻擊，它也讓較為複雜的攻擊像是藉由重設填密碼欄位或是試著\n找到應用程式密碼權杖較為困難。\n\n若啟動暴力保護，將會在24小時的時間內從暴力保護控制器的 IP 發出一個同樣的 API 需求變慢。\n\n使用此應用程式，管理員可以用來解除一個 IP 或是範圍的保護，因為這對於用來測試或是當有很多帳號在同一個 IP 位址而誤判的時候可能比較有用。",
    "Brute-force IP whitelist" : "暴力攻擊 IP 白名單",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "在下面設定白名單 IP。請注意，在白名單中的 IP 可以不被限制進行驗證。基於安全性原因，建議僅設定少數來源 IP。",
    "Add new whitelist" : "新增新的白名單",
    "Add" : "新增",
    "Delete" : "刪除"
},
"nplurals=1; plural=0;");
