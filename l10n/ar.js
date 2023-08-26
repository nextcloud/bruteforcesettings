OC.L10N.register(
    "bruteforcesettings",
    {
    "Brute-force settings" : "إعدادات كاشف هجمات القوة الكاسحة Brute-force",
    "Whitelist IPs" : "القائمة البيضاء لعناوين IP",
    "Brute Force Protection is meant to protect Nextcloud servers from attempts to\nguess account passwords in various ways. Besides the obvious \"*let's try a big\nlist of commonly used passwords*\" attack, it also makes it harder to use\nslightly more sophisticated attacks via the reset password form or trying to\nfind app password tokens.\n\nIf triggered, brute force protection makes requests coming from an IP on a\nbruteforce protected controller with the same API slower for a 24 hour period.\n\nWith this app, the admin can exempt an IP address or range from this\nprotection which can be useful for testing purposes or when there are false\npositives due to a lot of accounts on one IP address." : "تهدف الحماية من هجمات القوة الكاسحة إلى حماية خوادم نكست كلاود من محاولات تخمين كلمات مرور الحساب بطرق مختلفة. إلى جانب الهجوم الواضح \"* لنجرب قائمة كبيرة من كلمات المرور الشائعة الاستخدام *\" ، فإنه يجعل أيضًا من الصعب استخدام \"هجمات أكثر تعقيدًا قليلاً عبر نموذج إعادة تعيين كلمة المرور أو محاولة البحث عن الرموز المميزة لكلمات مرور التطبيق\". \n\nتجعل الحماية من القوة الغاشمة الطلبات الواردة من عنوان IP على وحدة تحكم محمية بقوة bruteforce مع نفس واجهة برمجة التطبيقات أبطأ لمدة 24 ساعة. \n\nمع هذا التطبيق، يمكن للمسؤول استثناء عنوان IP أو النطاق من هذه الحماية التي يمكن أن تكون مفيدة لأغراض الاختبار أو عندما تكون هناك مواضع خاطئة بسبب وجود الكثير من الحسابات على عنوان IP واحدٍ.",
    "Brute-force IP whitelist" : "القائمة البيضاء لعناوين IP للقوة الكاسحة Brute-force",
    "To whitelist IP ranges from the brute-force protection specify them below. Note that any whitelisted IP can perform authentication attempts without any throttling. For security reasons, it is recommended to whitelist as few hosts as possible or ideally even none at all." : "لإدراج نطاقات IP في القائمة البيضاء للحماية من هجمات القوة الكاسحة. حددها أدناه. لاحظ أن أي عنوان IP مدرج في القائمة البيضاء مسموحٌ له بمحاولة المصادقة دون أي تقييد. لأسباب أمنية، يُوصى بإدراج أقل عددٍ ممكنٍ من المضيفين في القائمة البيضاء، أو لا شيء على الإطلاق من الناحية المثالية.",
    "Add new whitelist" : "إضافة إلى القائمة البيضاء",
    "Add" : "إضافة",
    "Your remote address was identified as \"{remoteAddress}\" and is throttled at the moment by {delay}ms." : "تم تحديد عنوانك القَصِيّ على أنه \"{remoteAddress}\" و يتم التحكم فيه حاليًا بمقدار {delay} مللي ثانية.",
    "Your remote address was identified as \"{remoteAddress}\" and is bypassing bruteforce protection." : "تم تحديد عنوانك القَصِي على أنه \"{remoteAddress}\" و سيستثنى من إجراءات الحماية من القوة الكاسحة.",
    "Your remote address was identified as \"{remoteAddress}\" and is not actively throttled at the moment." : "تم تحديد عنوانك القَصِيّ على أنه \"{remoteAddress}\" و لا يتم التحكم فيه بشكل نشط في الوقت الحالي.",
    "Delete entry for {subnet}" : "حذف مدخل لـ {subnet}.",
    "Delete" : "حذف "
},
"nplurals=6; plural=n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;");
