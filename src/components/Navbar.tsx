"use client";

import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const navLinks = [
    { name: t.nav.solutions, href: "/#solution" },
    { name: t.nav.successStories, href: "/#benefits" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.contact, href: "/#contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <Image 
              src="/logo.svg" 
              alt="ZabonEx Logo" 
              width={32} 
              height={32} 
              className="brightness-0 invert w-8 h-8"
            />
            <span className="text-2xl font-display font-semibold text-white tracking-wide">
              ZabonEx
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-display text-white hover:text-[#D2E9F9] transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white text-sm font-display font-medium transition-all backdrop-blur-sm"
              title={lang === "en" ? "التبديل إلى العربية" : "Switch to English"}
            >
              <Globe className="w-4 h-4 text-[#D2E9F9]" />
              <span>{t.nav.langSwitch}</span>
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-display font-medium border border-white/20"
            >
              <Globe className="w-3.5 h-3.5 text-[#D2E9F9]" />
              <span>{t.nav.langSwitch}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-[#0C3D5E] absolute top-full left-0 right-0 shadow-lg border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-display text-white hover:text-[#D2E9F9] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
