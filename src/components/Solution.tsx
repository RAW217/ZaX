"use client";

import { useState } from "react";
import InteractiveChart from "./InteractiveChart";
import { UserPlus, Lock, UploadCloud, Settings, Cpu, BarChart3 } from "lucide-react";
import Image from "next/image";

export default function Solution() {
  const [activeTab, setActiveTab] = useState("Demand Forecasting");

  const tabs = ["Demand Forecasting", "Waste Reduction", "Smart Routing", "Inventory Sync", "Sales Analytics", "Distribution Planning"];

  return (
    <>
      <section id="solution" className="py-24 bg-wl-lightPurpleGrey">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-wl-darkPurple mb-8 text-center max-w-4xl">
            ZabonEx gives you the perfect quantity for that exact moment
          </h2>
          <p className="text-center max-w-3xl mb-14 text-wl-textColor">
            Traditional guessing almost always misses the mark: too little or too much. Using thousands of data points from your own store, ZabonEx AI calculates the precise amounts that will maximize your revenue and minimize your food waste.
          </p>

          <div className="w-full bg-white rounded-[20px] p-8 md:p-12 shadow-sm border border-gray-100">
            <InteractiveChart />
          </div>
        </div>
      </section>

      {/* Setup Flow like Wasteless */}
      <section className="py-24 bg-wl-lightPurpleGrey">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <h3 className="mb-14 text-center max-w-2xl text-[32px] leading-tight">
            ...all that, and it's probably the easiest thing you've ever implemented
          </h3>

          {/* Setup Row */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full mb-16">
            <div className="bg-white rounded-[20px] p-10 shadow-sm flex flex-col items-center w-full max-w-4xl relative overflow-hidden lg:overflow-visible">
              <h4 className="text-[30px] font-medium text-wl-darkIndigo mb-2 relative z-20">Setup</h4>
              <div className="text-wl-darkPurple font-display text-base mb-4 relative z-20">One time • Just a couple of days</div>
              <p className="text-center mb-10 max-w-md text-wl-textColor relative z-20">
                ZabonEx works with your existing systems and hardware, meaning that you can get started almost instantaneously.
              </p>

              <div className="relative flex flex-col sm:flex-row items-center justify-center gap-2 lg:gap-4 w-full py-10">
                {/* Left Image (Man) */}
                <div className="absolute left-[-20px] lg:left-[-60px] top-1/2 -translate-y-1/2 z-0 hidden sm:block">
                  <Image src="/problem-img2.png" alt="Retail" width={320} height={320} className="rounded-full shadow-md border-8 border-white object-cover" />
                </div>
                
                {/* Right Image (Tablet) */}
                <div className="absolute right-[-20px] lg:right-[-60px] top-1/2 -translate-y-1/2 z-0 hidden sm:block">
                  <Image src="/problem-img1.jpg" alt="Shelves" width={320} height={320} className="rounded-full shadow-md border-8 border-white object-cover" />
                </div>

                <div className="bg-wl-lightPurpleGrey/95 backdrop-blur-md rounded-[60px] w-[140px] h-[220px] flex flex-col items-center justify-center p-4 relative z-10 shadow-sm border-2 border-white">
                  <UserPlus className="w-10 h-10 text-wl-darkPurple mb-4" />
                  <div className="font-display text-wl-darkIndigo text-center font-medium">Register</div>
                </div>
                <div className="text-gray-300 hidden sm:block relative z-10 px-2">➔</div>
                <div className="bg-wl-lightPurpleGrey/95 backdrop-blur-md rounded-[60px] w-[140px] h-[220px] flex flex-col items-center justify-center p-4 relative z-10 shadow-sm border-2 border-white">
                  <Lock className="w-10 h-10 text-wl-darkPurple mb-4" />
                  <div className="font-display text-wl-darkIndigo text-center font-medium">Get Access</div>
                </div>
                <div className="text-gray-300 hidden sm:block relative z-10 px-2">➔</div>
                <div className="bg-wl-lightPurpleGrey/95 backdrop-blur-md rounded-[60px] w-[140px] h-[220px] flex flex-col items-center justify-center p-4 relative z-10 shadow-sm border-2 border-white">
                  <UploadCloud className="w-10 h-10 text-wl-darkPurple mb-4" />
                  <div className="font-display text-wl-darkIndigo text-center font-medium leading-tight">Upload Inventory Data</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-16 opacity-30 mix-blend-multiply">
            <Image src="/triple-arrow.png" alt="Next Step" width={60} height={80} className="object-contain invert" />
          </div>
          {/* Prediction Row */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full mb-16">
            <div className="bg-white rounded-[20px] p-10 shadow-sm flex flex-col items-center w-full max-w-4xl relative overflow-hidden lg:overflow-visible">
              

              <h4 className="text-[30px] font-medium text-wl-darkIndigo mb-2 relative z-20">Prediction</h4>
              <div className="text-wl-darkPurple font-display text-base mb-4 relative z-20">Ongoing • Within seconds</div>
              <p className="text-center mb-10 max-w-md text-wl-textColor relative z-20">
                Simply configure, train, and get your predictions. ZabonEx fits right in with your regular routines.
              </p>

              <div className="relative flex flex-col sm:flex-row items-center justify-center gap-2 lg:gap-4 w-full py-10">
                
                {/* Left Side Images */}
                <div className="absolute left-[-20px] lg:left-[-80px] top-0 lg:-top-10 z-0 hidden md:block">
                  <Image src="/prediction-img2.jpg" alt="Prediction UI" width={200} height={200} className="rounded-full shadow-sm border-4 border-white object-cover" />
                </div>
                <div className="absolute left-[20px] lg:left-[-40px] bottom-[-20px] lg:-bottom-20 z-0 hidden md:block">
                  <Image src="/prediction-img3.png" alt="Stats" width={220} height={220} className="rounded-full shadow-sm border-4 border-white object-cover" />
                </div>
                
                {/* Right Side Image */}
                <div className="absolute right-[-20px] lg:right-[-60px] top-0 lg:-top-10 z-0 hidden md:block">
                  <Image src="/prediction-img1.jpg" alt="Success" width={200} height={200} className="rounded-full shadow-sm border-4 border-white object-cover" />
                </div>

                <div className="bg-wl-lightPurple/95 backdrop-blur-md rounded-[60px] w-[140px] h-[220px] flex flex-col items-center justify-center p-4 relative z-10 shadow-sm border-2 border-white">
                  <Settings className="w-10 h-10 text-wl-darkPurple mb-4" />
                  <div className="font-display text-wl-darkIndigo text-center font-medium">Configure</div>
                </div>
                <div className="text-gray-300 hidden sm:block relative z-10 px-2">➔</div>
                <div className="bg-wl-lightPurple/95 backdrop-blur-md rounded-[60px] w-[140px] h-[220px] flex flex-col items-center justify-center p-4 relative z-10 shadow-sm border-2 border-white">
                  <Cpu className="w-10 h-10 text-wl-darkPurple mb-4" />
                  <div className="font-display text-wl-darkIndigo text-center font-bold">ZabonEx AI</div>
                </div>
                <div className="text-gray-300 hidden sm:block relative z-10 px-2">➔</div>
                <div className="bg-wl-lightPurple/95 backdrop-blur-md rounded-[60px] w-[140px] h-[220px] flex flex-col items-center justify-center p-4 relative z-10 shadow-sm border-2 border-white">
                  <BarChart3 className="w-10 h-10 text-wl-darkPurple mb-4" />
                  <div className="font-display text-wl-darkIndigo text-center font-medium">Predict</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-gray-300 text-3xl mb-16">⬇</div>

          <h3 className="mb-14 text-center max-w-2xl text-[32px] leading-tight">
            That's it.<br />And the results are simply transformational.
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 lg:gap-16 mb-16 mt-10">
            <div className="stat-circle relative">
              <div className="absolute -top-4 -right-6 z-10">
                <Image src="/stat-img1.jpg" alt="Hands holding bottle" width={90} height={90} className="rounded-full shadow-md border-4 border-white object-cover" />
              </div>
              <div className="text-white text-[60px] font-medium font-display leading-none mb-2 relative z-20">50%</div>
              <div className="text-white/90 text-center font-display text-base font-light relative z-20">Reduction in<br />food waste</div>
            </div>
            
            <div className="stat-circle relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
                <Image src="/stat-img2.jpg" alt="Shopping cart" width={90} height={90} className="rounded-full shadow-md border-4 border-white object-cover" />
              </div>
              <div className="text-white text-[60px] font-medium font-display leading-none mb-2 relative z-20">20%</div>
              <div className="text-white/90 text-center font-display text-base font-light relative z-20">Increase in<br />revenues</div>
            </div>
            
            <div className="stat-circle relative">
              <div className="absolute -top-4 -right-6 z-10">
                <Image src="/stat-img3.jpg" alt="Man in aisle" width={90} height={90} className="rounded-full shadow-md border-4 border-white object-cover" />
              </div>
              <div className="text-white text-[60px] font-medium font-display leading-none mb-2 relative z-20">9%</div>
              <div className="text-white/90 text-center font-display text-base font-light relative z-20">Improvement<br />in margins</div>
            </div>
          </div>

          <a href="#contact" className="cta-purple">Get started today</a>
        </div>
      </section>

      <section className="bg-white py-24 relative overflow-hidden">
        {/* Dotted Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-15 bg-[radial-gradient(#5a64d8_2px,transparent_2px)] bg-[length:24px_24px]"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex justify-center mb-16">
            <h2 className="text-[40px] text-wl-textColor">A solution for every challenge</h2>
          </div>
          
          <div className="w-full">
            <div className="flex overflow-x-auto whitespace-nowrap border-b border-gray-200 mb-10 pb-1" style={{ scrollbarWidth: 'none' }}>
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 md:px-6 py-4 font-display text-base md:text-[17px] transition-colors ${activeTab === tab ? 'bg-wl-lightPurpleGrey text-wl-darkIndigo font-medium rounded-t-lg border-b-2 border-wl-darkPurple' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-8 bg-wl-lightPurpleGrey rounded-b-[20px] rounded-tr-[20px]">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <div className="text-wl-darkPurple font-display text-lg font-medium mb-2">{activeTab}</div>
                  <h2 className="text-wl-darkIndigo text-[32px] mb-6">Let data drive your distribution strategy</h2>
                  <p className="text-wl-textColor mb-8">
                    ZabonEx continuously analyzes customer sensitivity, sell-out patterns, waste events, and effectiveness to deliver optimized, profit-driven decisions automatically, moving beyond manual guesswork.
                  </p>
                  <a href="#contact" className="cta-purple">Learn more</a>
                </div>
                <div className="bg-white rounded-xl h-[300px] shadow-sm flex items-center justify-center">
                  <span className="text-gray-400 font-display">Dashboard Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
