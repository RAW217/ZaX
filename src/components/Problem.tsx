"use client";

import { Trash2, TrendingDown } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Problem() {
  const { t } = useLanguage();

  return (
    <section id="problem" className="py-16 bg-[#fafafa] text-[#0C3D5E]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col items-center mb-4">
          <div className="bg-[#4249a5]/10 rounded-full px-6 py-2 mb-4">
            <span className="text-[#17679E] font-display text-base font-semibold tracking-wide">{t.problem.badge}</span>
          </div>
          <h2 className="text-center max-w-[850px] text-[#17679E] leading-[1.25] md:leading-[1.2] text-2xl sm:text-3xl md:text-[45px] font-medium">
            {t.problem.title} <span className="text-[#ff8a63] font-semibold">{t.problem.pctNum}</span> {t.problem.pctText}
          </h2>
        </div>

        <div className="flex justify-center -mb-4 -mt-2 relative z-0">
          <Image 
            src="/split-arrow.png" 
            alt="Splits into two causes" 
            width={130} 
            height={130} 
            className="object-contain opacity-70" 
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-8 mt-0">
          
          <div className="flex flex-col items-start w-full lg:w-1/2">
            <div className="bg-gray-100 rounded-full w-[52px] h-[52px] flex items-center justify-center -mb-6 -ml-2 relative z-20 shadow-sm border-2 border-white">
              <Trash2 className="text-gray-500 w-6 h-6" />
            </div>
            <div className="bg-white rounded-[20px] w-full shadow-sm border border-[#D2E9F9] h-full relative overflow-hidden flex flex-col">
              <div className="w-full h-44 sm:h-56 relative">
                <Image src="/problem-img1.jpg" alt="Expired stock" fill className="object-cover" />
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="text-[#17679E] font-display text-xl sm:text-2xl font-medium mb-3">
                  {t.problem.disappearsTitle}
                </h3>
                <p className="text-wl-textColor text-base sm:text-lg md:text-[19px] leading-relaxed font-display">
                  {t.problem.disappearsDesc}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start w-full lg:w-1/2">
            <div className="bg-gray-100 rounded-full w-[52px] h-[52px] flex items-center justify-center -mb-6 -ml-2 relative z-20 shadow-sm border-2 border-white">
              <TrendingDown className="text-gray-500 w-6 h-6" />
            </div>
            <div className="bg-white rounded-[20px] w-full shadow-sm border border-[#D2E9F9] h-full relative overflow-hidden flex flex-col">
              <div className="w-full h-44 sm:h-56 relative">
                <Image src="/problem-img2.jpg" alt="Lost to guesswork" fill className="object-cover" />
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="text-[#17679E] font-display text-xl sm:text-2xl font-medium mb-3">
                  {t.problem.guessworkTitle}
                </h3>
                <p className="text-wl-textColor text-base sm:text-lg md:text-[19px] leading-relaxed font-display">
                  {t.problem.guessworkDesc}
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-gray-400 font-display opacity-80">{t.problem.footnote}</p>
        </div>

      </div>
    </section>
  );
}
