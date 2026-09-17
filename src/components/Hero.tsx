"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const ProductCard = ({ name, image, status }: { name: string, image: string, status: string }) => {
  const isClaim = status.includes("Optimal") || status.includes("Reduced") || status.includes("مثالي") || status.includes("تخفيضه");
  const isUrgent = status.includes("Low") || status.includes("High") || status.includes("منخفض") || status.includes("مرتفع");
  const badgeClass = isClaim 
    ? "bg-[#E4F4EC] text-[#12855F]" 
    : isUrgent 
    ? "bg-[#FCF1DC] text-[#B77708]" 
    : "bg-[#D2E9F9] text-[#0A72C4]";

  return (
    <div className="flex flex-col bg-white rounded-[20px] shadow-[0_8px_30px_rgba(12,61,94,0.12)] overflow-hidden border border-[#D2E9F9] w-[140px] md:w-[180px] hover:shadow-[0_12px_40px_rgba(10,114,196,0.2)] transition-shadow">
      <div className="h-[110px] md:h-[140px] bg-white flex flex-col items-center justify-center relative overflow-hidden group p-2">
        <div className="absolute inset-0 bg-[#0A72C4]/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
        <img src={image} alt={name} className="w-full h-full object-contain transform transition-transform group-hover:scale-105" />
      </div>
      <div className="p-2 md:p-3 text-center bg-white border-t border-gray-50 relative z-20">
        <div className="font-display font-bold text-[#0C3D5E] text-sm md:text-base leading-tight mb-1 md:mb-2">{name}</div>
        <div className={`font-bold text-[8px] md:text-[10px] uppercase tracking-wide inline-block px-2.5 py-1 rounded-md ${badgeClass}`}>
          {status}
        </div>
      </div>
    </div>
  );
};

export default function Hero() {
  const [activeDesign, setActiveDesign] = useState<0 | 1>(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDesign((prev) => (prev === 0 ? 1 : 0));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="home" className="hero-gradient min-h-[700px] sm:min-h-[750px] md:min-h-[800px] pt-32 pb-48 md:pb-64 relative flex items-center overflow-hidden">
        {/* Manual Comparison Dots */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-50 flex gap-3">
          <button 
            onClick={() => setActiveDesign(0)}
            className={`w-3 h-3 rounded-full transition-all ${activeDesign === 0 ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'}`}
            title="Design HZa1 (Cards)"
          />
          <button 
            onClick={() => setActiveDesign(1)}
            className={`w-3 h-3 rounded-full transition-all ${activeDesign === 1 ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'}`}
            title="Design HHZa2 (Static)"
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 w-full relative z-10 mb-20 md:mb-32">
          <div className="flex flex-col items-center mt-14">
            <h1 className="text-white text-center font-display text-[45px] sm:text-[60px] md:text-[75px] font-medium leading-[1.1] mb-6">
              {t.hero.title}
            </h1>
            
            <h3 className="text-white text-center max-w-[800px] mx-auto font-display text-xl sm:text-2xl md:text-[30px] font-normal leading-[1.4] mb-10">
              {t.hero.subtitle} <span className="text-[#12855F] font-bold">{t.hero.highlight}</span> – ZabonEx
            </h3>
            
            <a href="#contact" className="cta-light relative z-50">
              {t.hero.cta}
            </a>
          </div>
        </div>

        {activeDesign === 0 ? (
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-[40px] sm:-bottom-[60px] w-full min-w-[1000px] max-w-[1600px] h-[300px] z-30 pointer-events-auto flex justify-center items-end animate-fade-in">
            <div className="relative w-full h-full">
              <div className="absolute left-[5%] bottom-[30px] -rotate-[8deg] z-10 transform transition-transform duration-300 hover:-translate-y-20 hover:rotate-0 hover:z-50 cursor-pointer hidden xl:block">
                <ProductCard name={t.hero.cards.milk} image="/milk.jpg" status={t.hero.cards.optimal} />
              </div>
              <div className="absolute left-[17%] bottom-[60px] -rotate-[4deg] z-20 transform transition-transform duration-300 hover:-translate-y-20 hover:rotate-0 hover:z-50 cursor-pointer hidden lg:block">
                <ProductCard name={t.hero.cards.oil} image="/oil.jpg" status={t.hero.cards.high} />
              </div>
              <div className="absolute left-[29%] bottom-[20px] rotate-[3deg] z-30 transform transition-transform duration-300 hover:-translate-y-20 hover:rotate-0 hover:z-50 cursor-pointer hidden sm:block">
                <ProductCard name={t.hero.cards.sugar} image="/sugar.jpg" status={t.hero.cards.low} />
              </div>
              <div className="absolute left-[41%] bottom-[50px] -rotate-[5deg] z-40 transform transition-transform duration-300 hover:-translate-y-20 hover:rotate-0 hover:z-50 cursor-pointer">
                <ProductCard name={t.hero.cards.flour} image="/flour.jpg" status={t.hero.cards.optimal} />
              </div>
              <div className="absolute left-[53%] bottom-[70px] rotate-[4deg] z-30 transform transition-transform duration-300 hover:-translate-y-20 hover:rotate-0 hover:z-50 cursor-pointer">
                <ProductCard name={t.hero.cards.pasta} image="/pasta.jpg" status={t.hero.cards.reduced} />
              </div>
              <div className="absolute left-[65%] bottom-[30px] -rotate-[2deg] z-20 transform transition-transform duration-300 hover:-translate-y-20 hover:rotate-0 hover:z-50 cursor-pointer hidden sm:block">
                <ProductCard name={t.hero.cards.yogurt} image="/yogurt.jpg" status={t.hero.cards.high} />
              </div>
              <div className="absolute left-[77%] bottom-[50px] rotate-[6deg] z-10 transform transition-transform duration-300 hover:-translate-y-20 hover:rotate-0 hover:z-50 cursor-pointer hidden lg:block">
                <ProductCard name={t.hero.cards.tomatoes} image="/tomatoes.jpg" status={t.hero.cards.low} />
              </div>
              <div className="absolute left-[88%] bottom-[20px] rotate-[3deg] z-20 transform transition-transform duration-300 hover:-translate-y-20 hover:rotate-0 hover:z-50 cursor-pointer hidden xl:block">
                <ProductCard name="Biscuits" image="/biscuits.jpg" status={t.hero.cards.optimal} />
              </div>
            </div>
          </div>
        ) : (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-[1800px] z-30 pointer-events-none flex justify-center items-end px-4 animate-fade-in">
            <img 
              src="/hero-products-highres.png" 
              alt="ZabonEx Products" 
              className="w-full h-auto object-contain object-bottom drop-shadow-2xl" 
            />
          </div>
        )}
      </section>

      {/* Logo stripe */}
      <section className="bg-[#17679E] border-t border-white/10 min-h-[100px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 py-8">
            <span className="text-white/90 font-display text-xl font-medium tracking-wide">HoReCa</span>
            <span className="text-white/90 font-display text-xl font-medium tracking-wide">Distributors</span>
            <span className="text-white/90 font-display text-xl font-medium tracking-wide">Retail Chains</span>
            <span className="text-white/90 font-display text-xl font-medium tracking-wide">Dairy</span>
            <span className="text-white/90 font-display text-xl font-medium tracking-wide">Bakery</span>
            <span className="text-white/90 font-display text-xl font-medium tracking-wide">Beverages</span>
            <span className="text-white/90 font-display text-xl font-medium tracking-wide">Wholesalers</span>
          </div>
        </div>
      </section>
    </>
  );
}
