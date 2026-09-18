"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Benefits() {
  const { t } = useLanguage();

  const cases = [
    {
      title: t.benefits.case1,
      image: "/benefits-img1.jpg",
      position: "bg-center"
    },
    {
      title: t.benefits.case2,
      image: "/benefits-img2.jpg",
      position: "bg-bottom" // الصورة مرفوعة للأعلى
    },
    {
      title: t.benefits.case3,
      image: "/image (6).png",
      position: "bg-center"
    }
  ];

  return (
    <section id="benefits" className="py-24 hero-gradient text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-center max-w-2xl leading-tight whitespace-pre-line">
            {t.benefits.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cases.map((c, i) => (
            <a key={i} href="#" className="group block h-[400px]">
              <div
                className={`w-full h-full rounded-[20px] p-6 flex flex-col justify-end relative overflow-hidden bg-cover ${c.position}`}
                style={{ backgroundImage: `url('${c.image}')` }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="relative bg-white/95 rounded-[12px] p-6 min-h-[140px] border border-white/40">
                  <p className="text-[#0C3D5E] font-display font-medium text-xl leading-snug">{c.title}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center">
          <a href="#contact" className="cta-light">
            {t.benefits.readMore}
          </a>
        </div>
      </div>
    </section>
  );
}
