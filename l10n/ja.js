OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "ブルートフォース設定",
    "Whitelist IPs" : "ホワイトリストのIP",
    "Brute Force Protection is meant to protect Nextcloud servers from attempts to\nguess user passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute force protection makes requests coming from an IP on a\nbruteforce protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of users on one IP address." : "ブルートフォース保護は、Nextcloud サーバーを不正アクセスから保護するためのものです。 攻撃者はユーザーのパスワードをさまざまな方法で推測します。一般的に使用されるパスワードのリストを使用した攻撃は、パスワードのリセットを介した少し洗練された攻撃や、アプリパスワードを見つけるもので、サーバーを使用することを困難にします。トリガーされると、ブルートフォース保護により、同じAPIを備えたブルートフォース保護されたコントローラーのIPからの要求が24時間遅くなります。 テストの目的や、1つのIPアドレスで多数のユーザーが誤検出された場合に役立ちます。",
    "Brute-force IP whitelist" : "ブルートフォースIPホワイトリスト",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "ブルートフォース保護からホワイトリストにIP範囲を登録するには、以下を指定します。\nホワイトリストに登録されたIPは、認証試行を無制限に実行できることに注意してください。 セキュリティ上の理由から、できるだけ少ないホストをホワイトリストに登録するか、理想的にはまったく登録しないことをお勧めします。",
    "Add new whitelist" : "新しいホワイトリストを追加する",
    "Add" : "追加",
    "Delete" : "削除"
},
"nplurals=1; plural=0;");
