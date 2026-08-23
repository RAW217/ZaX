"use client";

import { useState } from "react";
import InteractiveChart from "./InteractiveChart";
import { UserPlus, Lock, UploadCloud, Settings, Cpu, BarChart3, BarChart2, Droplet, ShoppingCart, PieChart, Thermometer, Gauge, Smartphone, FileText, ShoppingBasket, Beef, Microscope, Receipt } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const floatingIcons = [
  // Left side
  { icon: BarChart2, delay: 0.1, x: -380, y: -100, size: 100 },
  { icon: Droplet, delay: 0.2, x: -480, y: -30, size: 70 },
  { icon: ShoppingCart, delay: 0.3, x: -550, y: 40, size: 60 },
  { icon: PieChart, delay: 0.4, x: -460, y: 120, size: 80 },
  { icon: Thermometer, delay: 0.5, x: -350, y: 80, size: 110 },
  { icon: Gauge, delay: 0.6, x: -400, y: 200, size: 60 },
  
  // Right side
  { icon: Smartphone, delay: 0.1, x: 380, y: -100, size: 110 },
  { icon: FileText, delay: 0.2, x: 480, y: -20, size: 80 },
  { icon: ShoppingBasket, delay: 0.3, x: 550, y: 50, size: 60 },
  { icon: Beef, delay: 0.4, x: 450, y: 100, size: 70 },
  { icon: Microscope, delay: 0.5, x: 500, y: 190, size: 90 },
  { icon: Receipt, delay: 0.6, x: 370, y: 170, size: 60 },
];

export default function Solution() {
  const [activeTab, setActiveTab] = useState("Demand Forecasting");

  const tabs = ["Demand Forecasting", "Waste Reduction", "Smart Routing", "Inventory Sync", "Sales Analytics", "Distribution Planning"];

  return (
    <>
      <section id="solution" className="pt-24 pb-10 bg-wl-lightPurpleGrey overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-wl-darkPurple mb-8 text-center max-w-4xl">
            ZabonEx gives you the perfect quantity for that exact moment
          </h2>
          <p className="text-center max-w-3xl mb-14 text-wl-textColor">
            Traditional guessing almost always misses the mark: too little or too much. Using thousands of data points from your own store, ZabonEx AI calculates the precise amounts that will maximize your revenue and minimize your food waste.
          </p>

          <div className="relative w-full flex justify-center items-center pt-10 pb-4 lg:pt-20 lg:pb-4 min-h-[400px] mb-12">
            {floatingIcons.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.2, x: 0, y: 0 }}
                whileInView={{ opacity: 1, scale: 1, x: item.x, y: item.y }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: item.delay, type: "spring", bounce: 0.3 }}
                className="absolute bg-white/70 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center justify-center border border-wl-lightPurpleGrey z-0 hidden lg:flex"
                style={{ width: item.size, height: item.size }}
              >
                <item.icon className="text-wl-mediumPurple opacity-80" style={{ width: item.size * 0.4, height: item.size * 0.4 }} />
              </motion.div>
            ))}

            <div className="w-full max-w-3xl bg-white rounded-[20px] p-6 md:p-8 shadow-md border border-gray-100 relative z-10">
              <InteractiveChart />
            </div>
          </div>

          <h3 className="mb-10 text-center max-w-2xl text-[32px] leading-tight">
            ...all that, and it's probably the easiest thing you've ever implemented
          </h3>

          {/* Setup Row */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full mb-8">
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
                <div className="hidden sm:block relative z-10 px-4">
                  <svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L18 18L0 36V0Z" fill="currentColor" className="text-wl-mediumPurple opacity-50" />
                  </svg>
                </div>
                <div className="bg-wl-lightPurpleGrey/95 backdrop-blur-md rounded-[60px] w-[140px] h-[220px] flex flex-col items-center justify-center p-4 relative z-10 shadow-sm border-2 border-white">
                  <Lock className="w-10 h-10 text-wl-darkPurple mb-4" />
                  <div className="font-display text-wl-darkIndigo text-center font-medium">Get Access</div>
                </div>
                <div className="hidden sm:block relative z-10 px-4">
                  <svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L18 18L0 36V0Z" fill="currentColor" className="text-wl-mediumPurple opacity-50" />
                  </svg>
                </div>
                <div className="bg-wl-lightPurpleGrey/95 backdrop-blur-md rounded-[60px] w-[140px] h-[220px] flex flex-col items-center justify-center p-4 relative z-10 shadow-sm border-2 border-white">
                  <UploadCloud className="w-10 h-10 text-wl-darkPurple mb-4" />
                  <div className="font-display text-wl-darkIndigo text-center font-medium">Upload Data</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full mb-6">
            <Image src="/triple-arrow.png" alt="Transition" width={80} height={80} className="invert opacity-30 mix-blend-multiply" />
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
                <div className="hidden sm:block relative z-10 px-4">
                  <svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L18 18L0 36V0Z" fill="currentColor" className="text-wl-mediumPurple opacity-50" />
                  </svg>
                </div>
                <div className="bg-wl-lightPurple/95 backdrop-blur-md rounded-[60px] w-[140px] h-[220px] flex flex-col items-center justify-center p-4 relative z-10 shadow-sm border-2 border-white">
                  <Cpu className="w-10 h-10 text-wl-darkPurple mb-4" />
                  <div className="font-display text-wl-darkIndigo text-center font-bold">ZabonEx AI</div>
                </div>
                <div className="hidden sm:block relative z-10 px-4">
                  <svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L18 18L0 36V0Z" fill="currentColor" className="text-wl-mediumPurple opacity-50" />
                  </svg>
                </div>
                <div className="bg-wl-lightPurple/95 backdrop-blur-md rounded-[60px] w-[140px] h-[220px] flex flex-col items-center justify-center p-4 relative z-10 shadow-sm border-2 border-white">
                  <BarChart3 className="w-10 h-10 text-wl-darkPurple mb-4" />
                  <div className="font-display text-wl-darkIndigo text-center font-medium">Predict</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center w-full mb-6">
            <Image src="/triple-arrow.png" alt="Transition" width={80} height={80} className="invert opacity-30 mix-blend-multiply" />
          </div>

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
