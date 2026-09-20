"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Sparkles, 
  ShieldCheck, 
  Building2, 
  AlertTriangle, 
  TrendingDown, 
  Layers, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  ShoppingBag, 
  Factory, 
  Truck, 
  Radio, 
  Zap, 
  HeartPulse, 
  Cpu, 
  LineChart, 
  Users, 
  Mail, 
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Clock,
  Settings,
  CloudUpload,
  Workflow,
  Target
} from "lucide-react";

export default function AboutPage() {
  const { t, lang } = useLanguage();

  const team = [
    {
      name: lang === "ar" ? "حاتم العبري" : "Hatim Al Abri",
      role: t.aboutPage.leaderHatimRole,
      bio: t.aboutPage.leaderHatimBio,
      image: "/Screenshot_19-9-2026_11124_.jpeg",
    },
    {
      name: lang === "ar" ? "المهند البلوشي" : "Almuhannad Al Balushi",
      role: t.aboutPage.leaderAlmuhannadRole,
      bio: t.aboutPage.leaderAlmuhannadBio,
      image: "/Screenshot_19-9-2026_11059_.jpeg",
    },
    {
      name: lang === "ar" ? "مديحة موسى" : "Madiha Moosa",
      role: t.aboutPage.leaderMadihaRole,
      bio: t.aboutPage.leaderMadihaBio,
      image: "/Screenshot_19-9-2026_11149_.jpeg",
    },
    {
      name: lang === "ar" ? "عمر المعمري" : "Omar Al Mamari",
      role: t.aboutPage.leaderOmarRole,
      bio: t.aboutPage.leaderOmarBio,
      image: "/Screenshot_19-9-2026_11216_.jpeg",
    },
  ];

  const issues = [
    {
      title: t.aboutPage.issueWasteTitle,
      desc: t.aboutPage.issueWasteDesc,
      icon: AlertTriangle,
      color: "bg-[#FFF4E5] text-[#D97706] border-[#FDE68A]",
    },
    {
      title: t.aboutPage.issueSalesTitle,
      desc: t.aboutPage.issueSalesDesc,
      icon: TrendingDown,
      color: "bg-[#FEF2F2] text-[#DC2626] border-[#FECACA]",
    },
    {
      title: t.aboutPage.issueSystemsTitle,
      desc: t.aboutPage.issueSystemsDesc,
      icon: Layers,
      color: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]",
    },
    {
      title: t.aboutPage.issueDataTitle,
      desc: t.aboutPage.issueDataDesc,
      icon: Database,
      color: "bg-[#F5F3FF] text-[#7C3AED] border-[#DDD6FE]",
    },
  ];

  const steps = [
    {
      num: "01",
      title: t.aboutPage.step1Title,
      desc: t.aboutPage.step1Desc,
      icon: CloudUpload,
    },
    {
      num: "02",
      title: t.aboutPage.step2Title,
      desc: t.aboutPage.step2Desc,
      icon: Database,
    },
    {
      num: "03",
      title: t.aboutPage.step3Title,
      desc: t.aboutPage.step3Desc,
      icon: Cpu,
    },
    {
      num: "04",
      title: t.aboutPage.step4Title,
      desc: t.aboutPage.step4Desc,
      icon: LineChart,
    },
    {
      num: "05",
      title: t.aboutPage.step5Title,
      desc: t.aboutPage.step5Desc,
      icon: Workflow,
    },
  ];

  const outcomes = [
    t.aboutPage.outcome1,
    t.aboutPage.outcome2,
    t.aboutPage.outcome3,
    t.aboutPage.outcome4,
    t.aboutPage.outcome5,
    t.aboutPage.outcome6,
  ];

  const sectors = [
    {
      title: t.aboutPage.sector1Title,
      desc: t.aboutPage.sector1Desc,
      icon: ShoppingBag,
    },
    {
      title: t.aboutPage.sector2Title,
      desc: t.aboutPage.sector2Desc,
      icon: Factory,
    },
    {
      title: t.aboutPage.sector3Title,
      desc: t.aboutPage.sector3Desc,
      icon: Truck,
    },
    {
      title: t.aboutPage.sector4Title,
      desc: t.aboutPage.sector4Desc,
      icon: Radio,
    },
    {
      title: t.aboutPage.sector5Title,
      desc: t.aboutPage.sector5Desc,
      icon: Zap,
    },
    {
      title: t.aboutPage.sector6Title,
      desc: t.aboutPage.sector6Desc,
      icon: HeartPulse,
    },
  ];

  const deliverySteps = [
    {
      num: "01",
      title: t.aboutPage.deliv1Title,
      desc: t.aboutPage.deliv1Desc,
    },
    {
      num: "02",
      title: t.aboutPage.deliv2Title,
      desc: t.aboutPage.deliv2Desc,
    },
    {
      num: "03",
      title: t.aboutPage.deliv3Title,
      desc: t.aboutPage.deliv3Desc,
    },
    {
      num: "04",
      title: t.aboutPage.deliv4Title,
      desc: t.aboutPage.deliv4Desc,
    },
    {
      num: "05",
      title: t.aboutPage.deliv5Title,
      desc: t.aboutPage.deliv5Desc,
    },
    {
      num: "06",
      title: t.aboutPage.deliv6Title,
      desc: t.aboutPage.deliv6Desc,
    },
  ];

  const clients = [
    "Lulu Hypermarket",
    "Carrefour GCC",
    "Al Meera",
    "Panda Retail",
    "Sultan Center",
    "Spinneys",
    "Spar Middle East",
    "Nesto Group"
  ];

  const partners = [
    "National Cloud Infrastructure",
    "Microsoft Azure",
    "Honeywell Mobility",
    "Zebra Technologies",
    "Deloitte Digital",
    "SAP Food & FMCG Logistics",
    "Oman Tech Fund",
    "Global Sustainability Network"
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="hero-gradient pt-36 pb-20 md:pb-28 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-[#D2E9F9]" />
            <span className="text-white text-sm font-display font-medium">
              {t.aboutPage.badge}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-white text-[44px] sm:text-[60px] md:text-[72px] font-medium leading-[1.08] mb-6 whitespace-pre-line max-w-4xl tracking-tight">
            {t.aboutPage.heroTitle}
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed font-light mb-12">
            {t.aboutPage.heroSubtitle}
          </p>

          {/* 3 Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[24px] p-7 text-white text-start flex flex-col justify-between h-[200px] shadow-lg hover:bg-white/15 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#D2E9F9]" />
              </div>
              <div>
                <div className="text-4xl font-medium mb-1 font-display tracking-tight">{t.aboutPage.stat1Num}</div>
                <div className="text-white/80 text-sm font-light">{t.aboutPage.stat1Label}</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[24px] p-7 text-white text-start flex flex-col justify-between h-[200px] shadow-lg hover:bg-white/15 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-wl-lightGreen" />
              </div>
              <div>
                <div className="text-4xl font-medium mb-1 font-display tracking-tight">{t.aboutPage.stat2Num}</div>
                <div className="text-white/80 text-sm font-light">{t.aboutPage.stat2Label}</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[24px] p-7 text-white text-start flex flex-col justify-between h-[200px] shadow-lg hover:bg-white/15 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-[#D2E9F9]" />
              </div>
              <div>
                <div className="text-4xl font-medium mb-1 font-display tracking-tight">{t.aboutPage.stat3Num}</div>
                <div className="text-white/80 text-sm font-light">{t.aboutPage.stat3Label}</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 2. TURNING DATA INTO BUSINESS VALUE ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 bg-[#F4FAFD] border border-[#BFDCF0] rounded-full px-4 py-1.5 w-fit">
                <span className="text-[#0A72C4] font-display text-xs font-semibold uppercase tracking-wider">
                  {t.aboutPage.storyBadge}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#0C3D5E] font-medium leading-[1.2]">
                {t.aboutPage.storyTitle}
              </h2>

              <p className="text-base sm:text-lg text-[#0C3D5E]/85 leading-relaxed font-light">
                {t.aboutPage.storyP1}
              </p>

              <p className="text-base sm:text-lg text-[#0C3D5E]/85 leading-relaxed font-light">
                {t.aboutPage.storyP2}
              </p>

              <p className="text-base sm:text-lg text-[#0C3D5E]/85 leading-relaxed font-light">
                {t.aboutPage.storyP3}
              </p>

              {/* Approach Box */}
              <div className="bg-[#F4FAFD] border-l-4 rtl:border-l-0 rtl:border-r-4 border-[#0A72C4] rounded-r-2xl rtl:rounded-r-none rtl:rounded-l-2xl p-6 mt-2">
                <h4 className="text-lg font-display font-semibold text-[#0C3D5E] mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#0A72C4]" />
                  {t.aboutPage.storyApproachTitle}
                </h4>
                <p className="text-[#0C3D5E]/80 text-sm sm:text-base leading-relaxed">
                  {t.aboutPage.storyApproachDesc}
                </p>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="rounded-[20px] overflow-hidden relative h-[360px] sm:h-[440px] shadow-md border border-[#D2E9F9]">
                <Image 
                  src="/about/warehouse_worker.jpg" 
                  alt="ZabonEx inventory operations" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C3D5E]/70 to-transparent flex items-end p-6">
                  <div className="text-white text-base font-medium">
                    {lang === "ar" ? "تمكين فرق العمل في الميدان والمستودعات والمتاجر" : "Empowering frontline teams across stores and warehouses"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. YOUTUBE VIDEO SECTION ================= */}
      <section className="py-20 bg-[#fafafa] border-t border-[#D2E9F9]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block bg-[#4249a5]/10 border border-[#4249a5]/20 rounded-[30px] px-6 py-2 mb-4">
            <span className="text-[#17679E] font-display text-sm font-semibold tracking-wide uppercase">
              {lang === "ar" ? "فيديو منصة زبون إكس" : "ZabonEx Platform Video"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl text-[#0C3D5E] font-medium leading-tight mb-10 max-w-2xl mx-auto">
            {lang === "ar" ? "تعرّف على منصة زبون إكس وكيف تعمل في الميدان" : "See how ZabonEx transforms inventory and demand forecasting"}
          </h2>

          <div className="w-full max-w-4xl mx-auto rounded-[24px] overflow-hidden shadow-2xl border border-[#BFDCF0] bg-black aspect-video relative">
            <iframe 
              src="https://www.youtube.com/embed/7G5rrlNDH08?rel=0" 
              title="ZabonEx Platform Video" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="w-full h-full border-0 absolute inset-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ================= 3. OUR PURPOSE ================= */}
      <section className="py-20 bg-[#F4FAFD] border-y border-[#D2E9F9]/70">
        <div className="max-w-5xl mx-auto px-6 text-center">
          
          <div className="inline-flex items-center gap-2 bg-[#E4F4EC] border border-[#B7E4CE] rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#12855F] font-display text-xs font-semibold uppercase tracking-wider">
              {t.aboutPage.purposeBadge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#0C3D5E] font-medium leading-tight mb-8">
            {t.aboutPage.purposeTitle}
          </h2>

          <p className="text-lg sm:text-xl text-[#0C3D5E]/80 leading-relaxed font-light max-w-3xl mx-auto mb-10">
            {t.aboutPage.purposeDesc}
          </p>

          <div className="bg-white rounded-[24px] p-8 sm:p-10 border border-[#BFDCF0] shadow-sm max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl text-[#0A72C4] font-display font-medium leading-snug">
              &ldquo;{t.aboutPage.purposeQuote}&rdquo;
            </p>
          </div>

        </div>
      </section>

      {/* ================= 4. REGIONAL ISSUES IN FOOD INDUSTRY ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#FCF1DC] border border-[#F5DCA6] rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#B77708] font-display text-xs font-semibold uppercase tracking-wider">
                {t.aboutPage.issuesBadge}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#0C3D5E] font-medium mb-6">
              {t.aboutPage.issuesTitle}
            </h2>
            <p className="text-[#0C3D5E]/80 text-base sm:text-lg leading-relaxed font-light">
              {t.aboutPage.issuesDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {issues.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#F4FAFD] border border-[#D2E9F9] rounded-[24px] p-8 flex gap-6 items-start hover:shadow-md transition-all group"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border ${item.color}`}>
                    <IconComp className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-[#0C3D5E] mb-2 group-hover:text-[#0A72C4] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-base text-[#0C3D5E]/75 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= 5. HOW WE CREATE IMPACT ================= */}
      <section className="py-24 bg-[#F4FAFD] border-t border-[#D2E9F9]">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-[#BFDCF0] rounded-full px-4 py-1.5 mb-4 shadow-sm">
              <span className="text-[#0A72C4] font-display text-xs font-semibold uppercase tracking-wider">
                {t.aboutPage.impactBadge}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#0C3D5E] font-medium mb-6">
              {t.aboutPage.impactTitle}
            </h2>
            <p className="text-[#0C3D5E]/80 text-base sm:text-lg leading-relaxed font-light">
              {t.aboutPage.impactDesc}
            </p>
          </div>

          {/* 5-step Workflow */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
            {steps.map((st, idx) => {
              const IconComponent = st.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-[22px] p-6 border border-[#BFDCF0] shadow-sm flex flex-col justify-between relative group hover:border-[#0A72C4] hover:-translate-y-1 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-display font-bold text-[#0A72C4]/40 group-hover:text-[#0A72C4] transition-colors">
                        {st.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#F4FAFD] flex items-center justify-center text-[#0A72C4]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>
                    <h4 className="text-lg font-display font-semibold text-[#0C3D5E] mb-2 leading-snug">
                      {st.title}
                    </h4>
                    <p className="text-sm text-[#0C3D5E]/75 leading-relaxed font-light">
                      {st.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Outcomes Grid */}
          <div className="bg-white rounded-[28px] p-8 sm:p-12 border border-[#BFDCF0] shadow-sm">
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#0C3D5E] text-center mb-10">
              {t.aboutPage.outcomesTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-3.5 bg-[#F4FAFD] rounded-xl p-4 border border-[#D2E9F9]">
                  <CheckCircle2 className="w-5 h-5 text-[#0A72C4] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#0C3D5E] font-medium leading-snug">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= 6. BROADER SERVICES & SECTORS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#F4FAFD] border border-[#BFDCF0] rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#0A72C4] font-display text-xs font-semibold uppercase tracking-wider">
                {t.aboutPage.sectorsBadge}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#0C3D5E] font-medium mb-6">
              {t.aboutPage.sectorsTitle}
            </h2>
            <p className="text-[#0C3D5E]/80 text-base sm:text-lg leading-relaxed font-light">
              {t.aboutPage.sectorsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sec, idx) => {
              const SecIcon = sec.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#F4FAFD] border border-[#D2E9F9] rounded-[24px] p-8 hover:bg-white hover:border-[#0A72C4] hover:shadow-lg transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-white border border-[#D2E9F9] flex items-center justify-center text-[#0A72C4] mb-6 group-hover:bg-[#0A72C4] group-hover:text-white transition-colors">
                      <SecIcon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-[#0C3D5E] mb-3">
                      {sec.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#0C3D5E]/75 leading-relaxed font-light">
                      {sec.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= 7. DELIVERY APPROACH ================= */}
      <section className="py-24 bg-[#F4FAFD] border-t border-[#D2E9F9]">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-[#BFDCF0] rounded-full px-4 py-1.5 mb-4 shadow-sm">
              <span className="text-[#0A72C4] font-display text-xs font-semibold uppercase tracking-wider">
                {t.aboutPage.deliveryBadge}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#0C3D5E] font-medium mb-6">
              {t.aboutPage.deliveryTitle}
            </h2>
            <p className="text-[#0C3D5E]/80 text-base sm:text-lg leading-relaxed font-light">
              {t.aboutPage.deliveryDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverySteps.map((deliv, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-[24px] p-8 border border-[#BFDCF0] shadow-sm relative overflow-hidden group hover:border-[#0A72C4] transition-all"
              >
                <span className="text-3xl font-display font-bold text-[#0A72C4]/20 group-hover:text-[#0A72C4]/40 transition-colors block mb-4">
                  {deliv.num}
                </span>
                <h4 className="text-xl font-display font-semibold text-[#0C3D5E] mb-2 leading-snug">
                  {deliv.title}
                </h4>
                <p className="text-sm sm:text-base text-[#0C3D5E]/75 leading-relaxed font-light">
                  {deliv.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 8. LEADERSHIP TEAM ================= */}
      <section className="py-24 hero-gradient text-white">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-block bg-white/15 backdrop-blur border border-white/25 rounded-full px-5 py-1.5 mb-4">
              <span className="text-[#D2E9F9] font-display text-sm font-semibold tracking-wide uppercase">
                {t.aboutPage.leadershipBadge}
              </span>
            </div>
            <h2 className="text-white text-3xl sm:text-5xl font-medium max-w-2xl mb-4">
              {t.aboutPage.leadershipTitle}
            </h2>
            <p className="text-white/80 text-base sm:text-lg max-w-3xl leading-relaxed font-light">
              {t.aboutPage.leadershipDesc}
            </p>
          </div>

          {/* 4 Leaders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {team.map((member, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-[24px] overflow-hidden shadow-xl border border-white/30 text-[#0C3D5E] flex flex-col group hover:-translate-y-1.5 transition-transform duration-300"
              >
                <div className="h-72 relative overflow-hidden bg-[#D2E9F9]/40">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h4 className="text-xl font-display font-bold text-[#0C3D5E] mb-1">
                      {member.name}
                    </h4>
                    <div className="text-xs sm:text-sm font-semibold text-[#0A72C4] mb-3 leading-snug">
                      {member.role}
                    </div>
                    <p className="text-xs sm:text-sm text-[#0C3D5E]/75 leading-relaxed font-light">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 9. OUR ECOSYSTEM & PARTNERS ================= */}
      <section className="py-24 bg-[#F4FAFD]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          <div className="inline-block bg-[#E4F4EC] border border-[#B7E4CE] rounded-full px-5 py-1.5 mb-4">
            <span className="text-[#12855F] font-display text-sm font-semibold tracking-wide uppercase">
              {t.aboutPage.ecosystemBadge}
            </span>
          </div>

          <h2 className="text-[#0C3D5E] text-3xl sm:text-4xl font-medium mb-6 max-w-2xl mx-auto">
            {t.aboutPage.ecosystemTitle}
          </h2>

          <p className="text-[#0C3D5E]/80 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-light mb-16">
            {t.aboutPage.ecosystemDesc}
          </p>

          {/* Clients Sub-heading */}
          <div className="mb-12">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#4E8CB8] font-display mb-6">
              {t.aboutPage.clientsBadge}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {clients.map((client, idx) => (
                <div 
                  key={idx}
                  className="bg-white hover:bg-[#D2E9F9]/40 transition-colors border border-[#BFDCF0]/60 rounded-[18px] p-6 flex items-center justify-center min-h-[85px] shadow-sm"
                >
                  <span className="text-[#0C3D5E] font-display font-semibold text-base sm:text-lg">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Partners Sub-heading */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#4E8CB8] font-display mb-6">
              {t.aboutPage.partnersBadge}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {partners.map((partner, idx) => (
                <div 
                  key={idx}
                  className="bg-white/80 border border-[#BFDCF0]/40 rounded-[18px] p-6 flex items-center justify-center min-h-[85px] shadow-sm"
                >
                  <span className="text-[#17679E] font-display font-medium text-sm sm:text-base">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= 10. UPSELL CALL TO ACTION (Exact Main Page Upsell) ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-[#99ff99] rounded-[24px] py-16 sm:py-20 px-8 sm:px-12 flex flex-col items-center justify-center text-center">
            <h3 className="text-[#4249a5] text-center mb-4 font-display text-3xl sm:text-4xl md:text-[42px] font-medium leading-tight">
              {t.contact.upsellTitle}
            </h3>
            <p className="text-[#0C3D5E] text-base sm:text-lg md:text-xl font-normal max-w-3xl mb-8">
              {t.contact.upsellSubtitle}
            </p>
            <a 
              href="/#contact" 
              className="cta-purple !bg-[#0C3D5E] hover:!bg-[#08293F] text-white whitespace-nowrap"
            >
              {t.contact.upsellCta}
            </a>
          </div>
        </div>
      </section>

      {/* ================= 11. FOOTER (Exact Main Page Footer) ================= */}
      <footer className="bg-[#303942] pt-20 pb-10 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <span className="text-2xl font-display font-semibold text-white tracking-wide">
                ZabonEx
              </span>
            </div>
            
            <div className="flex flex-col md:text-right gap-3">
              <a href="/#home" className="text-white hover:text-white/80 font-display text-base transition-colors">{t.contact.home}</a>
              <a href="/about" className="text-white hover:text-white/80 font-display text-base transition-colors">{t.contact.about}</a>
            </div>

            <div className="flex flex-col md:text-right gap-3">
              <a href="/#benefits" className="text-white hover:text-white/80 font-display text-base transition-colors">{t.contact.successStories}</a>
              <a href="/#contact" className="text-white hover:text-white/80 font-display text-base transition-colors">{t.contact.contactLink}</a>
            </div>
          </div>

          <div className="border-t border-[#0A72C4] my-8" />

          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/company/zabonex/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/zabonex.io/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/people/ZabonEx/100090619776003/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/ZabonEx" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors flex items-center justify-center">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCEh4jAegYvvppSA4gIzw0ag" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="mailto:inquiries@zabonex.com" className="text-white hover:text-white/80 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <p className="text-white/90 text-sm">
              &copy; {new Date().getFullYear()} ZabonEx. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
