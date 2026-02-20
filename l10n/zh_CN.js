OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "暴力破解设置",
    "Whitelist IPs" : "IP 白名单",
    "Brute-force protection is meant to protect Nextcloud servers from attempts to\nguess account passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute-force protection makes requests coming from an IP on a\nbrute-force protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of accounts on one IP address." : "防暴力攻击功能用于防止 Nextcloud 服务器被尝试通过各种方式猜测账号密码。除了显而易见的“*尝试大量常用密码列表*”攻击外，它还使更复杂的攻击变得困难，例如通过重置密码字段或尝试发现应用程序密码令牌。\n\n启用防暴力保护后，来自暴力保护控制器的某个 IP 在 24 小时内发送的相同 API 请求将变慢。\n\n使用此应用程序，管理员可以解除某个 IP 或 IP 范围的保护，这在进行测试时或多个账号共享同一 IP 地址而被误判时会更加方便。",
    "Your remote address was identified as \"{remoteAddress}\" and is throttled at the moment by {delay}ms." : "您的远程地址被标识为 \"{remoteAddress}\" ，目前被限制 {delay}毫秒.",
    "Your remote address was identified as \"{remoteAddress}\" and is bypassing brute-force protection." : "您的远程地址被识别为 \"{remoteAddress}\" ，并且正在绕过暴力破解保护。",
    "Your remote address was identified as \"{remoteAddress}\" and is not actively throttled at the moment." : "您的远程地址被识别为 \"{remoteAddress}\" ，目前并未受到主动限制。",
    "IP address" : "IP 地址",
    "Mask" : "掩码",
    "Comment" : "备注",
    "Add" : "添加",
    "Save" : "保存",
    "Delete entry for {subnet}" : "删除 {subnet} 的条目"
},
"nplurals=1; plural=0;");
