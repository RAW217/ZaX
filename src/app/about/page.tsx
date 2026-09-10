"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Linkedin, Mail, ArrowRight, ShieldCheck, Sparkles, Building2, Users } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Tariq Al-Harthi",
    role: "Chief Executive Officer (CEO)",
    image: "/stat-img3.jpg",
    bio: "Ex-Retail Logistics Director with 18+ years optimizing GCC supply chains.",
  },
  {
    name: "Eng. Mazen Al-Balushi",
    role: "Chief Technology Officer (CTO)",
    image: "/problem-img2.jpg",
    bio: "AI & Machine Learning PhD, specialized in predictive demand algorithms.",
  },
  {
    name: "Sarah Jenkins",
    role: "Chief Operating Officer (COO)",
    image: "/stat-img1.jpg",
    bio: "Former Operations VP at European grocery and FMCG networks.",
  },
  {
    name: "Rashid Al-Kindi",
    role: "Chief Commercial Officer (CCO)",
    image: "/benefits-img1.jpg",
    bio: "Pioneering regional distributor partnerships and enterprise expansion.",
  },
  {
    name: "Leila Mansoor",
    role: "Head of Growth & Strategy",
    image: "/stat-img2.jpg",
    bio: "Scaling sustainability and AI adoption across 600+ retail stores.",
  },
  {
    name: "Omar Al-Jabri",
    role: "Software & Architecture Lead",
    image: "/problem-img1.jpg",
    bio: "Building zero-integration cloud connectors and real-time syncing pipelines.",
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
  "Microsoft Azure",
  "Honeywell",
  "Zebra Technologies",
  "Deloitte",
  "Capgemini",
  "SAP Food Logistics",
  "Oman Tech Fund",
  "Food Waste Free Network"
];

export default function AboutPage() {
  const { t, lang } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-gradient pt-36 pb-24 md:pb-32 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
          
          {/* Breadcrumb Pill */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-8">
            <span className="text-white text-sm font-display font-medium">
              {t.aboutPage.badge}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-white text-[42px] sm:text-[58px] md:text-[72px] font-medium leading-[1.1] mb-6 whitespace-pre-line max-w-4xl">
            {t.aboutPage.title}
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed font-light mb-12">
            {t.aboutPage.subtitle}
          </p>

          {/* Hero Visual Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[24px] p-8 text-white text-left flex flex-col justify-between h-[220px]">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#D2E9F9]" />
              </div>
              <div>
                <div className="text-3xl font-medium mb-1">35%</div>
                <div className="text-white/80 text-sm">Average Profit Margin Uplift</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[24px] p-8 text-white text-left flex flex-col justify-between h-[220px]">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-wl-lightGreen" />
              </div>
              <div>
                <div className="text-3xl font-medium mb-1">50%</div>
                <div className="text-white/80 text-sm">Food Waste Reduction</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[24px] p-8 text-white text-left flex flex-col justify-between h-[220px]">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-[#D2E9F9]" />
              </div>
              <div>
                <div className="text-3xl font-medium mb-1">640+</div>
                <div className="text-white/80 text-sm">Stores & Warehouses Connected</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="py-24 bg-[#F4FAFD]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-[28px] p-8 sm:p-14 shadow-sm border border-[#D2E9F9]">
            <p className="text-xl sm:text-2xl text-[#0C3D5E] font-display font-medium leading-relaxed mb-6">
              {t.aboutPage.storyP1}
            </p>
            <p className="text-base sm:text-lg text-[#0C3D5E]/80 leading-relaxed font-light mb-10">
              {t.aboutPage.storyP2}
            </p>

            {/* Video / Visual Feature Card */}
            <div className="w-full h-[320px] sm:h-[400px] rounded-[20px] overflow-hidden relative shadow-lg group">
              <Image 
                src="/about-banner.jpg" 
                alt="ZabonEx Technology" 
                fill 
                className="object-cover"
                onError={(e) => {
                  // Fallback to stock image if about-banner not present
                  e.currentTarget.src = "/hero-products-highres.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C3D5E]/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="text-sm font-semibold uppercase tracking-wider text-[#D2E9F9] mb-1">
                    Next-Gen AI Forecasting
                  </div>
                  <div className="text-xl sm:text-2xl font-medium">
                    Zero integration required • Deployed in 48 hours
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white border-t border-[#BFDCF0]/40">
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          <div className="inline-block bg-[#FCF1DC] border border-[#F5DCA6] rounded-full px-5 py-1.5 mb-4">
            <span className="text-[#B77708] font-display text-sm font-semibold tracking-wide uppercase">
              {t.aboutPage.clientsBadge}
            </span>
          </div>

          <h2 className="text-[#0C3D5E] text-2xl sm:text-4xl font-medium mb-12 max-w-2xl mx-auto">
            {t.aboutPage.clientsTitle}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {clients.map((client, idx) => (
              <div 
                key={idx}
                className="bg-[#F4FAFD] hover:bg-[#D2E9F9]/50 transition-colors border border-[#BFDCF0]/50 rounded-[18px] p-6 flex items-center justify-center min-h-[90px] shadow-sm"
              >
                <span className="text-[#0C3D5E] font-display font-semibold text-base sm:text-lg">
                  {client}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 hero-gradient text-white">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-block bg-white/15 backdrop-blur border border-white/25 rounded-full px-5 py-1.5 mb-4">
              <span className="text-[#D2E9F9] font-display text-sm font-semibold tracking-wide uppercase">
                {t.aboutPage.leadershipBadge}
              </span>
            </div>
            <h2 className="text-white text-3xl sm:text-5xl font-medium max-w-2xl">
              {t.aboutPage.leadershipTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-[24px] overflow-hidden shadow-xl border border-white/30 text-[#0C3D5E] flex flex-col group hover:-translate-y-1.5 transition-transform duration-300"
              >
                <div className="h-56 relative overflow-hidden bg-[#D2E9F9]/40">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-display font-bold text-[#0C3D5E] mb-1">
                      {member.name}
                    </h4>
                    <div className="text-sm font-semibold text-[#0A72C4] mb-3">
                      {member.role}
                    </div>
                    <p className="text-sm text-[#0C3D5E]/75 leading-relaxed font-light">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-[#F4FAFD]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          <div className="inline-block bg-[#E4F4EC] border border-[#B7E4CE] rounded-full px-5 py-1.5 mb-4">
            <span className="text-[#12855F] font-display text-sm font-semibold tracking-wide uppercase">
              {t.aboutPage.partnersBadge}
            </span>
          </div>

          <h2 className="text-[#0C3D5E] text-2xl sm:text-4xl font-medium mb-12 max-w-2xl mx-auto">
            {t.aboutPage.partnersTitle}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {partners.map((partner, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#BFDCF0]/60 rounded-[18px] p-6 flex items-center justify-center min-h-[90px] shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-[#17679E] font-display font-medium text-base sm:text-lg">
                  {partner}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Upsell Call to Action */}
      <section className="bg-white py-20 border-t border-[#BFDCF0]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-[#BFDCF0] border border-[#86B3D1]/40 rounded-[28px] py-14 px-8 sm:px-12 flex flex-col items-center justify-center text-center">
            <h3 className="text-[#0C3D5E] mb-8 font-display text-3xl sm:text-4xl font-medium">
              {t.aboutPage.upsellTitle}
            </h3>
            <a href="/#contact" className="cta-purple whitespace-nowrap px-8 py-4 text-lg">
              {t.aboutPage.upsellCta}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-gradient pt-16 pb-10 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <span className="text-2xl font-display font-semibold text-white tracking-wide">
                ZabonEx
              </span>
            </div>
            
            <div className="flex flex-col md:text-right gap-3">
              <a href="/#home" className="text-[#BFDCF0] hover:text-white font-display text-base transition-colors">{t.contact.home}</a>
              <a href="/about" className="text-white font-semibold font-display text-base transition-colors">{t.contact.about}</a>
            </div>

            <div className="flex flex-col md:text-right gap-3">
              <a href="/#benefits" className="text-[#BFDCF0] hover:text-white font-display text-base transition-colors">{t.contact.successStories}</a>
              <a href="/#contact" className="text-[#BFDCF0] hover:text-white font-display text-base transition-colors">{t.contact.contactLink}</a>
            </div>
          </div>

          <div className="border-t border-[#17679E] my-8" />

          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/company/zabonex/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-[#BFDCF0] hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:inquiries@zabonex.com" className="text-[#BFDCF0] hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <p className="text-[#86B3D1] text-sm">
              &copy; {new Date().getFullYear()} ZabonEx. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
