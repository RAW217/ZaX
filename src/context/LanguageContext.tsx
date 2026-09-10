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
    pctRevenue: string;
    disappearsTitle: string;
    disappearsDesc: string;
    guessworkTitle: string;
    guessworkDesc: string;
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
    upsellCta: string;
    title: string;
    description: string;
    emailUs: string;
    callUs: string;
    fullName: string;
    namePlaceholder: string;
    emailAddress: string;
    emailPlaceholder: string;
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
    title: string;
    subtitle: string;
    storyP1: string;
    storyP2: string;
    clientsBadge: string;
    clientsTitle: string;
    leadershipBadge: string;
    leadershipTitle: string;
    partnersBadge: string;
    partnersTitle: string;
    upsellTitle: string;
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
      subtitle: "Boost your bottom line by up to",
      highlight: "35%",
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
      pctRevenue: "9% of revenue",
      disappearsTitle: "5% disappears into expired stock",
      disappearsDesc: "Disposing of almost-expired products is costly, harmful to the environment, and widely disliked by customers.",
      guessworkTitle: "4% lost to guesswork & markdowns",
      guessworkDesc: "Without real-time demand insights, retailers discount too late or by too much, leaving money on the table.",
    },
    solution: {
      headline: "ZabonEx gives you the perfect quantity for that exact moment",
      description: "Traditional guessing almost always misses the mark: too little or too much. Using thousands of data points from your own store, ZabonEx AI calculates the precise amounts that will maximize your revenue and minimize your food waste.",
      chartTitle: "ZabonEx AI Forecasting Engine",
      easySetupHeadline: "...all that, and it's probably the easiest thing you've ever implemented",
      setupTitle: "Setup",
      setupBadge: "One time • Just a couple of days",
      setupDesc: "ZabonEx works with your existing systems and hardware, meaning that you can get started almost instantaneously.",
      register: "Register",
      getAccess: "Get Access",
      uploadData: "Upload Data",
      markdownsTitle: "Markdowns",
      markdownsBadge: "Ongoing • Within seconds",
      markdownsDesc: "Simply scan, mark down, and get on your way. ZabonEx fits right in with your regular routines.",
      scanProduct: "Scan product",
      enterQtyExp: "Enter quantity & expiration",
      zabonexAi: "ZabonEx AI",
      applySticker: "Apply sticker",
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
        demandForecasting: "Demand Forecasting",
        wasteReduction: "Waste Reduction",
        smartRouting: "Smart Routing",
        inventorySync: "Inventory Sync",
        salesAnalytics: "Sales Analytics",
        distributionPlanning: "Distribution Planning",
      },
      tabSectionTitle: "Let data drive your distribution strategy",
      tabSectionDesc: "ZabonEx continuously analyzes customer sensitivity, sell-out patterns, waste events, and effectiveness to deliver optimized, profit-driven decisions automatically, moving beyond manual guesswork.",
      learnMore: "Learn more",
    },
    benefits: {
      title: "Small predictive changes,\nbig business-changing results",
      case1: "Margins soar by 25% at Omani wholesaler with real-time predictions",
      case2: "ZabonEx AI goes live in 640 stores to optimize fresh sales",
      case3: "Leading GCC retailer cuts waste by 32%",
      readMore: "Read more case studies",
    },
    contact: {
      upsellTitle: "Ready to waste less with ZabonEx?",
      upsellCta: "Get started today",
      title: "Get in touch",
      description: "Have questions about how ZabonEx can optimize your inventory and reduce waste? Send us a message and our team will get back to you shortly.",
      emailUs: "Email us at",
      callUs: "Call us",
      fullName: "Full Name",
      namePlaceholder: "John Doe",
      emailAddress: "Email Address",
      emailPlaceholder: "john@company.com",
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
      title: "Cutting Waste.\nGrowing Businesses.",
      subtitle: "With AI-powered predictive intelligence, ZabonEx lets F&B enterprises and supermarkets put hard-earned profits in the bank, not the landfill.",
      storyP1: "Since our founding, ZabonEx has been dedicated to helping food distributors, wholesalers, and supermarkets conquer their most critical challenge: costly inventory mismatches and perishable food waste.",
      storyP2: "ZabonEx provides an all-in-one platform to optimize inventory, streamline distribution routes, and dynamically forecast demand. Our AI engine empowers businesses across the GCC and international markets to make data-backed decisions that drive profitability and environmental sustainability.",
      clientsBadge: "Clients",
      clientsTitle: "Trusted by leading retailers and distributors across the region",
      leadershipBadge: "Leadership",
      leadershipTitle: "Our team of industry and technology experts",
      partnersBadge: "Partners",
      partnersTitle: "Teaming up for sustainable change",
      upsellTitle: "Ready to waste less with ZabonEx?",
      upsellCta: "Get started today",
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
      subtitle: "ارفع صافي أرباحك بنسبة تصل إلى",
      highlight: "35%",
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
      badge: "المشكلة",
      title: "الهدر وقرارات المخزون غير الدقيقة تكلف شركات الأغذية والمشروبات",
      pctRevenue: "9% من إجمالي الإيرادات",
      disappearsTitle: "5% تضيع في المنتجات منتهية الصلاحية",
      disappearsDesc: "التخلص من المنتجات التالفة والمنتهية مكلف مادياً، ضار بالبيئة، وغير مرحب به من قبل العملاء.",
      guessworkTitle: "4% تضيع في التخمين والخصومات العشوائية",
      guessworkDesc: "بدون بيانات تنبؤية فورية، يضطر الموزعون والتجار لتقديم تخفيضات متأخرة أو مفرطة تبتلع هوامش الربح.",
    },
    solution: {
      headline: "زبون إكس يمنحك الكمية الدقيقة في اللحظة المناسبة تماماً",
      description: "التخمين التقليدي يخطئ دائماً: إما كميات فائضة تتلف أو قليلة تضيع فرص البيع. عبر تحليل آلاف نقاط البيانات من متاجرك، يحسب ذكاء زبون إكس بدقة الكميات التي تضاعف إيراداتك وتحد من الهدر.",
      chartTitle: "محرك زبون إكس للتنبؤ بالذكاء الاصطناعي",
      easySetupHeadline: "...كل هذا، وأسهل نظام ستقوم بتطبيقه في عملك",
      setupTitle: "الإعداد والربط",
      setupBadge: "مرة واحدة فقط • خلال يومين",
      setupDesc: "يعمل زبون إكس بالتكامل مع أنظمتك وأجهزتك الحالية دون أي تعقيد، مما يتيح لك البدء فوراً.",
      register: "التسجيل",
      getAccess: "تفعيل الحساب",
      uploadData: "رفع البيانات",
      markdownsTitle: "إدارة الخصومات الذكية",
      markdownsBadge: "بشكل مستمر • خلال ثوانٍ",
      markdownsDesc: "امسح الباركود، وحدد السعر المخفض الأمثل، وتابع عملك بسهولة تامة وتوافق مع روتينك اليومي.",
      scanProduct: "مسح المنتج",
      enterQtyExp: "إدخال الكمية والصلاحية",
      zabonexAi: "ذكاء زبون إكس",
      applySticker: "طباعة الملصق",
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
        demandForecasting: "التنبؤ بالطلب",
        wasteReduction: "تقليل الهدر",
        smartRouting: "المسارات الذكية",
        inventorySync: "مزامنة المخزون",
        salesAnalytics: "تحليلات المبيعات",
        distributionPlanning: "تخطيط التوزيع",
      },
      tabSectionTitle: "دع البيانات تقود استراتيجية التوزيع الخاصة بك",
      tabSectionDesc: "يحلل زبون إكس سلوك المستهلك، وسرعة دوران المنتجات، ومعدلات الهدر تلقائياً لتقديم قرارات مربحة ومبنية على الذكاء الاصطناعي بدلاً من التخمين.",
      learnMore: "اعرف المزيد",
    },
    benefits: {
      title: "تغييرات تنبؤية ذكية،\nونتائج استثنائية لأعمالك",
      case1: "ارتفاع هوامش الربح بنسبة 25% لدى موزع أغذية في عُمان بفضل التنبؤ الفوري",
      case2: "تشغيل ذكاء زبون إكس في 640 متجراً لتعظيم مبيعات المنتجات الطازجة",
      case3: "سلسلة تجزئة رائدة في الخليج تخفض هدرها الغذائي بنسبة 32%",
      readMore: "قراءة المزيد من دراسات الحالة",
    },
    contact: {
      upsellTitle: "جاهز لتقليل الهدر وزيادة أرباحك مع زبون إكس؟",
      upsellCta: "ابدأ معنا اليوم",
      title: "تواصل معنا",
      description: "هل لديك استفسارات حول كيفية مساعدة زبون إكس لعملك في خفض الهدر وتحسين التوزيع؟ فريقنا جاهز للتواصل معك ومساعدتك فوراً.",
      emailUs: "راسلنا عبر البريد",
      callUs: "اتصل بنا",
      fullName: "الاسم الكامل",
      namePlaceholder: "محمد أحمد",
      emailAddress: "البريد الإلكتروني",
      emailPlaceholder: "name@company.com",
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
      badge: "عن زبون إكس",
      title: "نحد من الهدر.\nننمي الأعمال.",
      subtitle: "من خلال الذكاء التنبؤي، يساعد زبون إكس شركات الأغذية والمشروبات والمتاجر الكبرى على تحويل الأرباح إلى أرقام في الحسابات البنكية بدلاً من خسائر في المرادم.",
      storyP1: "منذ انطلاقتنا، كرس زبون إكس جهوده لمساعدة موزعي الأغذية وتجار الجملة وسلاسل التجزئة على التغلب على أكبر تحدياتهم: أخطاء التخمين في المخزون وهدر الأغذية القابلة للتلف.",
      storyP2: "يقدم زبون إكس منصة شاملة ومتكاملة لتحسين إدارة المخزون، وجدولة مسارات التوزيع الذكية، والتنبؤ الدقيق بالطلب في الوقت الفعلي. يمكّن محرك الذكاء الاصطناعي الشركات في الخليج والأسواق العالمية من اتخاذ قرارات مبنية على البيانات لتحقيق أعلى ربحية واستدامة بيئية.",
      clientsBadge: "عملاؤنا",
      clientsTitle: "موثوق به من قِبل كبرى سلاسل التجزئة والموزعين في المنطقة",
      leadershipBadge: "فريق القيادة",
      leadershipTitle: "نخبة من خبراء التكنولوجيا وقطاع الأغذية والتوزيع",
      partnersBadge: "شركاء النجاح",
      partnersTitle: "نتعاون معاً لصناعة مستقبل مستدام",
      upsellTitle: "جاهز لتقليل الهدر مع زبون إكس؟",
      upsellCta: "ابدأ معنا اليوم",
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
