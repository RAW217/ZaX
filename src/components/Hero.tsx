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

import { useState, useEffect } from "react";

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);
  const bgImages = ["/hero-bg-1.jpg", "/hero-bg-2.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section id="home" className="relative min-h-[700px] flex items-center overflow-hidden">
        {/* Animated Backgrounds */}
        {bgImages.map((src, i) => (
          <div 
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 ${i === bgIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={src} 
              alt="Background" 
              className="absolute inset-0 w-full h-full object-cover object-center" 
            />
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        ))}

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-32 pb-20">
          <div className="flex flex-col items-center mt-14">
            <h1 className="text-white text-center font-display text-[45px] sm:text-[60px] md:text-[75px] font-medium leading-[1.1] mb-6 drop-shadow-lg">
              Predict demand. Grow margins.
            </h1>
            
            <h3 className="text-white text-center max-w-[800px] mx-auto font-display text-xl sm:text-2xl md:text-[30px] font-normal leading-[1.4] mb-10 drop-shadow-md">
              Boost your bottom line by up to <span className="text-wl-lightGreen font-medium">35%</span> with AI-powered forecasting from ZabonEx – zero integration required
            </h3>
            
            <a href="#contact" className="cta-light shadow-lg mb-16">
              Get started today
            </a>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2.5 mt-16">
              {bgImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setBgIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === bgIndex ? "bg-white/80 scale-110" : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
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
