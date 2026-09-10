"use client";

import { useState } from "react";
import { Linkedin, Mail, Phone, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        })
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 6000);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <>
      {/* Upsell Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-[#BFDCF0] border border-[#86B3D1]/40 rounded-[24px] py-12 px-8 sm:px-12 flex flex-col items-center justify-center min-h-[160px]">
            <h3 className="text-[#0C3D5E] text-center mb-8 font-display text-2xl sm:text-3xl font-medium">
              {t.contact.upsellTitle}
            </h3>
            <a href="#contact" className="cta-purple whitespace-nowrap">
              {t.contact.upsellCta}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="bg-[#F4FAFD] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-[40px] text-[#0C3D5E] mb-6">{t.contact.title}</h2>
              <p className="text-[#0C3D5E]/80 mb-10 max-w-md">
                {t.contact.description}
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#D2E9F9]">
                    <Mail className="w-5 h-5 text-[#0A72C4]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#4E8CB8] font-display">{t.contact.emailUs}</div>
                    <a href="mailto:inquiries@zabonex.com" className="text-[#0C3D5E] font-medium hover:text-[#0A72C4] transition-colors">inquiries@zabonex.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#D2E9F9]">
                    <Phone className="w-5 h-5 text-[#0A72C4]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#4E8CB8] font-display">{t.contact.callUs}</div>
                    <a href="tel:+96877706770" className="text-[#0C3D5E] font-medium hover:text-[#0A72C4] transition-colors dir-ltr inline-block">+968 7770 6770</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-[20px] p-8 sm:p-10 shadow-sm border border-[#D2E9F9]">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-display text-[#0C3D5E] mb-2 font-medium">{t.contact.fullName}</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#BFDCF0] focus:outline-none focus:border-[#0A72C4] focus:ring-1 focus:ring-[#0A72C4] transition-colors bg-[#F4FAFD] focus:bg-white text-[#0C3D5E]"
                    placeholder={t.contact.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-display text-[#0C3D5E] mb-2 font-medium">{t.contact.emailAddress}</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#BFDCF0] focus:outline-none focus:border-[#0A72C4] focus:ring-1 focus:ring-[#0A72C4] transition-colors bg-[#F4FAFD] focus:bg-white text-[#0C3D5E]"
                    placeholder={t.contact.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-display text-[#0C3D5E] mb-2 font-medium">{t.contact.yourMessage}</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-[#BFDCF0] focus:outline-none focus:border-[#0A72C4] focus:ring-1 focus:ring-[#0A72C4] transition-colors bg-[#F4FAFD] focus:bg-white text-[#0C3D5E] resize-none"
                    placeholder={t.contact.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="cta-purple w-full text-center mt-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? t.contact.sending : t.contact.send}
                </button>

                {status === "success" && (
                  <div className="p-4 bg-[#E4F4EC] text-[#12855F] rounded-xl border border-[#B7E4CE] text-center font-medium">
                    {t.contact.successMsg}
                  </div>
                )}
                {status === "error" && (
                  <div className="p-4 bg-[#FCF1DC] text-[#B77708] rounded-xl border border-[#F5DCA6] text-center font-medium">
                    {t.contact.errorMsg}
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-gradient pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <span className="text-2xl font-display font-semibold text-white tracking-wide">
                ZabonEx
              </span>
            </div>
            
            <div className="flex flex-col md:text-right gap-3">
              <a href="/#home" className="text-[#BFDCF0] hover:text-white font-display text-base transition-colors">{t.contact.home}</a>
              <a href="/about" className="text-[#BFDCF0] hover:text-white font-display text-base transition-colors">{t.contact.about}</a>
            </div>

            <div className="flex flex-col md:text-right gap-3">
              <a href="/#benefits" className="text-[#BFDCF0] hover:text-white font-display text-base transition-colors">{t.contact.successStories}</a>
              <a href="/#contact" className="text-[#BFDCF0] hover:text-white font-display text-base transition-colors">{t.contact.contactLink}</a>
            </div>
          </div>

          <div className="border-t border-[#17679E] my-8" />

          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/company/zabonex/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-[#BFDCF0] hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/zabonex.io/" target="_blank" rel="noopener noreferrer" className="text-[#BFDCF0] hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/people/ZabonEx/100090619776003/" target="_blank" rel="noopener noreferrer" className="text-[#BFDCF0] hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/ZabonEx" target="_blank" rel="noopener noreferrer" className="text-[#BFDCF0] hover:text-white transition-colors flex items-center justify-center">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCEh4jAegYvvppSA4gIzw0ag" target="_blank" rel="noopener noreferrer" className="text-[#BFDCF0] hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="mailto:inquiries@zabonex.com" className="text-[#BFDCF0] hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <p className="text-[#86B3D1] text-sm">
              &copy; {new Date().getFullYear()} ZabonEx. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
