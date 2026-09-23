"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "ar";

export interface Translations {
  nav: {
    solutions: string;
    successStories: string;
    about: string;
    contact: string;
    langSwitch: string;
  };
  hero: {
    title: string;
    subtitle: string;
    highlight: string;
    suffix: string;
    cta: string;
    cards: {
      milk: string;
      oil: string;
      sugar: string;
      flour: string;
      pasta: string;
      yogurt: string;
      tomatoes: string;
      optimal: string;
      high: string;
      low: string;
      reduced: string;
    };
  };
  problem: {
    badge: string;
    title: string;
    pctNum: string;
    pctText: string;
    pctRevenue: string;
    disappearsTitle: string;
    disappearsDesc: string;
    guessworkTitle: string;
    guessworkDesc: string;
    footnote: string;
  };
  solution: {
    headline: string;
    description: string;
    chartTitle: string;
    easySetupHeadline: string;
    setupTitle: string;
    setupBadge: string;
    setupDesc: string;
    register: string;
    getAccess: string;
    uploadData: string;
    markdownsTitle: string;
    markdownsBadge: string;
    markdownsDesc: string;
    scanProduct: string;
    enterQtyExp: string;
    zabonexAi: string;
    applySticker: string;
    selectSeasons: string;
    applySalesBuffer: string;
    buildMlModel: string;
    viewPrediction: string;
    resultsHeadline: string;
    stat1Pct: string;
    stat1Text: string;
    stat2Pct: string;
    stat2Text: string;
    stat3Pct: string;
    stat3Text: string;
    cta: string;
    tabsHeadline: string;
    tabs: {
      demandForecasting: string;
      wasteReduction: string;
      smartRouting: string;
      inventorySync: string;
      salesAnalytics: string;
      distributionPlanning: string;
    };
    tabSectionTitle: string;
    tabSectionDesc: string;
    tabContents: Record<string, { title: string; desc: string }>;
    learnMore: string;
  };
  benefits: {
    title: string;
    case1: string;
    case2: string;
    case3: string;
    readMore: string;
  };
  contact: {
    upsellTitle: string;
    upsellSubtitle: string;
    upsellCta: string;
    title: string;
    description: string;
    emailUs: string;
    callUs: string;
    fullName: string;
    namePlaceholder: string;
    emailAddress: string;
    emailPlaceholder: string;
    phoneNumber: string;
    phonePlaceholder: string;
    yourMessage: string;
    messagePlaceholder: string;
    sending: string;
    send: string;
    successMsg: string;
    errorMsg: string;
    home: string;
    about: string;
    successStories: string;
    contactLink: string;
  };
  aboutPage: {
    badge: string;
    heroTitle: string;
    heroSubtitle: string;
    stat1Num: string;
    stat1Label: string;
    stat2Num: string;
    stat2Label: string;
    stat3Num: string;
    stat3Label: string;
    storyBadge: string;
    storyTitle: string;
    storySubtitle: string;
    storyP1: string;
    storyP2: string;
    storyP3: string;
    storyApproachTitle: string;
    storyApproachDesc: string;
    purposeBadge: string;
    purposeTitle: string;
    purposeDesc: string;
    purposeQuote: string;
    issuesBadge: string;
    issuesTitle: string;
    issuesDesc: string;
    issueWasteTitle: string;
    issueWasteDesc: string;
    issueSalesTitle: string;
    issueSalesDesc: string;
    issueSystemsTitle: string;
    issueSystemsDesc: string;
    issueDataTitle: string;
    issueDataDesc: string;
    impactBadge: string;
    impactTitle: string;
    impactDesc: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    step5Title: string;
    step5Desc: string;
    outcomesTitle: string;
    outcome1: string;
    outcome2: string;
    outcome3: string;
    outcome4: string;
    outcome5: string;
    outcome6: string;
    sectorsBadge: string;
    sectorsTitle: string;
    sectorsDesc: string;
    sector1Title: string;
    sector1Desc: string;
    sector2Title: string;
    sector2Desc: string;
    sector3Title: string;
    sector3Desc: string;
    sector4Title: string;
    sector4Desc: string;
    sector5Title: string;
    sector5Desc: string;
    sector6Title: string;
    sector6Desc: string;
    deliveryBadge: string;
    deliveryTitle: string;
    deliveryDesc: string;
    deliv1Title: string;
    deliv1Desc: string;
    deliv2Title: string;
    deliv2Desc: string;
    deliv3Title: string;
    deliv3Desc: string;
    deliv4Title: string;
    deliv4Desc: string;
    deliv5Title: string;
    deliv5Desc: string;
    deliv6Title: string;
    deliv6Desc: string;
    leadershipBadge: string;
    leadershipTitle: string;
    leadershipDesc: string;
    leaderHatimRole: string;
    leaderHatimBio: string;
    leaderAlmuhannadRole: string;
    leaderAlmuhannadBio: string;
    leaderMadihaRole: string;
    leaderMadihaBio: string;
    leaderOmarRole: string;
    leaderOmarBio: string;
    ecosystemBadge: string;
    ecosystemTitle: string;
    ecosystemDesc: string;
    clientsBadge: string;
    clientsTitle: string;
    partnersBadge: string;
    partnersTitle: string;
    upsellTitle: string;
    upsellSubtitle: string;
    upsellCta: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      solutions: "Solutions",
      successStories: "Success Stories",
      about: "About",
      contact: "Contact",
      langSwitch: "العربية",
    },
    hero: {
      title: "Predict demand. Grow margins.",
      subtitle: "Boost your products distribution and stocks availability by up to",
      highlight: "35%",
      suffix: "with prediction platform from ZabonEx – seamless integration",
      cta: "Get started today",
      cards: {
        milk: "Fresh Milk",
        oil: "Olive Oil",
        sugar: "Pure Sugar",
        flour: "Bakery Flour",
        pasta: "Penne Pasta",
        yogurt: "Greek Yogurt",
        tomatoes: "Tomatoes",
        optimal: "Stock: Optimal",
        high: "Demand: High",
        low: "Stock: Low",
        reduced: "Waste: Reduced",
      }
    },
    problem: {
      badge: "The Problem",
      title: "Waste & poor inventory decisions cost F&B businesses",
      pctNum: "9%",
      pctText: "of revenue",
      pctRevenue: "9% of revenue",
      disappearsTitle: "5% disappears into expired stock",
      disappearsDesc: "Disposing of almost-expired products is costly, harmful to the environment, and widely disliked by customers.",
      guessworkTitle: "4% sales lost through guesswork and stockouts",
      guessworkDesc: "Without real-time demand insights, businesses often stock the wrong quantities, causing shortages; excess inventory; and missed sales opportunities.",
      footnote: "The figures are based on ZabonEx research data",
    },
    solution: {
      headline: "ZabonEx gives you the perfect quantity for that exact moment",
      description: "Traditional demand planning often misses the mark: ordering too much, too little, too early, or too late. ZabonEx AI Prediction analyzes thousands of data points from your sales, inventory, and POS systems to recommend the right quantity for each product and store location, maximizing sales while minimizing waste and stockouts",
      chartTitle: "ZabonEx AI Prediction Platform",
      easySetupHeadline: "All that impact, and with one of the easiest solutions you will ever implement.",
      setupTitle: "Setup",
      setupBadge: "One-time setup • Ready in just days",
      setupDesc: "Select the relevant season, apply a sales buffer, and let ZabonEx build the machine-learning model to generate accurate demand predictions.",
      register: "Register",
      getAccess: "Get Access",
      uploadData: "Upload Data",
      markdownsTitle: "Prediction",
      markdownsBadge: "Simple setup • Predictions in seconds",
      markdownsDesc: "Select the relevant season, apply a sales buffer, and let ZabonEx build the machine-learning model to generate accurate demand predictions.",
      scanProduct: "Scan product",
      enterQtyExp: "Enter quantity & expiration",
      zabonexAi: "ZabonEx AI",
      applySticker: "Apply sticker",
      selectSeasons: "Select seasons",
      applySalesBuffer: "Apply sales buffer",
      buildMlModel: "AI Model",
      viewPrediction: "View Prediction",
      resultsHeadline: "That's it.\nAnd the results are simply transformational.",
      stat1Pct: "50%",
      stat1Text: "Reduction in\nfood waste",
      stat2Pct: "20%",
      stat2Text: "Increase in\nrevenues",
      stat3Pct: "9.1%",
      stat3Text: "Improvement\nin margins",
      cta: "Get started today",
      tabsHeadline: "A solution for every challenge",
      tabs: {
        demandForecasting: "Object Recognition",
        wasteReduction: "Budget Forecasting",
        smartRouting: "Smart Distribution Routing",
        inventorySync: "Inventory Sync",
        salesAnalytics: "Sales Analytics",
        distributionPlanning: "Distribution Planning",
      },
      tabSectionTitle: "Turn shelf images into real-time stock insights",
      tabSectionDesc: "ZabonEx uses AI-powered object recognition to identify and count products on shelves, monitor availability, and detect stock gaps. Helping teams replenish faster, reduce manual checks, and prevent lost sales.",
      tabContents: {
        demandForecasting: {
          title: "Turn shelf images into real-time stock insights",
          desc: "ZabonEx uses AI-powered object recognition to identify and count products on shelves, monitor availability, and detect stock gaps. Helping teams replenish faster, reduce manual checks, and prevent lost sales."
        },
        inventorySync: {
          title: "Keep inventory updated through shelf images",
          desc: "ZabonEx converts shelf images into accurate stock counts and automatically syncs them with your inventory system, improving stock visibility, accelerating replenishment, and preventing lost sales."
        },
        distributionPlanning: {
          title: "Deliver the right quantities to every store",
          desc: "ZabonEx analyzes historical product distribution, sales patterns, and AI prediction outcomes to help sales analysts and teams decide the optimal product quantities to allocate to each store, improving availability while reducing overstock and waste, and eventually to fulfil consumers and shoppers demand."
        },
        smartRouting: {
          title: "Optimize every load, route, and delivery journey",
          desc: "ZabonEx combines demand predictions, stock visibility, and distribution plans to optimize product quantities, truck loading, and delivery routes. It also supports journey replanning when demand or conditions change, reducing fuel, transportation, labour, and overall distribution costs."
        },
        wasteReduction: {
          title: "Plan smarter for the next 3, 6, and 12 months",
          desc: "ZabonEx combines demand, production, inventory, warehousing, and distribution data to forecast future budgets and resource needs, helping businesses control costs, align factory output with market demand, optimize stock levels, and maintain product availability and a consistent customer experience."
        }
      },
      learnMore: "Learn more",
    },
    benefits: {
      title: "Smarter predictions, bigger business results.",
      case1: "Dairy producer increases margins by 25% with real-time predictions",
      case2: "ZabonEx AI Prediction Platform goes live in more than 5000 stores across Oman nationwide to maximize fresh product sales",
      case3: "Dolphine Catering successfully cuts waste at its workforce camp by 37%",
      readMore: "Read more case studies",
    },
    contact: {
      upsellTitle: "Ready to Sell More and Waste Less?",
      upsellSubtitle: "Turn your business data into better forecasts, smarter decisions, and measurable results.",
      upsellCta: "Get started today",
      title: "Get in touch",
      description: "Have questions about how ZabonEx can optimize your inventory and reduce waste? Send us a message and our team will get back to you shortly.",
      emailUs: "Email us at",
      callUs: "Call us",
      fullName: "Full Name",
      namePlaceholder: "John Doe",
      emailAddress: "Email Address",
      emailPlaceholder: "john@company.com",
      phoneNumber: "Phone Number",
      phonePlaceholder: "+968 9123 4567",
      yourMessage: "Your Message",
      messagePlaceholder: "Tell us about your needs...",
      sending: "Sending...",
      send: "Send Message",
      successMsg: "Message sent successfully! We will get back to you soon.",
      errorMsg: "Something went wrong. Please try again or email us directly.",
      home: "Home",
      about: "About",
      successStories: "Success Stories",
      contactLink: "Contact",
    },
    aboutPage: {
      badge: "About ZabonEx",
      heroTitle: "Sell More.\nWaste Less.",
      heroSubtitle: "ZabonEx turns F&B business data into accurate forecasts, practical insights, and smarter decisions that improve sales, reduce waste, and strengthen operational performance.",
      stat1Num: "35%",
      stat1Label: "products distribution and stocks availability Uplift",
      stat2Num: "50%",
      stat2Label: "Food Waste Reduction",
      stat3Num: "5000+",
      stat3Label: "Connected Stores & Outlets",
      storyBadge: "About Us",
      storyTitle: "Turning Data into Business Value:",
      storySubtitle: "Since 2023, ZabonEx has helped food and beverage businesses such as producers, distributors, retailers to sell more and waste less by predicting demand and improving how products reach customers.",
      storyP1: "ZabonEx provides a software as a service platform based on artificial intelligence for food and beverage producers, distributors, and retailers. It helps them predict demand, send the right quantities to each location, and monitor shelf availability, for reducing waste and returns while increasing sales. Founded in Oman in 2023, ZabonEx has offices in Muscat and Riyadh, with operations throughout the GCC countries.",
      storyP2: "",
      storyP3: "",
      storyApproachTitle: "Our Approach is Simple",
      storyApproachDesc: "Understand the business problem first, connect the right data and technology, and deliver measurable results.",
      purposeBadge: "Our Purpose",
      purposeTitle: "Smarter decisions for more sustainable growth",
      purposeDesc: "We believe businesses should not have to choose between profitability and sustainability. ZabonEx helps organizations use their data more effectively to reduce unnecessary waste, improve operational efficiency, increase product availability, and serve their customers better.",
      purposeQuote: "Helping businesses sell more, waste less, and grow through smarter data and AI.",
      issuesBadge: "Regional Industry Challenges",
      issuesTitle: "Regional Issues in Food & Beverage",
      issuesDesc: "Across the GCC, many businesses still struggle with disconnected data, limited planning accuracy, and delayed decision-making. In F&B, the impact is especially visible because demand changes quickly, products are perishable, and margins are hit by both overstock and stock-outs.",
      issueWasteTitle: "Waste & Returns",
      issueWasteDesc: "Too much product in the wrong place leads to perishable waste and expensive returns.",
      issueSalesTitle: "Reduced Sales",
      issueSalesDesc: "Too little product in the right place leads to lost revenue and poor on-shelf availability.",
      issueSystemsTitle: "Fragmented Systems",
      issueSystemsDesc: "Decision-making is slowed by disconnected legacy tools and manual spreadsheet reporting.",
      issueDataTitle: "Inconsistent Data",
      issueDataDesc: "Sales, supply chain, and production teams often work with incomplete or conflicting data.",
      impactBadge: "How We Create Impact",
      impactTitle: "From Fragmented Data to Measurable Action",
      impactDesc: "ZabonEx builds a practical bridge between business data, daily workflows, and decision support—delivering measurable outcomes across the entire value chain.",
      step1Title: "Collect Business Data",
      step1Desc: "Integrate data from ERP, POS, route management, inventory, finance, and external market indicators.",
      step2Title: "Organize & Cleanse",
      step2Desc: "Structure data into a trusted analytics environment so teams work from one clear version of the truth.",
      step3Title: "Apply AI & Forecasting",
      step3Desc: "Run advanced demand forecasting, machine learning, object recognition, and automated workflow logic.",
      step4Title: "Actionable Delivery",
      step4Desc: "Deliver instant operational clarity through intuitive dashboards, alerts, operational views, and natural-language analytics.",
      step5Title: "Continuous Optimization",
      step5Desc: "Monitor real-world outcomes and continuously refine models, rules, and decision logic over time.",
      outcomesTitle: "The Measurable Impact",
      outcome1: "More accurate demand and inventory planning",
      outcome2: "Better on-shelf product availability",
      outcome3: "Reduced waste, expiry, and return costs",
      outcome4: "Improved product freshness and customer satisfaction",
      outcome5: "Faster, confident, and data-backed operational decisions",
      outcome6: "Greater operational visibility and end-to-end control",
      sectorsBadge: "Broader Services & Sectors",
      sectorsTitle: "Enterprise Capabilities Across Industries",
      sectorsDesc: "The same proven capabilities that make ZabonEx indispensable in F&B create powerful results in other data-driven industries across the GCC:",
      sector1Title: "Retail & Distribution",
      sector1Desc: "Demand planning, replenishment visibility, sales analytics, customer and outlet performance, and stock optimization.",
      sector2Title: "Manufacturing",
      sector2Desc: "Production planning support, yield and waste analysis, master data control, and real-time operational dashboards.",
      sector3Title: "Logistics & Supply Chain",
      sector3Desc: "Shipment visibility, route and inventory analysis, service delivery dashboards, and automated decision support.",
      sector4Title: "Telecom & Digital Services",
      sector4Desc: "Performance dashboards, master data management, application support, automation, and AI-enabled operational insight.",
      sector5Title: "Utilities, Energy & Public Sector",
      sector5Desc: "Data platform modernization, secure National Cloud reporting environments, process automation, and analytics-driven planning.",
      sector6Title: "Healthcare, Hospitality & Others",
      sector6Desc: "Operational visibility, customized application solutions, enterprise analytics, and managed support tailored to business needs.",
      deliveryBadge: "Delivery Approach",
      deliveryTitle: "Our Practical Delivery Model",
      deliveryDesc: "We follow a structured, business-aligned model from initial discovery to continuous long-term optimization:",
      deliv1Title: "Discovery & Understanding",
      deliv1Desc: "Deep-dive into your core operational pain points and business goals.",
      deliv2Title: "Solution Design & Architecture",
      deliv2Desc: "Architect scalable, secure, and locally compliant data flows.",
      deliv3Title: "Data Integration & Setup",
      deliv3Desc: "Connect ERP, POS, and inventory systems seamlessly without disruption.",
      deliv4Title: "Dashboard, App & AI Delivery",
      deliv4Desc: "Deploy customized predictive models, interactive views, and apps.",
      deliv5Title: "Testing, Training & Go-Live",
      deliv5Desc: "Hands-on team onboarding, user training, and seamless launch.",
      deliv6Title: "Ongoing Support & Enhancement",
      deliv6Desc: "Continuous model tuning, monitoring, and ongoing feature expansion.",
      leadershipBadge: "Leadership",
      leadershipTitle: "Our team of business and technology experts",
      leadershipDesc: "Behind ZabonEx is a dedicated leadership team combining business knowledge, technical expertise, relationship development, and deep market experience across the GCC.",
      leaderHatimRole: "Co-founder & Chief Executive Officer",
      leaderHatimBio: "Leading ZabonEx's vision, strategic growth, and regional enterprise partnerships across the GCC.",
      leaderAlmuhannadRole: "Co-founder & Chief Technology Officer",
      leaderAlmuhannadBio: "Spearheading AI research, predictive architecture, object recognition, and enterprise data platforms.",
      leaderMadihaRole: "Relations Development Advisor",
      leaderMadihaBio: "Cultivating key institutional relationships, industry alliances, and ecosystem expansion.",
      leaderOmarRole: "Business Development Lead",
      leaderOmarBio: "Driving brand strategy, market positioning, and client acquisition across regional markets.",
      ecosystemBadge: "Our Ecosystem",
      ecosystemTitle: "Working together to create lasting value",
      ecosystemDesc: "We collaborate with leading technology providers, cloud partners, implementation specialists, and industry stakeholders to deliver secure, scalable, and locally relevant solutions. Together, we help organizations adopt AI, modernize data environments, and build a stronger foundation for continuous innovation.",
      clientsBadge: "Trusted By Forward-Thinking Businesses",
      clientsTitle: "Supporting organizations in turning data into results",
      partnersBadge: "Ecosystem Partners",
      partnersTitle: "Leading cloud & technology partners",
      upsellTitle: "Ready to Sell More and Waste Less?",
      upsellSubtitle: "Turn your business data into better forecasts, smarter decisions, and measurable results.",
      upsellCta: "Get Started with ZabonEx",
    },
  },
  ar: {
    nav: {
      solutions: "الحلول",
      successStories: "قصص النجاح",
      about: "من نحن",
      contact: "تواصل معنا",
      langSwitch: "English",
    },
    hero: {
      title: "توقع الطلب. ارفع أرباحك.",
      subtitle: "عزز توزيع المنتجات وتوفر المخزون بنسبة تصل إلى",
      highlight: "35%",
      suffix: "مع منصة التنبؤ من زبون إكس – ربط سلس ودون تعقيد",
      cta: "ابدأ اليوم مجاناً",
      cards: {
        milk: "حليب طازج",
        oil: "زيت زيتون",
        sugar: "سكر نقي",
        flour: "طحين مخابز",
        pasta: "معكرونة بيني",
        yogurt: "زبادي يوناني",
        tomatoes: "طماطم طازجة",
        optimal: "المخزون: مثالي",
        high: "الطلب: مرتفع",
        low: "المخزون: منخفض",
        reduced: "الهدر: تم تخفيضه",
      }
    },
    problem: {
      badge: "The Problem",
      title: "الهدر وقرارات المخزون غير الدقيقة تكلف شركات الأغذية والمشروبات",
      pctNum: "9%",
      pctText: "من إجمالي الإيرادات",
      pctRevenue: "9% من إجمالي الإيرادات",
      disappearsTitle: "5% تضيع في المنتجات منتهية الصلاحية",
      disappearsDesc: "التخلص من المنتجات التالفة والمنتهية مكلف مادياً، ضار بالبيئة، وغير مرحب به من قبل العملاء.",
      guessworkTitle: "4% مبيعات مفقودة بسبب التخمين ونفاد المخزون",
      guessworkDesc: "بدون بيانات تنبؤية فورية، تفشل الشركات في تحديد الكميات الصحيحة، مما يسبب النقص، وتراكم المخزون الفائض، وضياع فرص المبيعات.",
      footnote: "تستند هذه الأرقام إلى بيانات أبحاث زبون إكس",
    },
    solution: {
      headline: "زبون إكس يمنحك الكمية الدقيقة في اللحظة المناسبة تماماً",
      description: "غالباً ما يخطئ تخطيط الطلب التقليدي الهدف: بالطلب المفرط، أو القليل جداً، أو المبكر جداً، أو المتأخر جداً. يحلل التنبؤ بالذكاء الاصطناعي من زبون إكس آلاف نقاط البيانات من أنظمة المبيعات والمخزون ونقاط البيع للتوصية بالكمية المناسبة لكل منتج وفرع، مما يعظم المبيعات ويحد من الهدر ونفاد المخزون.",
      chartTitle: "منصة زبون إكس للتنبؤ بالذكاء الاصطناعي",
      easySetupHeadline: "كل هذا الأثر، وأحد أسهل الحلول التي ستقوم بتطبيقها في عملك على الإطلاق.",
      setupTitle: "الإعداد والربط",
      setupBadge: "إعداد لمرة واحدة • جاهز خلال أيام",
      setupDesc: "حدد الموسم المناسب، وأضف هامش المبيعات، ودع زبون إكس يبني نموذج التعلم الآلي لتقديم تنبؤات دقيقة بالطلب.",
      register: "التسجيل",
      getAccess: "تفعيل الحساب",
      uploadData: "رفع البيانات",
      markdownsTitle: "التنبؤ",
      markdownsBadge: "إعداد بسيط • تنبؤات خلال ثوانٍ",
      markdownsDesc: "حدد الموسم المناسب، وأضف هامش المبيعات، ودع زبون إكس يبني نموذج التعلم الآلي لتقديم تنبؤات دقيقة بالطلب.",
      scanProduct: "مسح المنتج",
      enterQtyExp: "إدخال الكمية والصلاحية",
      zabonexAi: "ذكاء زبون إكس",
      applySticker: "طباعة الملصق",
      selectSeasons: "تحديد المواسم",
      applySalesBuffer: "إضافة هامش الأمان",
      buildMlModel: "نموذج الذكاء الاصطناعي",
      viewPrediction: "عرض التنبؤات",
      resultsHeadline: "هذا كل شيء.\nوالنتائج تحدث تحولاً جذرياً في عملك.",
      stat1Pct: "50%",
      stat1Text: "انخفاض في\nهدر الأغذية",
      stat2Pct: "20%",
      stat2Text: "زيادة في\nالإيرادات",
      stat3Pct: "9.1%",
      stat3Text: "تحسن في\nهوامش الربح",
      cta: "ابدأ اليوم",
      tabsHeadline: "حل متكامل لكل تحدٍ في سلسلة التوزيع",
      tabs: {
        demandForecasting: "التعرف على العناصر (Object Recognition)",
        wasteReduction: "التنبؤ بالميزانية (Budget Forecasting)",
        smartRouting: "المسارات الذكية للتوزيع (Smart Distribution Routing)",
        inventorySync: "مزامنة المخزون",
        salesAnalytics: "تحليلات المبيعات",
        distributionPlanning: "تخطيط التوزيع",
      },
      tabSectionTitle: "تحويل صور الأرفف إلى رؤى مخزونية فورية",
      tabSectionDesc: "يستخدم زبون إكس تقنيات التعرف على العناصر بالذكاء الاصطناعي لتحديد وعد المنتجات على الأرفف، ومراقبة توافرها، وإكتشاف النقص في المخزون فوراً. مما يساعد الفرق على إعادة التعبئة أسرع، وتقليل الفحوصات اليدوية، ومنع ضياع المبيعات.",
      tabContents: {
        demandForecasting: {
          title: "تحويل صور الأرفف إلى رؤى مخزونية فورية",
          desc: "يستخدم زبون إكس تقنيات التعرف على العناصر بالذكاء الاصطناعي لتحديد وعد المنتجات على الأرفف، ومراقبة توافرها، وإكتشاف النقص في المخزون فوراً. مما يساعد الفرق على إعادة التعبئة أسرع، وتقليل الفحوصات اليدوية، ومنع ضياع المبيعات."
        },
        inventorySync: {
          title: "تحديث المخزون باستمرار عبر صور الأرفف",
          desc: "يحول زبون إكس صور الأرفف إلى أعداد مخزون دقيقة ويقوم بمزامنتها تلقائياً مع نظام المخزون الخاص بك، مما يحسن وضوح المخزون، ويسرع عملية إعادة التعبئة، ويمنع ضياع المبيعات."
        },
        distributionPlanning: {
          title: "توزيع الكميات المناسبة لكل متجر",
          desc: "يحلل زبون إكس التوزيع التاريخي للمنتجات، وأنماط المبيعات، ونتائج التنبؤ بالذكاء الاصطناعي لمساعدة محللي المبيعات والفرق على تحديد الكميات المثالية لكل متجر، مما يرفع التوافر ويقلل تكدس المخزون والهدر لتلبية طلب المتسوقين."
        },
        smartRouting: {
          title: "تحسين وتوجيه حمولات مسارات التوصيل بدقة",
          desc: "يجمع زبون إكس بين تنبؤات الطلب، وشفافية المخزون، وخطط التوزيع لتحسين كميات المنتجات وشحن الشاحنات ومسارات التوصيل. كما يدعم إعادة تخطيط المسارات عند تغير الظروف أو الطلب، مما يقلل تكاليف الوقود والنقل والعمالة والتوزيع الإجمالية."
        },
        wasteReduction: {
          title: "التخطيط الذكي لأشهر الـ 3 و6 و12 القادمة",
          desc: "يجمع زبون إكس بين بيانات الطلب والإنتاج والمخزون والتخزين والتوزيع للتنبؤ بالميزانيات المستقبلية واحتياجات الموارد، مما يساعد الشركات على ضبط التكاليف ومواءمة مخرجات المصانع مع طلب السوق وتحسين مستويات المخزون وضمان تجربة عملاء اتساقية."
        }
      },
      learnMore: "اعرف المزيد",
    },
    benefits: {
      title: "تنبؤات أذكى، ونتائج أعمال أكبر",
      case1: "منتج للألبان يرفع هوامش ربحه بنسبة 25% بفضل التنبؤ الفوري",
      case2: "إطلاق منصة زبون إكس للتنبؤ بالذكاء الاصطناعي في أكثر من 5000 متجر عبر سلطنة عُمان لتعظيم مبيعات المنتجات الطازجة",
      case3: "شركة دلفين للتموين تنجح في تخفيض الهدر في مجمع عمالتها بنسبة 37%",
      readMore: "قراءة المزيد من دراسات الحالة",
    },
    contact: {
      upsellTitle: "جاهز لبيع المزيد وتقليل الهدر؟",
      upsellSubtitle: "حوّل بيانات أعمالك إلى تنبؤات أفضل، وقرارات أذكى، ونتائج ملموسة.",
      upsellCta: "ابدأ معنا اليوم",
      title: "تواصل معنا",
      description: "هل لديك استفسارات حول كيفية مساعدة زبون إكس لعملك في خفض الهدر وتحسين التوزيع؟ فريقنا جاهز للتواصل معك ومساعدتك فوراً.",
      emailUs: "راسلنا عبر البريد",
      callUs: "اتصل بنا",
      fullName: "الاسم الكامل",
      namePlaceholder: "محمد أحمد",
      emailAddress: "البريد الإلكتروني",
      emailPlaceholder: "name@company.com",
      phoneNumber: "رقم الهاتف",
      phonePlaceholder: "+968 9123 4567",
      yourMessage: "رسالتك",
      messagePlaceholder: "أخبرنا عن احتياجات عملك...",
      sending: "جاري الإرسال...",
      send: "إرسال الرسالة",
      successMsg: "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.",
      errorMsg: "حدث خطأ ما. يرجى المحاولة لاحقاً أو مراسلتنا مباشرة.",
      home: "الرئيسية",
      about: "من نحن",
      successStories: "قصص النجاح",
      contactLink: "تواصل معنا",
    },
    aboutPage: {
      badge: "عن زبون إكس • ZabonEx",
      heroTitle: "بع أكثر.\nأهدر أقل.",
      heroSubtitle: "يحوّل زبون إكس بيانات أعمالك إلى تنبؤات دقيقة، ورؤى عملية، وقرارات أذكى تعزز مبيعاتك، وتقلل الهدر، وترفع الكفاءة التشغيلية.",
      stat1Num: "35%",
      stat1Label: "ارتفاع توزيع المنتجات وتوفر المخزون",
      stat2Num: "50%",
      stat2Label: "انخفاض في هدر الأغذية والمخزون",
      stat3Num: "5000+",
      stat3Label: "متجر ومنفذ بيع متصل بالمنصة",
      storyBadge: "من نحن",
      storyTitle: "تحويل البيانات إلى قيمة حقيقية للشركات:",
      storySubtitle: "منذ عام 2023، تساعد زبون إكس شركات الأغذية والمشروبات من منتجين وموزعين وتجار تجزئة على زيادة المبيعات وتقليل الهدر من خلال التنبؤ بالطلب وتحسين طريقة وصول المنتجات للعملاء.",
      storyP1: "تعد زبون إكس (ZabonEx) منصة برمجية كخدمة (SaaS) تعتمد على الذكاء الاصطناعي لمنتجي وموزعي وتجار التجزئة في قطاع الأغذية والمشروبات. تساعدهم على التنبؤ بالطلب، وإرسال الكميات المناسبة لكل موقع، ومراقبة توفر المنتجات على الرفوف، وذلك لتقليل الهدر والمرتجعات وزيادة المبيعات. تأسست الشركة في عمان عام 2023، ولديها مكاتب في مسقط والرياض، وتغطي عملياتها كافة دول مجلس التعاون الخليجي.",
      storyP2: "",
      storyP3: "",
      storyApproachTitle: "منهجيتنا بسيطة ومباشرة",
      storyApproachDesc: "فهم التحدي التشغيلي أولاً، وربط البيانات والتقنيات المناسبة، وتحقيق نتائج ملموسة وقابلة للقياس.",
      purposeBadge: "غايتنا ورسالتنا",
      purposeTitle: "قرارات أذكى لنمو أكثر استدامة وربحية",
      purposeDesc: "نؤمن بأن المؤسسات لا ينبغي أن تُجبر على الاختيار بين الربحية والاستدامة. يساعد زبون إكس الشركات على استغلال بياناتها بفاعلية للحد من الهدر غير الضروري، ورفع الكفاءة التشغيلية، وزيادة توافر المنتجات، وخدمة عملائها بأفضل صورة ممكنة.",
      purposeQuote: "مهمتنا الأساسية واضحة: مساعدة الشركات على بيع المزيد، وتقليل الهدر، والنمو عبر الذكاء الاصطناعي والبيانات الذكية.",
      issuesBadge: "تحديات السوق الخليجي",
      issuesTitle: "التحديات الإقليمية في قطاع الأغذية والتوزيع",
      issuesDesc: "في جميع أنحاء دول الخليج، لا تزال العديد من الشركات تعاني من تشتت البيانات، وضعف دقة التخطيط، وبطء اتخاذ القرارات. في قطاع الأغذية بالذات، يتضاعف الأثر لسرعة تغير الطلب وقابلية المنتجات للتلف، مما يهدد هوامش الربح بين تراكم المخزون ونفاد البضائع.",
      issueWasteTitle: "الهدر والمرتجعات",
      issueWasteDesc: "وجود كميات فائضة في المكان الخطأ يؤدي إلى تلف المنتجات وارتفاع المرتجعات المكلفة.",
      issueSalesTitle: "تراجع المبيعات",
      issueSalesDesc: "قلة المنتجات في المكان المناسب تؤدي إلى ضياع فرص بيع ثمينة وتراجع توافر البضائع.",
      issueSystemsTitle: "أنظمة مشتتة",
      issueSystemsDesc: "بطء اتخاذ القرارات اليومية نتيجة تباعد الأنظمة والاعتماد على التقارير اليدوية المرهقة.",
      issueDataTitle: "بيانات غير متناسقة",
      issueDataDesc: "تعمل فرق المبيعات، وسلاسل الإمداد، والإنتاج بمعلومات غير مكتملة أو متناقضة.",
      impactBadge: "آلية العمل والأثر",
      impactTitle: "من بيانات مشتتة إلى قرارات تشغيلية قابلة للقياس",
      impactDesc: "يربط زبون إكس البيانات من مختلف مصادر الأعمال لبناء جسر عملي بين الأنظمة وفرق العمل وصنّاع القرار، محققاً أثراً مباشراً على سلسلة القيمة.",
      step1Title: "جمع البيانات",
      step1Desc: "الربط مع أنظمة ERP، ونقاط البيع (POS)، وإدارة المسارات، والمخزون، والمالية وبيانات السوق.",
      step2Title: "تنظيم وتوحيد البيانات",
      step2Desc: "هيكلة البيانات في بيئة تحليلات موثوقة لتعتمد الفرق على مصدر حقيقة واحد متسق ودقيق.",
      step3Title: "تطبيق الذكاء التنبؤي",
      step3Desc: "تشغيل نماذج التنبؤ المتقدمة، وتعلم الآلة، والتعرف على العناصر، ومنطق أتمتة العمليات.",
      step4Title: "إتاحة الرؤى التفاعلية",
      step4Desc: "تمكين فرق العمل من خلال لوحات تحكم ذكية، وتنبيهات فورية، وتحليلات بلغة طبيعية سهلة.",
      step5Title: "المراقبة والتحسين المستمر",
      step5Desc: "تتبع مؤشرات الأداء الحقيقية وتحسين النماذج الرياضية وقواعد القرار بشكل مستمر.",
      outcomesTitle: "النتائج والأثر الملموس",
      outcome1: "تخطيط أكثر دقة للطلب وإدارة المخزون",
      outcome2: "توافر أعلى للمنتجات على الأرفف للزبائن",
      outcome3: "تقليل ملحوظ في الهدر وتواريخ الانتهاء والمرتجعات",
      outcome4: "تحسين نضارة المنتجات وتجربة المتسوقين",
      outcome5: "اتخاذ قرارات أسرع وأكثر ثقة مبنية على معطيات دقيقة",
      outcome6: "رؤية تشغيلية وتحكم شامل في سلسلة الإمداد",
      sectorsBadge: "القطاعات والخدمات الموسعة",
      sectorsTitle: "قدرات مؤسسية متقدمة لعدة قطاعات",
      sectorsDesc: "نفس القدرات التي تجعل زبون إكس عنصراً محورياً في قطاع الأغذية والمشروبات، تخلق نتائج فارقة في قطاعات أخرى تعتمد على البيانات في دول الخليج:",
      sector1Title: "التجزئة والتوزيع",
      sector1Desc: "تخطيط الطلب، وضوح التجديد، تحليلات المبيعات، أداء المنافذ، وتحسين مستويات المخزون.",
      sector2Title: "التصنيع والإنتاج",
      sector2Desc: "دعم تخطيط الإنتاج، تحليل الهدر والعائد، ضبط البيانات الرئيسية، ولوحات التحكم التشغيلية.",
      sector3Title: "اللوجستيات وسلاسل الإمداد",
      sector3Desc: "تتبع الشحنات، تحليل المسارات والمخزون، لوحات مستوى الخدمة، ودعم القرار الفوري.",
      sector4Title: "الاتصالات والخدمات الرقمية",
      sector4Desc: "لوحات مراقبة الأداء، إدارة البيانات، دعم التطبيقات، والأتمتة المدعومة بالذكاء الاصطناعي.",
      sector5Title: "المرافق، الطاقة والقطاع الحكومي",
      sector5Desc: "تحديث منصات البيانات، بيئات التقارير الآمنة بالسحابة الوطنية، أتمتة الإجراءات، والتخطيط التحليلي.",
      sector6Title: "الرعاية الصحية والضيافة وغيرها",
      sector6Desc: "الشفافية التشغيلية، الحلول التطبيقية المخصصة، والتحليلات المتقدمة والدعم المدار.",
      deliveryBadge: "منهجية التنفيذ",
      deliveryTitle: "نموذج تسليم عملي ومدروس",
      deliveryDesc: "نتبع نموذج تسليم عملي يحافظ على توافق العمل مع أهدافك التشغيلية وجاهزيته السريعة للتطبيق:",
      deliv1Title: "الاستكشاف وفهم متطلبات العمل",
      deliv1Desc: "دراسة التحديات التشغيلية وتحديد نقاط الألم وفرص العائد.",
      deliv2Title: "تصميم الحل والمعمارية التقنية",
      deliv2Desc: "بناء معمارية بيانات آمنة، قابلة للتوسع، ومتوافقة محلياً.",
      deliv3Title: "تكامل البيانات وإعداد المنصة",
      deliv3Desc: "ربط أنظمة ERP و POS والمخزون بسلاسة ودون تعطيل العمل.",
      deliv4Title: "تسليم اللوحات والتطبيقات و AI",
      deliv4Desc: "تفعيل نماذج التنبؤ، وتطبيقات الاستخدام، ولوحات التحكم الذكية.",
      deliv5Title: "الاختبار، التدريب والدعم عند الإطلاق",
      deliv5Desc: "تدريب فرق العمل والموظفين وضمان انتقال تشغيلي آمن وسلس.",
      deliv6Title: "الدعم المستمر والتحسين الدائم",
      deliv6Desc: "مراقبة دقة التنبؤات وتطوير الميزات بصورة مستمرة ومستدامة.",
      leadershipBadge: "فريق القيادة",
      leadershipTitle: "نخبة من خبراء الأعمال والتكنولوجيا",
      leadershipDesc: "يقف خلف زبون إكس فريق يجمع بين الرؤية التجارية العميقة، والخبرة التقنية المتطورة، وتطوير العلاقات الاستراتيجية، والمعرفة الواسعة بالأسواق الإقليمية.",
      leaderHatimRole: "الشريك المؤسس والرئيس التنفيذي",
      leaderHatimBio: "يقود رؤية زبون إكس، واستراتيجيات التوسع الإقليمي، وبناء الشراكات المؤسسية الكبرى في الخليج.",
      leaderAlmuhannadRole: "الشريك المؤسس ورئيس قطاع التكنولوجيا",
      leaderAlmuhannadBio: "يقود الابتكار الهندسي، وتطوير خوارزميات التنبؤ بالذكاء الاصطناعي، وتقنيات الرؤية الحاسوبية والمنصات السحابية.",
      leaderMadihaRole: "مستشارة تطوير العلاقات",
      leaderMadihaBio: "تقود تطوير العلاقات المؤسسية والتحالفات الاستراتيجية والتوسع في المنظومة الشريكة.",
      leaderOmarRole: "مسؤول تطوير الأعمال",
      leaderOmarBio: "يقود استراتيجيات الهوية والتسويق الرقمي وبناء الوعي بالسوق واكتساب العملاء في المنطقة.",
      ecosystemBadge: "منظومتنا الشريكة",
      ecosystemTitle: "نعمل معاً لصناعة أثر وقيمة مستدامة",
      ecosystemDesc: "نتعاون مع موفري التقنيات، وشركاء الحوسبة السحابية الوطنية، وخبراء التنفيذ والجهات الفاعلة في الصناعة لتقديم حلول آمنة وقابلة للتوسع ومصممة خصيصاً لتناسب احتياجات السوق المحلي والخليجي.",
      clientsBadge: "موثوق به من قادة الأعمال",
      clientsTitle: "ندعم المؤسسات الرائدة لتحويل بياناتها إلى نتائج ملموسة",
      partnersBadge: "شركاء المنظومة",
      partnersTitle: "أبرز شركاء الحوسبة السحابية والتكنولوجيا",
      upsellTitle: "جاهز لبيع المزيد وتقليل الهدر؟",
      upsellSubtitle: "حوّل بيانات أعمالك إلى توقعات أفضل، وقرارات أذكى، ونتائج ملموسة وقابلة للقياس.",
      upsellCta: "ابدأ مع زبون إكس الآن",
    },
  }
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: Translations;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("zabonex-lang") as Language | null;
    if (savedLang === "en" || savedLang === "ar") {
      setLangState(savedLang);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("zabonex-lang", lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
  }, [lang, mounted]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  const toggleLang = () => {
    setLangState((prev) => (prev === "en" ? "ar" : "en"));
  };

  const dir = lang === "ar" ? "rtl" : "ltr";
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
