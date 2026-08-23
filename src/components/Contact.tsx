"use client";

import { useState } from "react";
import { Linkedin, Mail, Phone, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "b5bcef87-d6c9-49eb-a4e8-a254975fc543",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact Request from ${formData.name}`,
          from_name: "ZabonEx Website"
        })
      });

      const json = await res.json();
      if (json.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <>
      {/* Upsell Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-wl-lightGreen rounded-[24px] py-12 px-8 sm:px-12 flex flex-col items-center justify-center min-h-[160px]">
            <h3 className="text-wl-darkPurple text-center mb-8">
              Ready to waste less with ZabonEx?
            </h3>
            <a href="#contact" className="cta-purple whitespace-nowrap">
              Get started today
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="bg-wl-lightPurpleGrey py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-[40px] text-wl-darkIndigo mb-6">Get in touch</h2>
              <p className="text-wl-textColor mb-10 max-w-md">
                Have questions about how ZabonEx can optimize your inventory and reduce waste? Send us a message and our team will get back to you shortly.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Mail className="w-5 h-5 text-wl-darkPurple" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-display">Email us at</div>
                    <a href="mailto:inquiries@zabonex.com" className="text-wl-darkIndigo font-medium hover:text-wl-mediumPurple transition-colors">inquiries@zabonex.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Phone className="w-5 h-5 text-wl-darkPurple" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-display">Call us</div>
                    <a href="tel:+96877706770" className="text-wl-darkIndigo font-medium hover:text-wl-mediumPurple transition-colors">+968 7770 6770</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-[20px] p-8 sm:p-10 shadow-sm border border-gray-100">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-display text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-wl-darkPurple focus:ring-1 focus:ring-wl-darkPurple transition-colors bg-gray-50 focus:bg-white"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-display text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-wl-darkPurple focus:ring-1 focus:ring-wl-darkPurple transition-colors bg-gray-50 focus:bg-white"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-display text-gray-700 mb-2">Your Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-wl-darkPurple focus:ring-1 focus:ring-wl-darkPurple transition-colors bg-gray-50 focus:bg-white resize-none"
                    placeholder="Tell us about your needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="cta-purple w-full text-center mt-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-xl border border-green-200 text-center font-medium">
                    Message sent successfully! We will get back to you soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 text-center font-medium">
                    Something went wrong. Please try again or email us directly.
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
              <a href="#" className="text-wl-lightPurpleGrey hover:text-wl-mediumPurple font-display text-base transition-colors">Home</a>
              <a href="#" className="text-wl-lightPurpleGrey hover:text-wl-mediumPurple font-display text-base transition-colors">About</a>
            </div>

            <div className="flex flex-col md:text-right gap-3">
              <a href="#" className="text-wl-lightPurpleGrey hover:text-wl-mediumPurple font-display text-base transition-colors">Success Stories</a>
              <a href="#" className="text-wl-lightPurpleGrey hover:text-wl-mediumPurple font-display text-base transition-colors">News</a>
              <a href="#contact" className="text-wl-lightPurpleGrey hover:text-wl-mediumPurple font-display text-base transition-colors">Contact</a>
            </div>
          </div>

          <div className="border-t border-wl-darkPurpleTint2 my-8" />

          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/company/zabonex/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-white hover:text-wl-lightGreen transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/zabonex.io/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-wl-lightGreen transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/people/ZabonEx/100090619776003/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-wl-lightGreen transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/ZabonEx" target="_blank" rel="noopener noreferrer" className="text-white hover:text-wl-lightGreen transition-colors flex items-center justify-center">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCEh4jAegYvvppSA4gIzw0ag" target="_blank" rel="noopener noreferrer" className="text-white hover:text-wl-lightGreen transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="mailto:inquiries@zabonex.com" className="text-white hover:text-wl-lightGreen transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <div className="text-center">
              <a href="mailto:inquiries@zabonex.com" className="text-wl-lightPurpleGrey hover:text-white transition-colors">inquiries@zabonex.com</a>
              <span className="text-wl-lightPurpleGrey mx-2">•</span>
              <span className="text-wl-lightPurpleGrey">+968 7770 6770</span>
              <div className="text-wl-lightPurpleGrey mt-2">© ZabonEx Inc. 2026</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
