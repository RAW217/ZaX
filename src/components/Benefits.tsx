"use client";

import Image from "next/image";

const cases = [
  {
    title: "Margins soar by 25% at Omani wholesaler with real-time predictions",
    bg: "bg-wl-darkPurpleTint2",
    logo: "/how-it-works/blob-bf1c2f9.png" // placeholder
  },
  {
    title: "ZabonEx AI goes live in 640 stores to optimize fresh sales",
    bg: "bg-wl-mediumPurple",
    logo: "/how-it-works/blob-443ce94.png" // placeholder
  },
  {
    title: "Leading GCC retailer cuts waste by 32%",
    bg: "bg-wl-darkIndigo",
    logo: "/how-it-works/blob-67fd768.png" // placeholder
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 footer-gradient text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-center max-w-2xl leading-tight">
            Small predictive changes,<br />big business-changing results
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cases.map((c, i) => (
            <a key={i} href="#" className="group block h-[400px]">
              <div className={`w-full h-full rounded-[20px] p-6 flex flex-col justify-end relative overflow-hidden bg-cover bg-center ${c.bg}`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="relative bg-white/95 rounded-[12px] p-6 min-h-[140px]">
                  <p className="text-wl-darkIndigo text-xl leading-tight">{c.title}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center">
          <a href="#contact" className="cta-light bg-wl-lightGreen text-wl-darkIndigo">
            Read more case studies
          </a>
        </div>
      </div>
    </section>
  );
}
