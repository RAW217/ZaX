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

const ProductCard = ({ name, image, status }: { name: string, image: string, status: string }) => (
  <div className="flex flex-col bg-white rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100 w-[180px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-shadow">
    <div className="h-[140px] bg-white flex flex-col items-center justify-center relative overflow-hidden group p-2">
      <div className="absolute inset-0 bg-wl-darkPurple/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
      <img src={image} alt={name} className="w-full h-full object-contain transform transition-transform group-hover:scale-105" />
    </div>
    <div className="p-3 text-center bg-white border-t border-gray-50 relative z-20">
      <div className="font-display font-bold text-gray-800 text-base leading-tight mb-2">{name}</div>
      <div className="text-wl-darkPurple font-bold text-[10px] uppercase tracking-wide bg-wl-lightPurple inline-block px-2 py-1 rounded-md">{status}</div>
    </div>
  </div>
);

export default function Hero() {
  return (
    <>
      <section id="home" className="hero-gradient min-h-[700px] sm:min-h-[750px] md:min-h-[800px] pt-32 pb-48 md:pb-64 relative flex items-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 w-full relative z-10 mb-20 md:mb-32">
          <div className="flex flex-col items-center mt-14">
            <h1 className="text-white text-center font-display text-[45px] sm:text-[60px] md:text-[75px] font-medium leading-[1.1] mb-6">
              Predict demand. Grow margins.
            </h1>
            
            <h3 className="text-white text-center max-w-[800px] mx-auto font-display text-xl sm:text-2xl md:text-[30px] font-normal leading-[1.4] mb-10">
              products distribution and stocks availability up to <span className="text-[#12855F] font-bold">35%</span> – ZabonEx
            </h3>
            
            <a href="#contact" className="cta-light relative z-50">
              Get started today
            </a>
          </div>
        </div>

        {/* Floating Product Cards Container */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-[40px] sm:-bottom-[60px] w-full min-w-[1000px] max-w-[1600px] h-[300px] z-30 pointer-events-auto flex justify-center items-end">
          <div className="relative w-full h-full">
            {/* Card 1 */}
            <div className="absolute left-[5%] bottom-[30px] -rotate-[8deg] z-10 transform transition-transform duration-300 hover:-translate-y-20 hover:rotate-0 hover:z-50 cursor-pointer hidden xl:block">
              <ProductCard name="Fresh Milk" image="/milk.jpg" status="Stock: Optimal" />
            </div>
            {/* Card 2 */}
            <div className="absolute left-[17%] bottom-[60px] -rotate-[4deg] z-20 transform transition-transform duration-300 hover:-translate-y-20 hover:rotate-0 hover:z-50 cursor-pointer hidden lg:block">
              <ProductCard name="Olive Oil" image="/oil.jpg" status="Demand: High" />
            </div>
            {/* Card 3 */}
            <div className="absolute left-[29%] bottom-[20px] rotate-[3deg] z-30 transform transition-transform duration-300 hover:-translate-y-20 hover:rotate-0 hover:z-50 cursor-pointer hidden sm:block">
              <ProductCard name="Pure Sugar" image="/sugar.jpg" status="Stock: Low" />
            </div>
            {/* Card 4 */}
            <div className="absolute left-[41%] bottom-[50px] -rotate-[5deg] z-40 transform transition-transform duration-300 hover:-translate-y-20 hover:rotate-0 hover:z-50 cursor-pointer">
              <ProductCard name="Bakery Flour" image="/flour.jpg" status="Stock: Optimal" />
            </div>
            {/* Card 5 */}
            <div className="absolute left-[53%] bottom-[70px] rotate-[4deg] z-30 transform transition-transform duration-300 hover:-translate-y-20 hover:rotate-0 hover:z-50 cursor-pointer">
              <ProductCard name="Penne Pasta" image="/pasta.jpg" status="Waste: Reduced" />
            </div>
            {/* Card 6 */}
            <div className="absolute left-[65%] bottom-[30px] -rotate-[2deg] z-20 transform transition-transform duration-300 hover:-translate-y-20 hover:rotate-0 hover:z-50 cursor-pointer hidden sm:block">
              <ProductCard name="Greek Yogurt" image="/yogurt.jpg" status="Demand: High" />
            </div>
            {/* Card 7 */}
            <div className="absolute left-[77%] bottom-[50px] rotate-[6deg] z-10 transform transition-transform duration-300 hover:-translate-y-20 hover:rotate-0 hover:z-50 cursor-pointer hidden lg:block">
              <ProductCard name="Tomatoes" image="/tomatoes.jpg" status="Stock: Low" />
            </div>
            {/* Card 8 */}
            <div className="absolute left-[88%] bottom-[20px] rotate-[3deg] z-20 transform transition-transform duration-300 hover:-translate-y-20 hover:rotate-0 hover:z-50 cursor-pointer hidden xl:block">
              <ProductCard name="Biscuits" image="/biscuits.jpg" status="Stock: Optimal" />
            </div>
          </div>
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
