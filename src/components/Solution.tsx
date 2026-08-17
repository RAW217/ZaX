"use client";

import { useState } from "react";
import InteractiveChart from "./InteractiveChart";

export default function Solution() {
  const [activeTab, setActiveTab] = useState("Markdowns");

  const tabs = ["Smart Predictions", "Rotation Calendar", "Date Checks", "Waste Tracking", "Insights"];

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
            <div className="bg-white rounded-[20px] p-10 shadow-sm flex flex-col items-center w-full max-w-3xl">
              <h4 className="text-[30px] font-medium text-wl-darkIndigo mb-2">Setup</h4>
              <div className="text-wl-darkPurple font-display text-base mb-4">One time • Just a couple of days</div>
              <p className="text-center mb-10 max-w-md text-wl-textColor">
                ZabonEx works with your existing systems and hardware, meaning that you can get started almost instantaneously.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="bg-wl-lightPurpleGrey/80 rounded-full w-[120px] h-[160px] flex flex-col items-center justify-center p-4">
                  <div className="font-display text-wl-darkIndigo text-center mt-2">Register</div>
                </div>
                <div className="text-gray-300 hidden sm:block">➔</div>
                <div className="bg-wl-lightPurpleGrey/80 rounded-full w-[120px] h-[160px] flex flex-col items-center justify-center p-4">
                  <div className="font-display text-wl-darkIndigo text-center mt-2">Get Access</div>
                </div>
                <div className="text-gray-300 hidden sm:block">➔</div>
                <div className="bg-wl-lightPurpleGrey/80 rounded-full w-[120px] h-[160px] flex flex-col items-center justify-center p-4">
                  <div className="font-display text-wl-darkIndigo text-center mt-2">Upload Data</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-gray-300 text-3xl mb-16">⬇</div>

          {/* Prediction Row */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full mb-16">
            <div className="bg-white rounded-[20px] p-10 shadow-sm flex flex-col items-center w-full max-w-3xl">
              <h4 className="text-[30px] font-medium text-wl-darkIndigo mb-2">Prediction</h4>
              <div className="text-wl-darkPurple font-display text-base mb-4">Ongoing • Within seconds</div>
              <p className="text-center mb-10 max-w-md text-wl-textColor">
                Simply configure, train, and get your predictions. ZabonEx fits right in with your regular routines.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="bg-wl-lightPurple rounded-full w-[120px] h-[160px] flex flex-col items-center justify-center p-4">
                  <div className="font-display text-wl-darkIndigo text-center mt-2">Configure</div>
                </div>
                <div className="text-gray-300 hidden sm:block">➔</div>
                <div className="bg-wl-lightPurple rounded-full w-[120px] h-[160px] flex flex-col items-center justify-center p-4">
                  <div className="font-display text-wl-darkIndigo text-center mt-2 font-bold">ZabonEx AI</div>
                </div>
                <div className="text-gray-300 hidden sm:block">➔</div>
                <div className="bg-wl-lightPurple rounded-full w-[120px] h-[160px] flex flex-col items-center justify-center p-4">
                  <div className="font-display text-wl-darkIndigo text-center mt-2">Predict</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-gray-300 text-3xl mb-16">⬇</div>

          <h3 className="mb-14 text-center max-w-2xl text-[32px] leading-tight">
            That's it.<br />And the results are simply transformational.
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 lg:gap-16 mb-16">
            <div className="stat-circle">
              <div className="text-wl-darkIndigo text-[60px] font-medium font-display leading-none mb-2">50%</div>
              <div className="text-wl-darkIndigo text-center font-display text-base font-light">Reduction in<br />food waste</div>
            </div>
            
            <div className="stat-circle">
              <div className="text-wl-darkIndigo text-[60px] font-medium font-display leading-none mb-2">20%</div>
              <div className="text-wl-darkIndigo text-center font-display text-base font-light">Increase in<br />revenues</div>
            </div>
            
            <div className="stat-circle">
              <div className="text-wl-darkIndigo text-[60px] font-medium font-display leading-none mb-2">9.1%</div>
              <div className="text-wl-darkIndigo text-center font-display text-base font-light">Improvement<br />in margins</div>
            </div>
          </div>

          <a href="#contact" className="cta-purple">Get started today</a>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center mb-16">
            <h2 className="text-[40px] text-wl-textColor">A solution for every challenge</h2>
          </div>
          
          <div className="w-full">
            <div className="flex flex-wrap border-b border-gray-200 mb-10">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-display text-lg transition-colors ${activeTab === tab ? 'bg-wl-lightPurpleGrey text-wl-darkIndigo font-medium rounded-t-lg border-b-2 border-wl-darkPurple' : 'text-gray-500 hover:bg-gray-50'}`}
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
