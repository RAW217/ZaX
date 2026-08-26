"use client";

import { Trash2, TrendingDown } from "lucide-react";
import Image from "next/image";

export default function Problem() {
  return (
    <section id="problem" className="py-24 bg-white bg-[url('/how-it-works/wasteless-bg-noise.png')] bg-[length:100px] text-wl-textColor">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col items-center mb-16">
          <div className="bg-wl-lightPurple rounded-[30px] px-6 py-3 mb-6">
            <span className="text-wl-darkIndigo font-display text-xl font-medium">The Problem</span>
          </div>
          <h2 className="text-center max-w-3xl text-wl-darkPurple leading-tight">
            Waste & poor inventory decisions cost F&B businesses <span className="text-wl-red">9%</span> of revenue
          </h2>
        </div>

        <div className="flex justify-center -mb-2 -mt-6 relative z-0">
          <Image 
            src="/split-arrow.png" 
            alt="Splits into two causes" 
            width={160} 
            height={160} 
            className="object-contain opacity-80" 
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-10 mt-2">
          
          <div className="flex flex-col items-start w-full lg:w-1/2">
            <div className="bg-white rounded-full w-[60px] h-[60px] flex items-center justify-center -mb-8 -ml-3 relative z-20 shadow-sm border border-gray-100">
              <Trash2 className="text-wl-mediumPurple w-7 h-7" />
            </div>
            <div className="bg-white rounded-[20px] w-full shadow-sm border border-gray-100 h-full relative overflow-hidden flex flex-col">
              <div className="w-full h-48 sm:h-64 relative">
                <Image src="/problem-img1.jpg" alt="Expired stock" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-wl-darkPurple font-display text-2xl font-medium mb-4">5% disappears into expired stock</h3>
                <p className="text-wl-textColor">
                  Disposing of almost-expired products is costly, harmful to the environment, and widely disliked by customers.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start w-full lg:w-1/2">
            <div className="bg-white rounded-full w-[60px] h-[60px] flex items-center justify-center -mb-8 -ml-3 relative z-20 shadow-sm border border-gray-100">
              <TrendingDown className="text-wl-mediumPurple w-7 h-7" />
            </div>
            <div className="bg-white rounded-[20px] w-full shadow-sm border border-gray-100 h-full relative overflow-hidden flex flex-col">
              <div className="w-full h-48 sm:h-64 relative">
                <Image src="/problem-img2.jpg" alt="Lost to guesswork" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-wl-darkPurple font-display text-2xl font-medium mb-4">4% is lost to guesswork</h3>
                <p className="text-wl-textColor">
                  Guesswork on shelf quantities drives lost sales opportunities, missed revenue, and inefficient operations.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
