"use client";

import Image from "next/image";
import { ExternalLink, Newspaper, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NewsSection() {
  const { t, lang } = useLanguage();

  return (
    <section id="news" className="py-24 bg-[#F8FAFC] border-t border-[#D2E9F9]/60">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Badge & Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block bg-[#F0F2F5] rounded-full px-5 py-1.5 mb-4">
            <span className="text-[#0A72C4] font-display text-xs font-semibold uppercase tracking-wider">
              {t.benefits.newsBadge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl text-[#17679E] font-medium font-display">
            {t.benefits.newsTitle}
          </h2>
        </div>

        {/* Featured News Card */}
        <div className="bg-white rounded-[24px] overflow-hidden shadow-lg border border-[#BFDCF0]/50 hover:shadow-xl transition-shadow flex flex-col lg:flex-row">
          {/* Image Container */}
          <div className="lg:w-1/2 relative min-h-[280px] sm:min-h-[340px] bg-[#0C3D5E] flex items-center justify-center p-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0C3D5E] via-[#0A72C4]/40 to-transparent z-10 opacity-75" />
            <Image
              src="/madayn-gulfood.jpg"
              alt="Madayn & ZabonEx at Gulfood 2026"
              fill
              style={{ objectFit: 'cover', objectPosition: '20% 0%' }}
              className="transform hover:scale-105 transition-transform duration-500"
            />
            {/* Tag Badge over image */}
            <div className="absolute top-6 left-6 z-20 bg-[#0C3D5E]/85 backdrop-blur-sm text-[#99ff99] text-xs font-display font-medium px-4 py-1.5 rounded-full border border-white/20 flex items-center gap-2">
              <Newspaper className="w-3.5 h-3.5" />
              <span>{t.benefits.madaynTag}</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-gray-500 font-display mb-4">
                <Calendar className="w-4 h-4 text-[#0A72C4]" />
                <span>{lang === "ar" ? "28 يناير 2026" : "January 28, 2026"}</span>
                <span className="mx-1">•</span>
                <span className="font-semibold text-[#0C3D5E]">{lang === "ar" ? "مؤسسة مدائن" : "Madayn Official"}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#0C3D5E] leading-snug mb-4">
                {t.benefits.madaynTitle}
              </h3>

              <p className="text-gray-600 font-display text-base sm:text-lg leading-relaxed mb-6">
                {t.benefits.madaynDesc}
              </p>
            </div>

            <div>
              <a
                href="https://madayn.om/madayn-records-ro-272-million-investments-in-food-sector/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0C3D5E] hover:bg-[#08293F] text-white font-display text-sm font-medium transition-all shadow-md hover:shadow-lg group"
              >
                <span>{t.benefits.readArticle}</span>
                <ExternalLink className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
