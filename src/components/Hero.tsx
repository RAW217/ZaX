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
      <section id="home" className="hero-gradient min-h-[700px] pt-32 pb-20 flex items-center transition-all duration-200">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col items-center mt-14">
            <h1 className="text-white text-center font-display text-[45px] sm:text-[60px] md:text-[75px] font-medium leading-[1.1] mb-6">
              Predict demand. Grow margins.
            </h1>
            
            <h3 className="text-white text-center max-w-[800px] mx-auto font-display text-xl sm:text-2xl md:text-[30px] font-normal leading-[1.4] mb-10">
              Boost your bottom line by up to <span className="text-wl-lightGreen font-medium">35%</span> with AI-powered forecasting from ZabonEx – zero integration required
            </h3>
            
            <a href="#contact" className="cta-light">
              Get started today
            </a>
          </div>
        </div>
      </section>

      {/* Logo stripe */}
      <section className="bg-wl-darkPurpleTint min-h-[100px] flex items-center">
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
