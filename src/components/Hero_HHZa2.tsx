"use client";

import Image from "next/image";

const trustLogos = [
  "/how-it-works/blob-67fd768.png", // just placeholders or we can just use text
  "HoReCa",
  "Distributors",
  "Retail Chains",
  "Dairy",
  "Bakery",
  "Beverages",
  "Grocers",
  "Wholesalers",
];

export default function Hero() {
  return (
    <>
      <section id="home" className="hero-gradient min-h-[700px] sm:min-h-[750px] md:min-h-[800px] pt-32 pb-48 md:pb-64 relative flex items-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 w-full relative z-10 mb-20 md:mb-32">
          <div className="flex flex-col items-center mt-14">
            <h1 className="text-white text-center font-display text-[45px] sm:text-[60px] md:text-[75px] font-medium leading-[1.1] mb-6">
              Predict demand. Grow margins.
            </h1>
            
            <h3 className="text-white text-center max-w-[1000px] mx-auto font-display text-xl sm:text-2xl md:text-[28px] font-normal leading-[1.4] mb-10">
              Boost your products distribution and stocks availability by up to <span className="text-[#99ff99] font-normal">35%</span> with prediction platform from ZabonEx – seamless integration
            </h3>
            
            <a href="#contact" className="cta-light relative z-50">
              Get started today
            </a>
          </div>
        </div>

        {/* Static Products Image Container */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-[1800px] z-30 pointer-events-none flex justify-center items-end px-4">
          <img 
            src="/hero-products-highres.png" 
            alt="ZabonEx Products" 
            className="w-full h-auto object-contain object-bottom drop-shadow-2xl" 
          />
        </div>
      </section>

      {/* Logo stripe */}
      <section className="bg-[#17679E] border-t border-white/10 min-h-[100px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 py-8">
            <span className="text-white/70 font-display text-xl font-medium">HoReCa</span>
            <span className="text-white/70 font-display text-xl font-medium">Distributors</span>
            <span className="text-white/70 font-display text-xl font-medium">Retail Chains</span>
            <span className="text-white/70 font-display text-xl font-medium">Dairy</span>
            <span className="text-white/70 font-display text-xl font-medium">Bakery</span>
            <span className="text-white/70 font-display text-xl font-medium">Beverages</span>
            <span className="text-white/70 font-display text-xl font-medium">Wholesalers</span>
          </div>
        </div>
      </section>
    </>
  );
}
