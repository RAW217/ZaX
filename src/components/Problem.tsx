"use client";

import { Trash2, TrendingDown } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Problem() {
  const { t } = useLanguage();

  return (
    <section id="problem" className="py-24 bg-[#F4FAFD] text-[#0C3D5E]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col items-center mb-16">
          <div className="bg-[#FCF1DC] border border-[#F5DCA6] rounded-[30px] px-6 py-2.5 mb-6">
            <span className="text-[#B77708] font-display text-lg font-semibold tracking-wide uppercase">{t.problem.badge}</span>
          </div>
          <h2 className="text-center max-w-3xl text-[#0C3D5E] leading-tight">
            {t.problem.title} <span className="text-[#B77708] font-semibold">{t.problem.pctRevenue}</span>
          </h2>
        </div>

        <div className="flex justify-center -mb-2 -mt-6 relative z-0">
          <Image 
            src="/split-arrow.png" 
            alt="Splits into two causes" 
            width={160} 
            height={160} 
            className="object-contain opacity-70" 
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-10 mt-2">
          
          <div className="flex flex-col items-start w-full lg:w-1/2">
            <div className="bg-[#FCF1DC] rounded-full w-[60px] h-[60px] flex items-center justify-center -mb-8 -ml-3 relative z-20 shadow-sm border-2 border-white">
              <Trash2 className="text-[#B77708] w-7 h-7" />
            </div>
            <div className="bg-white rounded-[20px] w-full shadow-sm border border-[#D2E9F9] h-full relative overflow-hidden flex flex-col">
              <div className="w-full h-48 sm:h-64 relative">
                <Image src="/problem-img1.jpg" alt="Expired stock" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-[#0C3D5E] font-display text-2xl font-medium mb-4">
                  {t.problem.disappearsTitle}
                </h3>
                <p className="text-[#0C3D5E]/80 leading-relaxed font-display">
                  {t.problem.disappearsDesc}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start w-full lg:w-1/2">
            <div className="bg-[#FCF1DC] rounded-full w-[60px] h-[60px] flex items-center justify-center -mb-8 -ml-3 relative z-20 shadow-sm border-2 border-white">
              <TrendingDown className="text-[#B77708] w-7 h-7" />
            </div>
            <div className="bg-white rounded-[20px] w-full shadow-sm border border-[#D2E9F9] h-full relative overflow-hidden flex flex-col">
              <div className="w-full h-48 sm:h-64 relative">
                <Image src="/problem-img2.jpg" alt="Lost to guesswork" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-[#0C3D5E] font-display text-2xl font-medium mb-4">
                  {t.problem.guessworkTitle}
                </h3>
                <p className="text-[#0C3D5E]/80 leading-relaxed font-display">
                  {t.problem.guessworkDesc}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
