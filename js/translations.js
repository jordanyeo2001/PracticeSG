// PracticeSG Multi-language Dictionary (Updated with Official Singapore User Flows & Sanitized Bank Names)
const TRANSLATIONS = {
  en: {
    appName: "PracticeSG",
    tagline: "Safe Digital Literacy for Seniors",
    homeQuestion: "What would you like to practise today?",
    homeSubtitle: "Choose a task below. No real money or personal information is ever used.",
    
    // Controls & Header
    fontNormal: "Text: Normal",
    fontLarge: "Text: Large",
    fontExtra: "Text: Extra Large",
    highContrast: "High Contrast",
    voiceAssist: "🔊 Read Aloud",
    stopVoice: "⏹ Stop Reading",
    myProgress: "📊 My Progress",
    homeNav: "🏠 Home",
    
    // Common Actions
    back: "⬅️ Back",
    next: "Next Step ➡️",
    confirm: "✅ Confirm",
    tryAgain: "🔄 Try Again",
    finish: "🎉 Done!",
    completedTag: "Completed ⭐",
    readyTag: "Ready ▶️",
    
    // Confidence Modal
    preConfTitle: "Before We Start",
    preConfQuestion: "How confident do you feel about doing this task right now?",
    postConfTitle: "Practice Completed! 🎉",
    postConfQuestion: "How confident do you feel after this practice?",
    confLow: "Not Confident 😟",
    confMid: "A Little Confident 😐",
    confHigh: "Very Confident! 😊",
    continueToPractice: "Start Practice ▶️",
    saveProgress: "Save & Finish 🎉",

    // Modules
    modules: {
      paynow: {
        title: "PayNow / Digital Payment",
        desc: "Practise sending money safely to a phone number, UEN, or QR code.",
        step1Title: "Step 1: Select PayNow Proxy Type",
        step1Instruction: "Choose how you want to send money. Most shops use UEN or PayNow QR.",
        typeMobile: "📱 Mobile Phone Number",
        typeUEN: "🏢 Company UEN (Shop / Hawker)",
        typeQR: "📷 Scan PayNow QR Code",
        
        step2Title: "Step 2: Enter or Select Payee Details",
        step2Instruction: "Select the person or shop you want to pay.",
        recipientLabel: "Select Payee Proxy:",
        opt1: "Ah Huat Kopitiam (LionCity Bank • UEN 201912345K)",
        opt2: "Aunty Mary (SG Star Bank • Mobile +65 9123 4567)",
        opt3: "Uncle Tan (Merlion Bank • Mobile +65 9876 5432)",
        
        step3Title: "Step 3: Payee Verification & Amount",
        step3Instruction: "Verify the registered PayNow name and enter the payment amount in SGD.",
        amountPrompt: "Enter Amount ($ SGD):",
        amountNote: "Example: $5.50 for Kopi and Toast",
        refLabel: "Payment Reference / Purpose:",
        
        step4Title: "Step 4: Review Transfer Details",
        step4Instruction: "ALWAYS verify payee name and amount before confirming your transfer!",
        safetyTip: "💡 Official Safety Habit: Ensure the displayed PayNow registered name matches the stall or seller before sending.",
        checkRecipient: "Payee Name:",
        checkAmount: "Amount to Send:",
        feeLabel: "Transfer Fee:",
        feeValue: "$0.00 SGD (Free)",
        
        step5Title: "Step 5: Digital Token Authorisation",
        step5Instruction: "Enter your 6-digit Security PIN to authorise the transaction.",
        pinPrompt: "Enter 6-digit Security PIN:",
        
        step6Title: "PayNow Transfer Successful!",
        step6Instruction: "You have completed the official PayNow transfer flow!",
        receiptNotice: "🔒 Safe Demo: No real money was charged."
      },

      singpass: {
        title: "GovPass / Government Services",
        desc: "Practise logging in safely and claiming government vouchers or benefits.",
        step1Title: "Step 1: GovPass Authentication",
        step1Instruction: "Practise authenticating using GovPass QR code or SMS OTP.",
        methodQR: "📷 Scan GovPass QR Code on Phone",
        methodOTP: "💬 Login with NRIC & SMS OTP",
        
        step2Title: "Step 2: Choose Government Service",
        step2Instruction: "Select the government voucher or benefit you wish to claim.",
        service1: "🧧 Claim CDC Vouchers 2026",
        service2: "👴 Check Pioneer / Merdeka Health Subsidy",
        service3: "🚌 Senior Transport Concession Top-up",
        
        step3Title: "Step 3: Authorise Myinfo Data Retrieval",
        step3Instruction: "Review the personal data requested by the e-Service from Myinfo.",
        nameLabel: "Name:",
        nricLabel: "Masked NRIC:",
        statusLabel: "Eligibility:",
        statusEligible: "Eligible for $300 Vouchers ✅",
        
        step4Title: "Step 4: Application Declaration",
        step4Instruction: "Review your application summary and confirm the declaration.",
        declarationText: "I declare that I am applying for myself and all information is correct.",
        
        step5Title: "Claim Completed Successfully!",
        step5Instruction: "Your CDC e-Vouchers are ready. You can present them at hawker stalls.",
        govNotice: "🔒 Official Safety Rule: Government services will NEVER ask for your password via SMS links!"
      },

      clinic: {
        title: "Polyclinic Appointment Booking",
        desc: "Practise picking a clinic, doctor slot, and appointment time.",
        step1Title: "Step 1: Select Patient & Polyclinic",
        step1Instruction: "Select the polyclinic nearest to your home.",
        clinic1: "🏥 Bedok Polyclinic",
        clinic2: "🏥 Jurong Polyclinic",
        clinic3: "🏥 Toa Payoh Polyclinic",
        clinic4: "🏥 Tampines Polyclinic",
        
        step2Title: "Step 2: Select Medical Service",
        step2Instruction: "Choose the clinic service you require.",
        type1: "👨‍⚕️ General Medical Consult (Doctor)",
        type2: "🩸 Routine Blood Test / Lab Check",
        type3: "👁️ Senior Eye & Diabetes Screening",
        
        step3Title: "Step 3: Select Date & Available Time Slot",
        step3Instruction: "Choose a morning or afternoon appointment slot.",
        time1: "📅 Tomorrow - 09:30 AM (Morning)",
        time2: "📅 Tomorrow - 02:15 PM (Afternoon)",
        time3: "📅 Next Monday - 10:00 AM (Morning)",
        
        step4Title: "Step 4: Pre-Appointment Instructions & Review",
        step4Instruction: "Review booking details and fasting/preparation notes.",
        prepNote: "💡 Note: Please bring your NRIC. If doing a blood test, fast for 8 hours prior.",
        smsReminderCheck: "🔔 Send me SMS reminder 1 day before appointment",
        
        step5Title: "Appointment Confirmed!",
        step5Instruction: "Your digital appointment slip is ready. Use the QR code at the self-service kiosk on arrival day."
      },

      qrscanner: {
        title: "Scanning QR Codes Safely",
        desc: "Learn how phone cameras scan QR codes and spot suspicious links.",
        step1Title: "Step 1: How QR Scanning Works",
        step1Instruction: "Hold your phone camera steadily facing the square QR poster.",
        step2Title: "Step 2: Select a Practice Poster",
        step2Instruction: "Tap a QR poster below to test scanning it.",
        posterSafePay: "☕ Coffee Shop Payment QR",
        posterSafeGov: "🏛️ Community Center Event QR",
        posterScam: "⚠️ Suspicious Sticker (Scam QR)",
        
        step3Title: "Step 3: Domain & URL Verification",
        step3Instruction: "ALWAYS check the website address BEFORE tapping to open!",
        urlHeading: "Scanned Web Address:",
        verdictSafe: "✅ SAFE LINK: Address ends with official .gov.sg or trusted bank domain.",
        verdictScam: "🚨 DANGEROUS LINK: Suspicious address trying to steal your information!",
        actionOpen: "Open Safe Link 🌐",
        actionBlock: "Block & Report Fake Link 🛑"
      },

      shopping: {
        title: "Online Grocery Shopping",
        desc: "Practise adding daily groceries to a cart and checking out.",
        step1Title: "Step 1: Pick Everyday Groceries",
        step1Instruction: "Tap items below to add them to your shopping basket.",
        item1: "🥛 Fresh Milk 1L ($3.20)",
        item2: "🍚 Royal Umbrella Rice 5kg ($14.50)",
        item3: "🥚 Fresh Eggs 10s ($3.50)",
        item4: "☕ Milo Powder 900g ($8.90)",
        cartTotal: "Basket Total:",
        
        step2Title: "Step 2: Delivery Slot & Address",
        step2Instruction: "Select your delivery address and preferred time slot.",
        addressOpt: "🏠 Home: Blk 123 Bedok North Ave 3 #05-67",
        
        step3Title: "Step 3: Checkout with PayNow",
        step3Instruction: "Review order total and select PayNow digital payment.",
        step4Title: "Order Confirmed!",
        step4Instruction: "Your groceries are scheduled for delivery tomorrow morning!"
      },

      scamquiz: {
        title: "Identifying Scam Messages",
        desc: "Practise identifying fake SMS, WhatsApp messages, and scam phone calls.",
        step1Title: "Scam Awareness Quiz (ScamShield Guidance)",
        step1Instruction: "Read the real-world scenario below and choose the SAFEST action.",
        
        scenario1: {
          sender: "SMS from: +65 9182 3746",
          message: "🚨 LionCity Bank Alert: Your bank account is locked due to suspicious activity. Click http://lioncity-security-verify.com immediately to unlock!",
          question: "What should you do?",
          opt1: "Click the link immediately to fix account ❌",
          opt2: "Do NOT click link. Call bank official hotline on back of your card ✅",
          explanation: "Banks in Singapore will NEVER send clickable links in SMS messages! Always call the official hotline directly."
        },

        scenario2: {
          sender: "WhatsApp from Unknown Number",
          message: "Hi Mum! I dropped my phone in water and lost my SIM. This is my new number. Can you PayNow $400 to my friend urgently for repair?",
          question: "What should you do?",
          opt1: "PayNow $400 right away to help your child ❌",
          opt2: "Call your child's ORIGINAL phone number or voice call to verify first ✅",
          explanation: "Scammers pretend to be family members in distress. ALWAYS phone call your loved one's usual number first!"
        },

        scenario3: {
          sender: "SMS from: GovSG-Claim",
          message: "Your $300 CDC Vouchers are ready. Please reply with your 6-digit GovPass SMS OTP to claim.",
          question: "What should you do?",
          opt1: "Reply with OTP code ❌",
          opt2: "Never share OTP. Delete message ✅",
          explanation: "NEVER share your OTP (One-Time Password) with anyone! Government agencies will never ask for your OTP via message."
        }
      }
    },

    progress: {
      title: "My Practice Achievements 🏆",
      subtitle: "Track your progress and celebrate your digital independence!",
      tasksCompleted: "Tasks Completed",
      starsEarned: "Stars Earned",
      confidenceLevel: "Overall Confidence",
      repeatBtn: "Practise Again 🔄"
    }
  },

  zh: {
    appName: "PracticeSG 乐龄数码通",
    tagline: "新加坡乐龄人士数码任务安全练习平台",
    homeQuestion: "今天您想练习什么数码功能？",
    homeSubtitle: "请选择下方项目。练习过程完全安全，不使用真实的资金或个人资料。",
    
    fontNormal: "文字：标准",
    fontLarge: "文字：大号",
    fontExtra: "文字：特大",
    highContrast: "高对比度",
    voiceAssist: "🔊 语音朗读",
    stopVoice: "⏹ 停止朗读",
    myProgress: "📊 我的练习进度",
    homeNav: "🏠 首页",
    
    back: "⬅️ 返回",
    next: "下一步 ➡️",
    confirm: "✅ 确认",
    tryAgain: "🔄 再试一次",
    finish: "🎉 完成！",
    completedTag: "已完成 ⭐",
    readyTag: "准备练习 ▶️",
    
    preConfTitle: "开始练习前",
    preConfQuestion: "您现在对完成这项任务有多大信心？",
    postConfTitle: "练习成功完成！ 🎉",
    postConfQuestion: "练习后，您现在的信心如何？",
    confLow: "没信心 😟",
    confMid: "有一点信心 😐",
    confHigh: "非常有信心！ 😊",
    continueToPractice: "开始练习 ▶️",
    saveProgress: "保存并完成 🎉",

    modules: {
      paynow: {
        title: "PayNow 电子付款练习",
        desc: "练习如何通过手机号码、UEN或二维码安全转账。",
        step1Title: "第一步：选择 PayNow 代理类型",
        step1Instruction: "请选择您要如何付款。大多数商店使用 UEN 或 PayNow 二维码。",
        typeMobile: "📱 手机号码转账",
        typeUEN: "🏢 商家 UEN 转账 (档口/商店)",
        typeQR: "📷 扫描 PayNow 二维码",
        
        step2Title: "第二步：选择或输入收款人",
        step2Instruction: "选择您要付款的店铺或朋友。",
        recipientLabel: "选择收款人：",
        opt1: "亚发咖啡店 (狮城银行 LionCity • UEN 201912345K)",
        opt2: "玛莉阿姨 (星光银行 SG Star • 手机 +65 9123 4567)",
        opt3: "陈叔叔 (鱼尾狮银行 Merlion • 手机 +65 9876 5432)",
        
        step3Title: "第三步：核对收款人姓名与输入金额",
        step3Instruction: "核对系统登记的收款人名字，并输入新币金额。",
        amountPrompt: "输入金额 ($ 新币):",
        amountNote: "例如：$5.50 (咖啡与面包)",
        refLabel: "转账备注 / 用途：",
        
        step4Title: "第四步：安全核对",
        step4Instruction: "在输入密码前，务必核对屏幕上的收款人姓名与转账金额！",
        safetyTip: "💡 官方安全习惯：核对转账名字是否与档口展示的名字完全一致。",
        checkRecipient: "收款人姓名：",
        checkAmount: "转账金额：",
        feeLabel: "转账手续费：",
        feeValue: "$0.00 新币 (免费)",
        
        step5Title: "第五步：数字令牌验证",
        step5Instruction: "请输入您的 6 位数安全密码以授权转账。",
        pinPrompt: "输入 6 位数安全密码：",
        
        step6Title: "付款成功！",
        step6Instruction: "您已成功完成 PayNow 官方转账流程！",
        receiptNotice: "🔒 安全示范：未扣除任何真实资金。"
      },

      singpass: {
        title: "GovPass 政府服务练习",
        desc: "练习如何安全登录并领取政府社区领券或津贴。",
        step1Title: "第一步：GovPass 登录认证",
        step1Instruction: "练习使用 GovPass 扫码或手机验证码登录。",
        methodQR: "📷 用手机扫 GovPass 二维码登录",
        methodOTP: "💬 输入身份证与短信验证码",
        
        step2Title: "第二步：选择政府服务",
        step2Instruction: "选择您想要领取的政府礼券或健康津贴。",
        service1: "🧧 领取 2026 年 CDC 社区领券",
        service2: "👴 查询建国/立国一代医疗津贴",
        service3: "🚌 乐龄交通优惠卡充值",
        
        step3Title: "第三步：授权 Myinfo 资料调取",
        step3Instruction: "检查电子服务申请调取的 Myinfo 个人资料。",
        nameLabel: "姓名：",
        nricLabel: "身份证号：",
        statusLabel: "资格：",
        statusEligible: "符合资格，可领取 $300 领券 ✅",
        
        step4Title: "第四步：确认提交",
        step4Instruction: "检查申请摘要并确认声明。",
        declarationText: "我确认这是我本人申请，且资料真实无误。",
        
        step5Title: "领取成功！",
        step5Instruction: "您的 CDC 社区领券已就绪，可在小贩中心展示使用。",
        govNotice: "🔒 官方安全提示：政府机构绝不会通过短信链接询问您的密码！"
      },

      clinic: {
        title: "预约综合诊所（Polyclinic）",
        desc: "练习选择诊所、看诊项目与预约时间。",
        step1Title: "第一步：选择综合诊所",
        step1Instruction: "选择离您家最近的综合诊所。",
        clinic1: "🏥 勿洛综合诊所 (Bedok)",
        clinic2: "🏥 裕廊综合诊所 (Jurong)",
        clinic3: "🏥 大巴窑综合诊所 (Toa Payoh)",
        clinic4: "🏥 淡滨尼综合诊所 (Tampines)",
        
        step2Title: "第二步：选择看诊项目",
        step2Instruction: "选择您今天需要的医疗服务。",
        type1: "👨‍⚕️ 普通门诊 (医生看诊)",
        type2: "🩸 例行验血 / 检查",
        type3: "👁️ 乐龄眼部与血糖筛查",
        
        step3Title: "第三步：选择日期与时间",
        step3Instruction: "选择上午或下午的合适时段。",
        time1: "📅 明天 - 上午 09:30",
        time2: "📅 明天 - 下午 02:15",
        time3: "📅 下周一 - 上午 10:00",
        
        step4Title: "第四步：看诊前须知与核对",
        step4Instruction: "核对预约信息及看诊前准备事项。",
        prepNote: "💡 提示：请携带身份证。若做验血检查，请在看诊前禁食8小时。",
        smsReminderCheck: "🔔 预约前1天发送短信提醒我",
        
        step5Title: "预约已确认！",
        step5Instruction: "您的电子预约单已就绪。看诊当天可在自助机器扫描二维码报到。"
      },

      qrscanner: {
        title: "安全扫描二维码",
        desc: "学习手机镜头如何扫码，并识别可疑的网络链接。",
        step1Title: "第一步：了解二维码扫描",
        step1Instruction: "将手机镜头对准框内的正方形二维码。",
        step2Title: "第二步：选择练习海报",
        step2Instruction: "点击下方二维码海报进行扫描测试。",
        posterSafePay: "☕ 咖啡店付款二维码",
        posterSafeGov: "🏛️ 民众俱乐部活动二维码",
        posterScam: "⚠️ 可疑贴纸 (诈骗二维码)",
        
        step3Title: "第三步：检查网址安全性",
        step3Instruction: "点击打开前，务必先检查网址名称！",
        urlHeading: "扫描出的网站地址：",
        verdictSafe: "✅ 安全网址：域名结尾为官方 .gov.sg 或信任银行。",
        verdictScam: "🚨 危险网址：试图盗取您个人资料的假网站！",
        actionOpen: "打开安全网站 🌐",
        actionBlock: "阻止并举报假网址 🛑"
      },

      shopping: {
        title: "网上买菜与购物",
        desc: "练习将日常用品加入购物车并使用 PayNow 结账。",
        step1Title: "第一步：挑选日常食材",
        step1Instruction: "点击下方商品加入您的购物篮。",
        item1: "🥛 鲜牛奶 1L ($3.20)",
        item2: "🍚 顶好香米 5kg ($14.50)",
        item3: "🥚 新鲜鸡蛋 10个 ($3.50)",
        item4: "☕ 美禄粉 900g ($8.90)",
        cartTotal: "购物篮总计：",
        
        step2Title: "第二步：送货时段与地址",
        step2Instruction: "确认您在新加坡的送货地址与送货时间。",
        addressOpt: "🏠 地址: 勿洛北3道第123座 #05-67",
        
        step3Title: "第三步：PayNow 结账",
        step3Instruction: "核对订单总额并选择电子付款。",
        step4Title: "订单已确认！",
        step4Instruction: "您的日常食材将于明天上午送达您家！"
      },

      scamquiz: {
        title: "防范防骗防诈短信",
        desc: "练习识别虚假短信、WhatsApp诈骗与可疑电话。",
        step1Title: "防诈安全测验",
        step1Instruction: "阅读下方真实案例，选择最安全的应对方法。",
        
        scenario1: {
          sender: "来自号码: +65 9182 3746 的短信",
          message: "🚨 狮城银行警告：您的账户已被冻结。请立即点击 http://lioncity-security-verify.com 解锁！",
          question: "您应该怎么做？",
          opt1: "立即点击链接解决账户问题 ❌",
          opt2: "绝不点击链接。拨打银行卡背面的官方热线确认 ✅",
          explanation: "新加坡所有银行绝不会在短信中附带网页链接！请务必直接拨打官方电话。"
        },

        scenario2: {
          sender: "来自陌生号码的 WhatsApp 消息",
          message: "妈妈！我手机掉水里换了号码，这是我新号码。能急转 $400 给我朋友帮我修手机吗？",
          question: "您应该怎么做？",
          opt1: "马上 PayNow 转账 $400 帮忙 ❌",
          opt2: "先拨打孩子原本的常用电话或打视频核实 ✅",
          explanation: "骗子经常假冒亲人求助。转账前务必打原本的电话确认！"
        },

        scenario3: {
          sender: "来自 GovSG-Claim 的短信",
          message: "您的 $300 CDC 社区领券已就绪。回复此短信告知您的 6 位数 GovPass 短信验证码 (OTP) 即可领取。",
          question: "您应该怎么做？",
          opt1: "回复验证码 ❌",
          opt2: "绝不透露验证码，直接删除短信 ✅",
          explanation: "绝不能向任何人透露您的 OTP 验证码！政府机构绝不会要求您回复验证码。"
        }
      }
    },

    progress: {
      title: "我的练习成果 🏆",
      subtitle: "查看您的数码练习记录，为您独立的进步喝彩！",
      tasksCompleted: "已完成练习数",
      starsEarned: "获得星星",
      confidenceLevel: "整体信心度",
      repeatBtn: "再次练习 🔄"
    }
  },

  ms: {
    appName: "PracticeSG",
    tagline: "Pembelajaran Digital Selamat untuk Warga Emas",
    homeQuestion: "Apakah yang anda ingin praktis hari ini?",
    homeSubtitle: "Pilih tugasan di bawah. Tiada wang sebenar atau maklumat peribadi digunakan.",
    
    fontNormal: "Teks: Normal",
    fontLarge: "Teks: Besar",
    fontExtra: "Teks: Sangat Besar",
    highContrast: "Kontras Tinggi",
    voiceAssist: "🔊 Baca Nyaring",
    stopVoice: "⏹ Henti Membaca",
    myProgress: "📊 Kemajuan Saya",
    homeNav: "🏠 Utama",
    
    back: "⬅️ Kembali",
    next: "Langkah Seterusnya ➡️",
    confirm: "✅ Sahkan",
    tryAgain: "🔄 Cuba Lagi",
    finish: "🎉 Selesai!",
    completedTag: "Selesai ⭐",
    readyTag: "Sedia ▶️",
    
    preConfTitle: "Sebelum Kita Mula",
    preConfQuestion: "Sejauh manakah anda yakin untuk melakukan tugas ini sekarang?",
    postConfTitle: "Latihan Selesai! 🎉",
    postConfQuestion: "Sejauh manakah anda yakin selepas latihan ini?",
    confLow: "Kurang Yakin 😟",
    confMid: "Agak Yakin 😐",
    confHigh: "Sangat Yakin! 😊",
    continueToPractice: "Mula Praktis ▶️",
    saveProgress: "Simpan & Selesai 🎉",

    modules: {
      paynow: {
        title: "Latihan Bayaran PayNow",
        desc: "Praktis menghantar wang dengan selamat ke nombor telefon, UEN, atau kod QR.",
        step1Title: "Langkah 1: Pilih Jenis Proksi PayNow",
        step1Instruction: "Pilih cara pembayaran. Kebanyakan kedai mengguna UEN atau Kod QR.",
        typeMobile: "📱 Nombor Telefon Bimbit",
        typeUEN: "🏢 UEN Syarikat/Kedai",
        typeQR: "📷 Imbas Kod QR PayNow",
        
        step2Title: "Langkah 2: Pilih Penerima",
        step2Instruction: "Pilih penerima yang ingin dibayar.",
        recipientLabel: "Pilih Penerima:",
        opt1: "Ah Huat Kopitiam (LionCity Bank • UEN 201912345K)",
        opt2: "Aunty Mary (SG Star Bank • Bimbit +65 9123 4567)",
        opt3: "Uncle Tan (Merlion Bank • Bimbit +65 9876 5432)",
        
        step3Title: "Langkah 3: Semakan Penerima & Jumlah",
        step3Instruction: "Semak nama berdaftar penerima dan masukkan jumlah dalam SGD.",
        amountPrompt: "Masukkan Jumlah ($ SGD):",
        amountNote: "Contoh: $5.50 untuk Kopi dan Roti",
        refLabel: "Tujuan Pembayaran:",
        
        step4Title: "Langkah 4: Semak Maklumat Pembayaran",
        step4Instruction: "SENTIASA semak nama penerima sebelum memasukkan PIN!",
        safetyTip: "💡 Tabiat Selamat Rasmi: Pastikan nama penerima sama seperti yang tertera di gerai.",
        checkRecipient: "Nama Penerima:",
        checkAmount: "Jumlah Dihantar:",
        feeLabel: "Yuran Pemindahan:",
        feeValue: "$0.00 SGD (Percuma)",
        
        step5Title: "Langkah 5: Pengesahan Token Digital",
        step5Instruction: "Tekan PIN 6-digit keselamatan di bawah.",
        pinPrompt: "Masukkan PIN 6-digit Keselamatan:",
        
        step6Title: "Pembayaran Berjaya!",
        step6Instruction: "Anda telah menyelesaikan latihan PayNow rasmi!",
        receiptNotice: "🔒 Demo Selamat: Tiada wang sebenar ditolak."
      },

      singpass: {
        title: "GovPass / Perkhidmatan Kerajaan",
        desc: "Praktis log masuk dan menuntut baucar CDC atau bantuan kerajaan.",
        step1Title: "Langkah 1: Log Masuk GovPass",
        step1Instruction: "Log masuk menggunakan kod QR atau SMS OTP.",
        methodQR: "📷 Imbas Kod QR GovPass",
        methodOTP: "💬 Log Masuk guna NRIC & SMS OTP",
        
        step2Title: "Langkah 2: Pilih Perkhidmatan",
        step2Instruction: "Pilih baucar atau bantuan yang ingin dituntut.",
        service1: "🧧 Tuntut Baucar CDC 2026",
        service2: "👴 Semak Subsidi Kesihatan Generasi Merdeka",
        service3: "🚌 Tambah Nilai Kad Pengangkutan Warga Emas",
        
        step3Title: "Langkah 3: Benarkan Data Myinfo",
        step3Instruction: "Semak maklumat peribadi yang diminta dari Myinfo.",
        nameLabel: "Nama:",
        nricLabel: "NRIC:",
        statusLabel: "Kelayakan:",
        statusEligible: "Layak mendapat Baucar $300 ✅",
        
        step4Title: "Langkah 4: Pengakuan Permohonan",
        step4Instruction: "Semak ringkasan permohonan dan sahkan.",
        declarationText: "Saya mengesahkan ini adalah permohonan saya.",
        
        step5Title: "Tuntutan Berjaya!",
        step5Instruction: "Baucar CDC anda sedia untuk digunakan di pusat penjaja.",
        govNotice: "🔒 Peringatan Rasmi: Agensi kerajaan TIDAK AKAN meminta kata laluan melalui SMS!"
      },

      clinic: {
        title: "Tempahan Temu Janji Poliklinik",
        desc: "Praktis memilih poliklinik, jenis rawatan, dan masa temu janji.",
        step1Title: "Langkah 1: Pilih Poliklinik",
        step1Instruction: "Pilih poliklinik terdekat dengan rumah anda.",
        clinic1: "🏥 Poliklinik Bedok",
        clinic2: "🏥 Poliklinik Jurong",
        clinic3: "🏥 Poliklinik Toa Payoh",
        clinic4: "🏥 Poliklinik Tampines",
        
        step2Title: "Langkah 2: Pilih Jenis Rawatan",
        step2Instruction: "Pilih perkhidmatan doktor hari ini.",
        type1: "👨‍⚕️ Konsultasi Perubatan Am",
        type2: "🩸 Ujian Darah Rutin",
        type3: "👁️ Pemeriksaan Mata & Kencing Manis Warga Emas",
        
        step3Title: "Langkah 3: Pilih Tarikh & Masa",
        step3Instruction: "Pilih sesi pagi atau petang.",
        time1: "📅 Esok - 09:30 Pagi",
        time2: "📅 Esok - 02:15 Petang",
        time3: "📅 Isnin Depan - 10:00 Pagi",
        
        step4Title: "Langkah 4: Arahan Sebelum Temu Janji",
        step4Instruction: "Semak arahan puasa dan maklumat temu janji.",
        prepNote: "💡 Nota: Sila bawa NRIC. Untuk ujian darah, berpuasa 8 jam sebelum.",
        smsReminderCheck: "🔔 Hantar peringatan SMS 1 hari sebelum temu janji",
        
        step5Title: "Temu Janji Disahkan!",
        step5Instruction: "Slip temu janji digital anda sedia. Imbas kod QR di kiosk pada hari temu janji."
      },

      qrscanner: {
        title: "Mengimbas Kod QR dengan Selamat",
        desc: "Ketahui cara kamera telefon mengimbas QR dan mengesan pautan palsu.",
        step1Title: "Langkah 1: Cara Imbasan QR",
        step1Instruction: "Halakan kamera telefon ke arah poster kod QR.",
        step2Title: "Langkah 2: Pilih Poster Praktis",
        step2Instruction: "Tekan poster QR di bawah untuk mula mengimbas.",
        posterSafePay: "☕ QR Pembayaran Kedai Kopi",
        posterSafeGov: "🏛️ QR Acara Kelab Masyarakat",
        posterScam: "⚠️ Pelekat Mencurigakan (QR Penipuan)",
        
        step3Title: "Langkah 3: Periksa Pautan Laman Web",
        step3Instruction: "SENTIASA periksa alamat web SEBELUM menekan pautan!",
        urlHeading: "Alamat Web Diimbas:",
        verdictSafe: "✅ PAUTAN SELAMAT: Alamat berakhir dengan .gov.sg atau bank rasmi.",
        verdictScam: "🚨 PAUTAN BAHAYA: Laman palsu yang cuba mencuri maklumat anda!",
        actionOpen: "Buka Laman Selamat 🌐",
        actionBlock: "Sekat & Lapor Pautan Palsu 🛑"
      },

      shopping: {
        title: "Membeli-belah Barangan Dapur Dalam Talian",
        desc: "Praktis menambah barang dapur ke troli dan membuat pembayaran.",
        step1Title: "Langkah 1: Pilih Barangan Dapur",
        step1Instruction: "Tekan barang di bawah untuk masuk ke troli.",
        item1: "🥛 Susu Segar 1L ($3.20)",
        item2: "🍚 Beras Royal Umbrella 5kg ($14.50)",
        item3: "🥚 Telur Segar 10s ($3.50)",
        item4: "☕ Serbuk Milo 900g ($8.90)",
        cartTotal: "Jumlah Troli:",
        
        step2Title: "Langkah 2: Masa & Alamat Penghantaran",
        step2Instruction: "Pilih masa dan alamat penghantaran anda.",
        addressOpt: "🏠 Rumah: Blk 123 Bedok North Ave 3 #05-67",
        
        step3Title: "Langkah 3: Bayar dengan PayNow",
        step3Instruction: "Semak jumlah dan buat pembayaran.",
        step4Title: "Pesanan Disahkan!",
        step4Instruction: "Barangan anda akan dihantar esok pagi!"
      },

      scamquiz: {
        title: "Mengenal Pasti Mesej Penipuan (Scam)",
        desc: "Praktis mengesan SMS, WhatsApp, dan panggilan palsu.",
        step1Title: "Kuiz Kesedaran Penipuan (ScamShield)",
        step1Instruction: "Baca situasi di bawah dan pilih tindakan PALING SELAMAT.",
        
        scenario1: {
          sender: "SMS daripada: +65 9182 3746",
          message: "🚨 Amaran LionCity Bank: Akaun anda dibekukan. Tekan http://lioncity-security-verify.com dengan segera!",
          question: "Apakah yang patut anda lakukan?",
          opt1: "Tekan pautan dengan segera ❌",
          opt2: "JANGAN tekan pautan. Telefon talian rasmi di belakang kad bank anda ✅",
          explanation: "Bank di Singapura TIDAK AKAN menghantar pautan melalui SMS! Sentiasa telefon talian rasmi."
        },

        scenario2: {
          sender: "WhatsApp daripada Nombor Tidak Dikenali",
          message: "Mak! Telefon saya rosak dan tukar nombor. Boleh PayNow $400 kepada kawan saya sekarang?",
          question: "Apakah yang patut anda lakukan?",
          opt1: "PayNow $400 serta-merta ❌",
          opt2: "Telefon nombor ASAL anak anda untuk pengesahan dahulu ✅",
          explanation: "Penipu sering menyamar sebagai ahli keluarga. Sentiasa telefon nombor biasa mereka dahulu!"
        },

        scenario3: {
          sender: "SMS daripada: GovSG-Claim",
          message: "Baucar CDC $300 anda sedia. Balas SMS ini dengan 6-digit kod OTP GovPass anda.",
          question: "Apakah yang patut anda lakukan?",
          opt1: "Balas dengan kod OTP ❌",
          opt2: "Jangan kongsi OTP. Padam mesej ✅",
          explanation: "JANGAN SEKALI-KALI berkongsi kod OTP dengan sesiapa sahaja!"
        }
      }
    },

    progress: {
      title: "Pencapaian Latihan Saya 🏆",
      subtitle: "Jejaki kemajuan dan raikan kemerdekaan digital anda!",
      tasksCompleted: "Tugasan Selesai",
      starsEarned: "Bintang Diperoleh",
      confidenceLevel: "Tahap Keyakinan",
      repeatBtn: "Praktis Lagi 🔄"
    }
  },

  ta: {
    appName: "PracticeSG",
    tagline: "முதியோருக்கான பாதுகாப்பான டிஜிட்டல் பயிற்சி",
    homeQuestion: "இன்று நீங்கள் என்ன பயிற்சி செய்ய விரும்புகிறீர்கள்?",
    homeSubtitle: "கீழே உள்ள பயிற்சியைத் தேர்ந்தெடுக்கவும். உண்மையான பணம் பயன்படுத்தப்படாது.",
    
    fontNormal: "எழுத்து: இயல்பு",
    fontLarge: "எழுத்து: பெரிது",
    fontExtra: "எழுத்து: மிக பெரிது",
    highContrast: "உயர் மாறுபாடு (High Contrast)",
    voiceAssist: "🔊 குரல் வாசிப்பு",
    stopVoice: "⏹ வாசிப்பை நிறுத்து",
    myProgress: "📊 எனது வளர்ச்சி",
    homeNav: "🏠 முகப்பு",
    
    back: "⬅️ பின்செல்",
    next: "அடுத்த படி ➡️",
    confirm: "✅ உறுதிசெய்",
    tryAgain: "🔄 மீண்டும் முயல்",
    finish: "🎉 முடிந்தது!",
    completedTag: "நிறைவு ⭐",
    readyTag: "தயார் ▶️",
    
    preConfTitle: "பயிற்சிக்கு முன்",
    preConfQuestion: "இப்பயிற்சியைச் செய்ய உங்களுக்கு எவ்வளவு நம்பிக்கை உள்ளது?",
    postConfTitle: "பயிற்சி முடிந்தது! 🎉",
    postConfQuestion: "பயிற்சிக்குப் பிறகு உங்கள் நம்பிக்கை எவ்வாறு உள்ளது?",
    confLow: "நம்பிக்கை குறைவு 😟",
    confMid: "சிறிது நம்பிக்கை 😐",
    confHigh: "மிக்க நம்பிக்கை! 😊",
    continueToPractice: "பயிற்சியைத் தொடங்கு ▶️",
    saveProgress: "சேமித்து முடி 🎉",

    modules: {
      paynow: {
        title: "PayNow டிஜிட்டல் பணம் செலுத்துதல்",
        desc: "தொலைபேசி எண், UEN அல்லது QR குறியீட்டிற்குப் பணம் அனுப்பும் பயிற்சி.",
        step1Title: "படி 1: PayNow முறையைத் தேர்ந்தெடுக்கவும்",
        step1Instruction: "பணம் செலுத்தும் முறையைத் தேர்வுசெய்க.",
        typeMobile: "📱 தொலைபேசி எண்",
        typeUEN: "🏢 நிறுவன UEN (கடை)",
        typeQR: "📷 PayNow QR குறியீட்டை ஸ்கேன் செய்",
        
        step2Title: "படி 2: பெறுநர் விவரங்கள்",
        step2Instruction: "பணம் பெறவேண்டிய நபர் அல்லது கடையைத் தேர்ந்தெடுக்கவும்.",
        recipientLabel: "பெறுநரைத் தேர்ந்தெடு:",
        opt1: "அஹ் ஹுவாட் காபிக்கடை (LionCity Bank • UEN 201912345K)",
        opt2: "அத்தை மேரி (SG Star Bank • மொபைல் +65 9123 4567)",
        opt3: "மாமா டான் (Merlion Bank • மொபைல் +65 9876 5432)",
        
        step3Title: "படி 3: பெறுநர் பெயர் சரிபார்ப்பு மற்றும் தொகை",
        step3Instruction: "பெறுநர் பெயரைச் சரிபார்த்துத் தொகையை உள்ளிடவும்.",
        amountPrompt: "தொகை ($ SGD):",
        amountNote: "உதாரணம்: காபி மற்றும் ரொட்டிக்கு $5.50",
        refLabel: "செலுத்தல் குறிப்பு:",
        
        step4Title: "படி 4: பாதுகாப்பு சரிபார்ப்பு",
        step4Instruction: "கடவுச்சொல்லை உள்ளிடுவதற்கு முன் பெறுநர் பெயரைச் சரிபார்க்கவும்!",
        safetyTip: "💡 பாதுகாப்புப் பழக்கம்: கடையில் உள்ள பெயரும் திரையில் உள்ள பெயரும் ஒன்றாக இருக்க வேண்டும்.",
        checkRecipient: "பெறுநர் பெயர்:",
        checkAmount: "அனுப்பும் தொகை:",
        feeLabel: "கட்டணம்:",
        feeValue: "$0.00 SGD (இலவசம்)",
        
        step5Title: "படி 5: PIN உள்ளிடவும்",
        step5Instruction: "6-இலக்க PIN குறியீட்டை அழுத்தவும்.",
        pinPrompt: "6-இலக்க PIN உள்ளிடவும்:",
        
        step6Title: "பணம் வெற்றிகரமாக அனுப்பப்பட்டது!",
        step6Instruction: "நீங்கள் PayNow பயிற்சியை முடித்துவிட்டீர்கள்!",
        receiptNotice: "🔒 பாதுகாப்பான மாதிரி: உண்மையான பணம் ஏதும் பிடிக்கப்படவில்லை."
      },

      singpass: {
        title: "GovPass அரசாங்கச் சேவைகள்",
        desc: "பாதுகாப்பாக உள்நுழைந்து அரசாங்க வவுச்சர்களைப் பெறும் பயிற்சி.",
        step1Title: "படி 1: GovPass உள்நுழைவு",
        step1Instruction: "QR குறியீடு அல்லது SMS OTP மூலம் உள்நுழையவும்.",
        methodQR: "📷 GovPass QR ஸ்கேன் செய்",
        methodOTP: "💬 NRIC மற்றும் SMS OTP பயன்படுத்து",
        
        step2Title: "படி 2: சேவையைத் தேர்ந்தெடு",
        step2Instruction: "உங்களுக்குத் தேவையான வவுச்சரைத் தேர்ந்தெடுக்கவும்.",
        service1: "🧧 CDC வவுச்சர்கள் 2026 கோருதல்",
        service2: "👴 முன்னோடி தலைமுறை மருத்துவ மானியம்",
        service3: "🚌 முதியோர் பயண அட்டை டாப்-அப்",
        
        step3Title: "படி 3: Myinfo விவரங்களைச் சரிபார்",
        step3Instruction: "உங்கள் விவரங்கள் சரியாக உள்ளதா எனச் சரிபார்க்கவும்.",
        nameLabel: "பெயர்:",
        nricLabel: "NRIC எண்:",
        statusLabel: "தகுதி:",
        statusEligible: "$300 வவுச்சர்களுக்குத் தகுதியுடையவர் ✅",
        
        step4Title: "படி 4: உறுதிப்படுத்து",
        step4Instruction: "கீழே உள்ள பச்சை பொத்தானை அழுத்தவும்.",
        declarationText: "இது எனது விண்ணப்பம் என உறுதிப்படுத்துகிறேன்.",
        
        step5Title: "கோரிக்கை முடிந்தது!",
        step5Instruction: "உங்கள் CDC வவுச்சர்கள் தயார் நிலையில் உள்ளன.",
        govNotice: "🔒 GovPass ஒருபோதும் SMS மூலம் கடவுச்சொல்லைக் கேட்காது!"
      },

      clinic: {
        title: "பினாயி மருத்துவமனை (Polyclinic) முன்பதிவு",
        desc: "மருத்துவமனை மற்றும் நேரத்தைத் தேர்ந்தெடுக்கும் பயிற்சி.",
        step1Title: "படி 1: பாலி கிளினிக்கைத் தேர்ந்தெடு",
        step1Instruction: "உங்கள் வீட்டிற்கு அருகில் உள்ள கிளினிக்கைத் தேர்ந்தெடுக்கவும்.",
        clinic1: "🏥 பெடோக் பாலி கிளினிக் (Bedok)",
        clinic2: "🏥 ஜூரோங் பாலி கிளினிக் (Jurong)",
        clinic3: "🏥 தோ பாயோ பாலி கிளினிக் (Toa Payoh)",
        clinic4: "🏥 தெம்பனிஸ் பாலி கிளினிக் (Tampines)",
        
        step2Title: "படி 2: சேவை வகையைத் தேர்ந்தெடு",
        step2Instruction: "உங்களுக்குத் தேவையான சேவையைத் தேர்ந்தெடுக்கவும்.",
        type1: "👨‍⚕️ பொது மருத்துவப் பரிசோதனை",
        type2: "🩸 ரத்தப் பரிசோதனை",
        type3: "👁️ கண் மற்றும் நீரிழிவு பரிசோதனை",
        
        step3Title: "படி 3: தேதி மற்றும் நேரத்தைத் தேர்ந்தெடு",
        step3Instruction: "காலை அல்லது மாலை நேரத்தைத் தேர்ந்தெடுக்கவும்.",
        time1: "📅 நாளை - காலை 09:30",
        time2: "📅 நாளை - பிற்பகல் 02:15",
        time3: "📅 அடுத்த திங்கள் - காலை 10:00",
        
        step4Title: "படி 4: முன்பதிவை உறுதிசெய்",
        step4Instruction: "முன்பதிவுச் சீட்டைச் சரிபார்க்கவும்.",
        prepNote: "💡 குறிப்பு: உங்கள் NRIC அட்டையைக் கொண்டு செல்லவும்.",
        smsReminderCheck: "🔔 1 நாளுக்கு முன் SMS நினைவூட்டல் அனுப்பு",
        
        step5Title: "முன்பதிவு உறுதி செய்யப்பட்டது!",
        step5Instruction: "அன்று செல்லும்போது உங்கள் NRIC அட்டையை மறக்காமல் எடுத்துச் செல்லவும்."
      },

      qrscanner: {
        title: "QR குறியீடுகளைப் பாதுகாப்பாக ஸ்கேன் செய்தல்",
        desc: "போலி இணையதள இணைப்புகளைக் கண்டறியும் பயிற்சி.",
        step1Title: "படி 1: QR ஸ்கேன் முறை",
        step1Instruction: "போன் கேமராவை QR போஸ்டரை நோக்கிப் பிடிக்கவும்.",
        step2Title: "படி 2: போஸ்டரைத் தேர்ந்தெடு",
        step2Instruction: "ஸ்கேன் செய்ய கீழே உள்ள போஸ்டரை அழுத்தவும்.",
        posterSafePay: "☕ காபிக்கடை செலுத்துதல் QR",
        posterSafeGov: "🏛️ சமூக மன்ற விழா QR",
        posterScam: "⚠️ சந்தேகத்திற்குரிய போலி QR",
        
        step3Title: "படி 3: இணையதளத்தைச் சரிபார்",
        step3Instruction: "இணைப்பைத் திறப்பதற்கு முன் முகவரியைச் சரிபார்க்கவும்!",
        urlHeading: "இணையதள முகவரி:",
        verdictSafe: "✅ பாதுகாப்பான இணைப்பு: .gov.sg அல்லது அதிகாரப்பூர்வ வங்கி.",
        verdictScam: "🚨 ஆபத்தான இணைப்பு: போலி இணையதளம்!",
        actionOpen: "பாதுகாப்பான இணைப்பைத் திற 🌐",
        actionBlock: "போலி இணைப்பைத் தடு 🛑"
      },

      shopping: {
        title: "ஆன்லைன் மளிகைப் பொருட்கள் வாங்குதல்",
        desc: "பொருட்களை கார்ட்டில் சேர்த்து PayNow மூலம் பணம் செலுத்தும் பயிற்சி.",
        step1Title: "படி 1: பொருட்களைத் தேர்ந்தெடு",
        step1Instruction: "பொருட்களைத் தட்டி கார்ட்டில் சேர்க்கவும்.",
        item1: "🥛 பசுப்பால் 1L ($3.20)",
        item2: "🍚 ராயல் அம்ப்ரெல்லா அரிசி 5kg ($14.50)",
        item3: "🥚 முட்டை 10 எண்ணிக்கை ($3.50)",
        item4: "☕ மைலோ 900g ($8.90)",
        cartTotal: "மொத்தத் தொகை:",
        
        step2Title: "படி 2: விநியோக முகவரி",
        step2Instruction: "உங்கள் முகவரியைச் சரிபார்க்கவும்.",
        addressOpt: "🏠 வீடு: Blk 123 Bedok North Ave 3 #05-67",
        
        step3Title: "படி 3: PayNow பணம் செலுத்துதல்",
        step3Instruction: "மொத்தத் தொகையைச் சரிபார்த்துப் பணம் செலுத்தவும்.",
        step4Title: "ஆர்டர் உறுதி செய்யப்பட்டது!",
        step4Instruction: "நாளை காலை மளிகைப் பொருட்கள் விநியோகிக்கப்படும்!"
      },

      scamquiz: {
        title: "மோசடிச் செய்திகளைக் கண்டறிதல்",
        desc: "போலி SMS மற்றும் வாட்ஸ்அப் மோசடிகளைக் கண்டறியும் பயிற்சி.",
        step1Title: "மோசடி விழிப்புணர்வு வினாடி வினா",
        step1Instruction: "பாதுகாப்பான முடிவைத் தேர்ந்தெடுக்கவும்.",
        
        scenario1: {
          sender: "SMS: +65 9182 3746",
          message: "🚨 LionCity வங்கி எச்சரிக்கை: உங்கள் கணக்கு முடக்கம் செய்யப்பட்டது. http://lioncity-security-verify.com உடனடியாகத் திறக்கவும்!",
          question: "நீங்கள் என்ன செய்ய வேண்டும்?",
          opt1: "உடனே இணைப்பைத் திறக்க வேண்டும் ❌",
          opt2: "இணைப்பைத் திறக்கக் கூடாது. வங்கியின் அதிகாரப்பூர்வ எண்ணை அழைக்க வேண்டும் ✅",
          explanation: "வங்கிகள் ஒருபோதும் SMS இல் இணையதள இணைப்புகளை அனுப்பாது!"
        },

        scenario2: {
          sender: "தெரியாத வாட்ஸ்அப் எண்",
          message: "அம்மா! என் போன் பழுதடைந்துவிட்டது. நண்பருக்கு உடனே $400 PayNow செய்ய முடியுமா?",
          question: "நீங்கள் என்ன செய்ய வேண்டும்?",
          opt1: "உடனே $400 அனுப்ப வேண்டும் ❌",
          opt2: "முதலில் உங்கள் பிள்ளையின் பழைய தொலைபேசி எண்ணிற்கு அழைக்க வேண்டும் ✅",
          explanation: "மோசடிக்காரர்கள் உறவினர்கள் போல் நடிப்பார்கள். எப்போதும் வழக்கமான எண்ணிற்கு அழைக்கவும்!"
        },

        scenario3: {
          sender: "SMS: GovSG-Claim",
          message: "உங்கள் $300 CDC வவுச்சர் தயார். பெற உங்கள் 6-இலக்க GovPass OTP எண்ணை SMS மூலம் அனுப்பவும்.",
          question: "நீங்கள் என்ன செய்ய வேண்டும்?",
          opt1: "OTP எண்ணை அனுப்ப வேண்டும் ❌",
          opt2: "OTP ஐப் பகிரக் கூடாது. செய்தியை நீக்கவும் ✅",
          explanation: "உங்கள் OTP குறியீட்டை யாருடனும் பகிர வேண்டாம்!"
        }
      }
    },

    progress: {
      title: "எனது சாதனைகள் 🏆",
      subtitle: "உங்கள் பயிற்சிகளையும் வளர்ச்சியையும் கொண்டாடுங்கள்!",
      tasksCompleted: "முடித்த பயிற்சிகள்",
      starsEarned: "பெற்ற நட்சத்திரங்கள்",
      confidenceLevel: "நம்பிக்கை அளவு",
      repeatBtn: "மீண்டும் பயிற்சி செய் 🔄"
    }
  }
};
