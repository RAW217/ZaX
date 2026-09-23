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
          <div className="inline-flex items-center justify-center bg-[#B3C5EA] px-8 py-3.5 rounded-full mb-8 shadow-md">
            <span className="text-[#17679E] text-base sm:text-lg font-display font-normal tracking-wide">
              {t.aboutPage.badge}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-white text-center font-display text-[45px] sm:text-[60px] md:text-[75px] font-medium leading-[1.1] mb-6 whitespace-pre-line max-w-4xl">
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
              <h2 className="text-[#0C3D5E] text-2xl sm:text-3xl md:text-[40px] lg:text-[42px] leading-[1.2] font-display font-medium tracking-tight whitespace-normal lg:whitespace-nowrap">
                {t.aboutPage.storyTitle}
              </h2>

              {t.aboutPage.storySubtitle && (
                <div className="text-[#0A72C4] font-display text-lg sm:text-xl md:text-[22px] font-medium leading-relaxed">
                  {t.aboutPage.storySubtitle}
                </div>
              )}

              {t.aboutPage.storyP1 && (
                <p className="text-base sm:text-lg text-[#0C3D5E]/85 leading-relaxed font-light">
                  {t.aboutPage.storyP1}
                </p>
              )}

              {t.aboutPage.storyP2 && (
                <p className="text-base sm:text-lg text-[#0C3D5E]/85 leading-relaxed font-light">
                  {t.aboutPage.storyP2}
                </p>
              )}

              {t.aboutPage.storyP3 && (
                <p className="text-base sm:text-lg text-[#0C3D5E]/85 leading-relaxed font-light">
                  {t.aboutPage.storyP3}
                </p>
              )}
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. YOUTUBE VIDEO SECTION ================= */}
      <section className="py-20 bg-[#fafafa] border-t border-[#D2E9F9]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#17679E] font-medium leading-tight mb-10 max-w-4xl mx-auto">
            {lang === "ar" ? "تعرّف على منصة زبون إكس وكيف تعمل في الميدان" : "See how ZabonEx transforms inventory and demand forecasting"}
          </h2>

          <div className="w-full max-w-4xl mx-auto rounded-[24px] overflow-hidden shadow-2xl border border-[#BFDCF0] bg-black aspect-video relative">
            <iframe
              src="https://www.youtube.com/embed/GXoAPa4FgbM?rel=0"
              title="ZabonEx Platform Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0 absolute inset-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ================= CLIENTS SECTION ================= */}
      {/* 
        =============================================================================
        تعديل حجوم شعارات العملاء (CLIENTS LOGOS SIZES):
        يمكنك تعديل الحجم مباشرة عن طريق تغيير قيمة scale (مثلاً: 1.0, 1.2, 0.95, إلخ)
        =============================================================================
      */}
      <section className="py-20 bg-[#F8FAFC] border-t border-[#D2E9F9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#F0F2F5] rounded-full px-5 py-1.5 mb-4">
              <span className="text-[#0A72C4] font-display text-xs font-semibold uppercase tracking-wider">
                {lang === "ar" ? "عملاؤنا" : "Clients"}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl text-[#17679E] font-medium font-display">
              {lang === "ar" ? "شركاء النجاح والعملاء" : "Trusted by Industry Leaders"}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
            {[
              { src: "/Mazoon-logo (1).png", alt: "Mazoon Dairy Logo", size: 65, multiply: false },
              { src: "/images (3).jpg", alt: "Client Logo 2", size: 75, multiply: true },
              { src: "/DSD.png", alt: "Client Logo 3 (DSD)", size: 70, multiply: false },
              { src: "/download (2).png", alt: "Client Logo 1", size: 60, multiply: false },
            ].map((client, idx) => (
              <div key={idx} className="w-full h-32 bg-white rounded-2xl border border-gray-100 shadow-md sm:shadow-lg p-4 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={240}
                    height={120}
                    style={{ height: `${client.size}px`, width: 'auto', maxHeight: '85%', maxWidth: '85%' }}
                    className={`object-contain ${client.multiply ? 'mix-blend-multiply' : ''}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 8. LEADERSHIP TEAM ================= */}
      <section className="py-24 hero-gradient text-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-block bg-white/15 backdrop-blur rounded-full px-5 py-1.5 mb-4">
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
                    <p className="text-xs sm:text-sm text-wl-textColor leading-relaxed font-light">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= PARTNERS SECTION ================= */}
      {/* 
        =============================================================================
        تعديل حجوم شعارات الشركاء (PARTNERS LOGOS SIZES):
        يمكنك تعديل الحجم مباشرة عن طريق تغيير قيمة scale (مثلاً: 1.0, 1.25, 0.85, إلخ)
        =============================================================================
      */}
      <section className="py-20 bg-[#F4FAFD] border-t border-[#D2E9F9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#F0F2F5] rounded-full px-5 py-1.5 mb-4">
              <span className="text-[#0A72C4] font-display text-xs font-semibold uppercase tracking-wider">
                {lang === "ar" ? "شركاؤنا" : "Partners"}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl text-[#17679E] font-medium font-display">
              {lang === "ar" ? "شركاء التكنولوجيا والحلول" : "Our Strategic Partners"}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {[
              { src: "/aws-logo.svg", alt: "AWS Logo", size: 40, scale: 1.0, multiply: false },
              { src: "/images (2).png", alt: "Odoo Logo", size: 300, scale: 1.05, multiply: true },
              { src: "/images (3).png", alt: "Huawei Logo", size: 700, scale: 1.5, multiply: true },
              { src: "/images (1).png", alt: "Omantel Logo", size: 700, scale: 1.5, multiply: true },
            ].map((partner, idx) => (
              <div key={idx} className="w-full h-24 flex items-center justify-center p-2">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={240}
                    height={120}
                    style={{ 
                      height: `${partner.size}px`, 
                      width: 'auto', 
                      maxHeight: partner.scale ? `${Math.min(90 * partner.scale, 100)}%` : '90%', 
                      maxWidth: partner.scale ? `${Math.min(90 * partner.scale, 100)}%` : '90%',
                      transform: partner.scale ? `scale(${partner.scale})` : undefined
                    }}
                    className={`object-contain grayscale opacity-75 ${partner.multiply ? 'mix-blend-multiply' : ''}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 10. UPSELL CALL TO ACTION (Exact Main Page Upsell) ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-[#99ff99] rounded-[24px] py-16 sm:py-20 px-8 sm:px-12 flex flex-col items-center justify-center text-center">
            <h3 className="text-[#4249a5] text-center mb-8 font-display text-3xl sm:text-4xl md:text-[42px] font-medium leading-tight">
              {t.contact.upsellTitle}
            </h3>
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
