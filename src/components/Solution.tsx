"use client";

import { useState } from "react";
import InteractiveChart from "./InteractiveChart";
import { UserPlus, Lock, UploadCloud, Settings, Cpu, BarChart3, BarChart2, Droplet, ShoppingCart, PieChart, Thermometer, Gauge, Smartphone, FileText, ShoppingBasket, Beef, Microscope, Receipt } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// Left cluster icons positioned within a 210px × 420px container
// Large circles near x=145 intentionally exceed the 210px boundary by ~10px
// → the chart card (starting at x=210) covers that overflow → "peeking behind card" effect
const leftIcons = [
  // 1. BarChart2 — LARGE (155px), upper-RIGHT, slightly exceeds column right → touches/peeks card
  { icon: BarChart2, delay: 0.1, x: 146, y: 90, size: 155 },
  // 2. Droplet — medium (80px), upper-LEFT
  { icon: Droplet, delay: 0.2, x: 52, y: 65, size: 80 },
  // 3. ShoppingCart — small (58px), far-LEFT middle
  { icon: ShoppingCart, delay: 0.3, x: 24, y: 192, size: 58 },
  // 4. Thermometer — LARGE (142px), lower-RIGHT, slightly exceeds column right → peeks behind card
  { icon: Thermometer, delay: 0.4, x: 144, y: 298, size: 142 },
  // 5. PieChart — medium (72px), lower-LEFT
  { icon: PieChart, delay: 0.5, x: 46, y: 318, size: 72 },
  // 6. Gauge — small (52px), very bottom center-left
  { icon: Gauge, delay: 0.6, x: 90, y: 382, size: 52 },
];

// Right cluster icons positioned within a 210px × 420px container
// Large circles near x=65 intentionally go below 0 by ~12px
// → the chart card (ending at x=0 from left of this column) covers that overflow → "peeking behind card"
const rightIcons = [
  // 1. Smartphone — LARGE (155px), upper-LEFT, slightly exceeds column left → touches/peeks card
  { icon: Smartphone, delay: 0.1, x: 65, y: 90, size: 155 },
  // 2. FileText — medium (78px), upper-RIGHT
  { icon: FileText, delay: 0.2, x: 156, y: 65, size: 78 },
  // 3. ShoppingBasket — small (58px), far-RIGHT middle
  { icon: ShoppingBasket, delay: 0.3, x: 186, y: 192, size: 58 },
  // 4. Beef — medium (68px), mid-LEFT (near chart side)
  { icon: Beef, delay: 0.4, x: 62, y: 252, size: 68 },
  // 5. Microscope — LARGE (142px), lower-RIGHT (away from chart, far side of cluster)
  { icon: Microscope, delay: 0.5, x: 148, y: 305, size: 142 },
  // 6. Receipt — small (52px), very bottom center
  { icon: Receipt, delay: 0.6, x: 106, y: 382, size: 52 },
];

export default function Solution() {
  const { t } = useLanguage();
  const [activeTabKey, setActiveTabKey] = useState<keyof typeof t.solution.tabs>("demandForecasting");

  const tabKeys: (keyof typeof t.solution.tabs)[] = [
    "demandForecasting",
    "inventorySync",
    "salesAnalytics",
    "distributionPlanning",
    "smartRouting",
    "wasteReduction"
  ];

  const tabImages: Record<string, string> = {
    demandForecasting: "/solution-bg-1.jpg",
    inventorySync: "/solution-bg-4.jpg",
    salesAnalytics: "/GenAI.jpg",
    distributionPlanning: "/solution-bg-2.jpg",
    smartRouting: "/Screenshot 2026-09-18 175916.png",
    wasteReduction: "/Screenshot 2026-09-18 175736.png"
  };

  return (
    <>
      <section id="how-it-works" className="pt-24 pb-10 bg-[#F0F0F5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-[#17679E] mb-5 text-center w-full max-w-[900px] text-2xl sm:text-3xl md:text-[45px] leading-[1.25] md:leading-[1.2] font-display font-medium tracking-tight px-4">
            {t.solution.headline}
          </h2>
          <p className="text-center w-full max-w-[780px] mb-10 text-wl-textColor text-base sm:text-lg md:text-[19px] leading-relaxed px-4">
            {t.solution.description}
          </p>

          {/* 3-column flex: [Left Icons | Chart | Right Icons] */}
          <div className="flex items-center w-full max-w-[1200px] mx-auto mb-12 pt-8 pb-4 lg:pt-14 lg:pb-4">

            {/* Left Icons Column — DOM order 1, visual order 1 */}
            <div className="hidden lg:block flex-shrink-0 relative pointer-events-none" style={{ width: 210, height: 420, order: 1 }}>
              {leftIcons.map((item, idx) => (
                <div
                  key={idx}
                  className="absolute bg-[#D2E9F9] rounded-full flex items-center justify-center border border-[#BFDCF0]/70 shadow-sm"
                  style={{
                    width: item.size,
                    height: item.size,
                    left: item.x - item.size / 2,
                    top: item.y - item.size / 2,
                    animationDelay: `${item.delay}s`,
                  }}
                >
                  <item.icon strokeWidth={1.2} className="text-[#17679E]" style={{ width: item.size * 0.44, height: item.size * 0.44 }} />
                </div>
              ))}
            </div>

            {/* Right Icons Column — DOM order 2 (before chart), visual order 3 */}
            <div className="hidden lg:block flex-shrink-0 relative pointer-events-none" style={{ width: 210, height: 420, order: 3 }}>
              {rightIcons.map((item, idx) => (
                <div
                  key={idx}
                  className="absolute bg-[#D2E9F9] rounded-full flex items-center justify-center border border-[#BFDCF0]/70 shadow-sm"
                  style={{
                    width: item.size,
                    height: item.size,
                    left: item.x - item.size / 2,
                    top: item.y - item.size / 2,
                    animationDelay: `${item.delay}s`,
                  }}
                >
                  <item.icon strokeWidth={1.2} className="text-[#17679E]" style={{ width: item.size * 0.44, height: item.size * 0.44 }} />
                </div>
              ))}
            </div>

            {/* Chart Card — relative z-20: high z-index and solid white ensuring icons are strictly behind the chart */}
            <div className="flex-1 min-w-0 relative z-20 bg-white rounded-2xl shadow-xl" style={{ order: 2 }}>
              <InteractiveChart />
            </div>

          </div>

          <h3 className="mb-10 text-center max-w-2xl text-[32px] leading-tight text-[#17679E] font-medium">
            {t.solution.easySetupHeadline}
          </h3>


          {/* Setup Row */}
          <div className="relative w-full max-w-4xl mx-auto mb-3 flex justify-center items-center">

            {/* Top-Left Circular Image (BEHIND CARD, NO WHITE BORDER, brought further out) */}
            <div className="absolute -left-24 sm:-left-36 lg:-left-48 -top-12 sm:-top-18 lg:-top-24 z-0 hidden sm:block pointer-events-none">
              <div className="w-[210px] h-[210px] sm:w-[260px] sm:h-[260px] lg:w-[310px] lg:h-[310px] rounded-full overflow-hidden shadow-md">
                <Image
                  src="/problem-img2.png"
                  alt="Retail"
                  width={310}
                  height={310}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom-Right Circular Image (BEHIND CARD, NO WHITE BORDER, brought further out) */}
            <div className="absolute -right-16 sm:-right-24 lg:-right-36 -bottom-10 sm:-bottom-14 lg:-bottom-18 z-0 hidden sm:block pointer-events-none">
              <div className="w-[170px] h-[170px] sm:w-[220px] sm:h-[220px] lg:w-[260px] lg:h-[260px] rounded-full overflow-hidden shadow-md">
                <Image
                  src="/problem-img1.jpg"
                  alt="Shelves"
                  width={260}
                  height={260}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Main White Card Box (z-10, covers the inner part of circles) */}
            <div className="bg-white rounded-[24px] p-8 sm:p-12 shadow-sm flex flex-col items-center w-full relative z-10 border border-[#BFDCF0]/40">
              <h4 className="text-[30px] font-medium text-[#0C3D5E] mb-2 relative z-20">{t.solution.setupTitle}</h4>
              <div className="text-[#0A72C4] font-display text-base mb-4 relative z-20 font-medium">{t.solution.setupBadge}</div>
              <p className="text-center mb-8 max-w-xl text-wl-textColor text-base sm:text-lg md:text-[19px] leading-relaxed relative z-20">
                {t.solution.setupDesc}
              </p>

              <div className="relative flex flex-col sm:flex-row items-center justify-center gap-2 lg:gap-4 w-full py-4 z-20">
                <div className="bg-[#D2E9F9]/60 backdrop-blur-md rounded-[60px] w-[140px] h-[220px] flex flex-col items-center justify-center p-4 relative z-10 shadow-sm border-2 border-white">
                  <UserPlus className="w-10 h-10 text-[#0A72C4] mb-4" />
                  <div className="font-display text-[#0C3D5E] text-center font-medium">{t.solution.register}</div>
                </div>
                {/* Tall, narrow arrow */}
                <div className="hidden sm:block relative z-10 px-2">
                  <svg width="12" height="52" viewBox="0 0 12 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L12 26L0 52Z" fill="#BFDCF0" />
                  </svg>
                </div>
                <div className="bg-[#D2E9F9]/60 backdrop-blur-md rounded-[60px] w-[140px] h-[220px] flex flex-col items-center justify-center p-4 relative z-10 shadow-sm border-2 border-white">
                  <Lock className="w-10 h-10 text-[#0A72C4] mb-4" />
                  <div className="font-display text-[#0C3D5E] text-center font-medium">{t.solution.getAccess}</div>
                </div>
                {/* Tall, narrow arrow */}
                <div className="hidden sm:block relative z-10 px-2">
                  <svg width="12" height="52" viewBox="0 0 12 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L12 26L0 52Z" fill="#BFDCF0" />
                  </svg>
                </div>
                <div className="bg-[#D2E9F9]/60 backdrop-blur-md rounded-[60px] w-[140px] h-[220px] flex flex-col items-center justify-center p-4 relative z-10 shadow-sm border-2 border-white">
                  <UploadCloud className="w-10 h-10 text-[#0A72C4] mb-4" />
                  <div className="font-display text-[#0C3D5E] text-center font-medium">{t.solution.uploadData}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Transition Arrow: Enlarged to 64x72 */}
          <div className="flex justify-center w-full -my-1 relative z-20 pointer-events-none">
            <svg width="64" height="72" viewBox="0 0 64 72" fill="none">
              <path d="M7 6L32 31L57 6" stroke="#E2E4E9" strokeWidth="5.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 24L32 49L57 24" stroke="#E2E4E9" strokeWidth="5.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 42L32 67L57 42" stroke="#E2E4E9" strokeWidth="5.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Markdowns / Prediction Row */}
          <div className="relative w-full max-w-4xl mx-auto mb-8 mt-0 flex justify-center items-center">

            {/* Left Circular Image (BEHIND CARD, NO WHITE BORDER, brought further out) */}
            <div className="absolute -left-24 sm:-left-36 lg:-left-48 top-1/2 -translate-y-1/2 z-0 hidden sm:block pointer-events-none">
              <div className="w-[210px] h-[210px] sm:w-[260px] sm:h-[260px] lg:w-[310px] lg:h-[310px] rounded-full overflow-hidden shadow-md">
                <Image
                  src="/prediction-img2.jpg"
                  alt="Shelf electronic price tag"
                  width={310}
                  height={310}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Circular Image (BEHIND CARD, NO WHITE BORDER, brought further out) */}
            <div className="absolute -right-16 sm:-right-24 lg:-right-36 -bottom-10 sm:-bottom-14 lg:-bottom-18 z-0 hidden sm:block pointer-events-none">
              <div className="w-[170px] h-[170px] sm:w-[220px] sm:h-[220px] lg:w-[260px] lg:h-[260px] rounded-full overflow-hidden shadow-md">
                <Image
                  src="/prediction-img1.jpg"
                  alt="Price markdowns printer"
                  width={260}
                  height={260}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Main White Card Box (z-10 ON TOP of images) */}
            <div className="bg-white rounded-[24px] p-8 sm:p-12 shadow-sm flex flex-col items-center w-full relative z-10 border border-[#BFDCF0]/40">
              <h4 className="text-[30px] font-medium text-[#0C3D5E] mb-2 relative z-20">{t.solution.markdownsTitle}</h4>
              <div className="text-[#0A72C4] font-display text-base mb-4 relative z-20 font-medium">{t.solution.markdownsBadge}</div>
              <p className="text-center mb-8 max-w-xl text-wl-textColor text-base sm:text-lg md:text-[19px] leading-relaxed relative z-20">
                {t.solution.markdownsDesc}
              </p>

              <div className="relative flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 lg:gap-3.5 w-full py-4 z-20">
                {/* Step 1: Select seasons */}
                <div className="bg-[#5C94ED] rounded-[60px] w-[135px] sm:w-[145px] h-[215px] sm:h-[230px] flex flex-col items-center justify-center p-3 relative z-10 shadow-md">
                  <Image 
                    src="/step-select-seasons.png" 
                    alt="Select Seasons" 
                    width={90} 
                    height={90} 
                    className="w-16 h-16 object-contain mb-2" 
                  />
                  <div className="font-display text-[#2B2D38] text-center font-bold text-sm sm:text-base leading-tight max-w-[110px]">{t.solution.selectSeasons}</div>
                </div>

                {/* Arrow Connector: Lengthened height without changing width */}
                <div className="hidden sm:block relative z-10 px-0.5">
                  <svg width="14" height="64" viewBox="0 0 14 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L14 32L0 64Z" fill="#5C94ED" />
                  </svg>
                </div>

                {/* Step 2: Apply sales buffer */}
                <div className="bg-[#5C94ED] rounded-[60px] w-[135px] sm:w-[145px] h-[215px] sm:h-[230px] flex flex-col items-center justify-center p-3 relative z-10 shadow-md">
                  <Image 
                    src="/step-apply-buffer.png" 
                    alt="Apply Sales Buffer" 
                    width={90} 
                    height={90} 
                    className="w-16 h-16 object-contain mb-2" 
                  />
                  <div className="font-display text-[#2B2D38] text-center font-bold text-sm sm:text-base leading-tight max-w-[110px]">{t.solution.applySalesBuffer}</div>
                </div>

                {/* Arrow Connector: Lengthened height without changing width */}
                <div className="hidden sm:block relative z-10 px-0.5">
                  <svg width="14" height="64" viewBox="0 0 14 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L14 32L0 64Z" fill="#5C94ED" />
                  </svg>
                </div>

                {/* Step 3: Build AI Model */}
                <div className="bg-[#5C94ED] rounded-[60px] w-[135px] sm:w-[145px] h-[215px] sm:h-[230px] flex flex-col items-center justify-center p-3 relative z-10 shadow-md">
                  <Image 
                    src="/step-ai-model.png" 
                    alt="Build AI Model" 
                    width={90} 
                    height={90} 
                    className="w-16 h-16 object-contain mb-2" 
                  />
                  <div className="font-display text-[#2B2D38] text-center font-bold text-sm sm:text-base leading-tight max-w-[110px]">{t.solution.buildMlModel}</div>
                </div>

                {/* Arrow Connector: Lengthened height without changing width */}
                <div className="hidden sm:block relative z-10 px-0.5">
                  <svg width="14" height="64" viewBox="0 0 14 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L14 32L0 64Z" fill="#5C94ED" />
                  </svg>
                </div>

                {/* Step 4: View Prediction */}
                <div className="bg-[#5C94ED] rounded-[60px] w-[135px] sm:w-[145px] h-[215px] sm:h-[230px] flex flex-col items-center justify-center p-3 relative z-10 shadow-md">
                  <Image 
                    src="/step-view-prediction.png" 
                    alt="View Prediction" 
                    width={90} 
                    height={90} 
                    className="w-16 h-16 object-contain mb-2" 
                  />
                  <div className="font-display text-[#2B2D38] text-center font-bold text-sm sm:text-base leading-tight max-w-[110px]">{t.solution.viewPrediction}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Transition Arrow: 64x72 */}
          <div className="flex justify-center w-full my-3 mb-6">
            <svg width="64" height="72" viewBox="0 0 64 72" fill="none">
              <path d="M7 6L32 31L57 6" stroke="#E2E4E9" strokeWidth="5.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 24L32 49L57 24" stroke="#E2E4E9" strokeWidth="5.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 42L32 67L57 42" stroke="#E2E4E9" strokeWidth="5.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h3 className="text-[#17679E] mb-14 text-center max-w-2xl text-[32px] leading-tight whitespace-pre-line font-medium">
            {t.solution.resultsHeadline}
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 lg:gap-16 mb-16 mt-10">

            {/* Stat 1: 50% Reduction in food waste */}
            <div className="relative">
              <div className="absolute -top-5 -right-5 z-20 pointer-events-none">
                <div className="w-[79px] h-[79px] rounded-full overflow-hidden shadow-md">
                  <Image src="/stat-img1.jpg" alt="Hands holding bottle" width={89} height={89} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="rounded-full flex flex-col justify-center items-center w-[200px] h-[200px] shadow-lg text-[#0C3D5E] bg-[#99ff99] relative z-10">
                <div className="text-[#0C3D5E] text-[60px] font-medium font-display leading-none mb-2">{t.solution.stat1Pct}</div>
                <div className="text-[#0C3D5E]/90 text-center font-display text-base font-medium whitespace-pre-line">{t.solution.stat1Text}</div>
              </div>
            </div>

            {/* Stat 2: 20% Increase in revenues */}
            <div className="relative">
              <div className="absolute -top-5 -right-5 z-20 pointer-events-none">
                <div className="w-[79px] h-[79px] rounded-full overflow-hidden shadow-md">
                  <Image src="/stat-img2.jpg" alt="Shopping cart" width={89} height={89} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="rounded-full flex flex-col justify-center items-center w-[200px] h-[200px] shadow-lg text-[#0C3D5E] bg-[#99ff99] relative z-10">
                <div className="text-[#0C3D5E] text-[60px] font-medium font-display leading-none mb-2">{t.solution.stat2Pct}</div>
                <div className="text-[#0C3D5E]/90 text-center font-display text-base font-medium whitespace-pre-line">{t.solution.stat2Text}</div>
              </div>
            </div>

            {/* Stat 3: 9.1% Improvement in margins */}
            <div className="relative">
              <div className="absolute -top-5 -right-5 z-20 pointer-events-none">
                <div className="w-[79px] h-[79px] rounded-full overflow-hidden shadow-md">
                  <Image src="/stat-img3.jpg" alt="Man in aisle" width={89} height={89} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="rounded-full flex flex-col justify-center items-center w-[200px] h-[200px] shadow-lg text-[#0C3D5E] bg-[#99ff99] relative z-10">
                <div className="text-[#0C3D5E] text-[60px] font-medium font-display leading-none mb-2">{t.solution.stat3Pct}</div>
                <div className="text-[#0C3D5E]/90 text-center font-display text-base font-medium whitespace-pre-line">{t.solution.stat3Text}</div>
              </div>
            </div>

          </div>

          <a href="#contact" className="cta-purple !bg-[#0C3D5E] hover:!bg-[#08293F] text-white">{t.solution.cta}</a>
        </div>
      </section>

      <section id="solution" className="bg-white py-24 relative overflow-hidden scroll-mt-12">
        {/* Dotted Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-25 bg-[radial-gradient(#BFDCF0_2px,transparent_2px)] bg-[length:24px_24px]"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex justify-center mb-16">
            <h2 className="text-[#17679E] text-center max-w-[900px] text-2xl sm:text-3xl md:text-[45px] leading-[1.25] md:leading-[1.2] font-display font-medium tracking-tight px-4">{t.solution.tabsHeadline}</h2>
          </div>

          <div className="w-full">
            <div className="flex flex-nowrap overflow-x-auto whitespace-nowrap justify-start md:justify-center gap-1 sm:gap-1.5 md:gap-2 mb-4 pb-2 px-1" style={{ scrollbarWidth: 'none' }}>
              {tabKeys.map(key => (
                <button
                  key={key}
                  onClick={() => setActiveTabKey(key)}
                  className={`flex-shrink-0 px-2.5 sm:px-3 md:px-3.5 lg:px-4 py-1.5 font-display text-[11px] sm:text-xs md:text-sm font-semibold tracking-tight rounded-[30px] border transition-all ${
                    activeTabKey === key 
                      ? 'bg-[#0C3D5E] border-[#0C3D5E] text-white shadow-sm' 
                      : 'bg-gray-200 border-transparent text-[#0C3D5E] hover:bg-[#0C3D5E]/15 hover:text-[#0C3D5E]'
                  }`}
                >
                  {t.solution.tabs[key]}
                </button>
              ))}
            </div>

            <div className="p-8 bg-[#F4FAFD] border border-[#BFDCF0]/50 rounded-[24px]">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <div className="text-[#0A72C4] font-display text-lg font-medium mb-2">{t.solution.tabs[activeTabKey]}</div>
                  <h2 className="text-[#0C3D5E] text-[32px] mb-6">
                    {t.solution.tabContents?.[activeTabKey]?.title || t.solution.tabSectionTitle}
                  </h2>
                  <p className="text-wl-textColor mb-8">
                    {t.solution.tabContents?.[activeTabKey]?.desc || t.solution.tabSectionDesc}
                  </p>
                  <a href="#contact" className="cta-purple !bg-[#0C3D5E] hover:!bg-[#08293F] text-white">{t.solution.learnMore}</a>
                </div>
                <div className="bg-white rounded-xl h-[300px] shadow-sm flex items-center justify-center relative overflow-hidden border border-gray-200">
                  {tabKeys.map((key) => (
                    <img
                      key={key}
                      src={tabImages[key]}
                      alt={t.solution.tabs[key]}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-150 ${
                        activeTabKey === key ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
