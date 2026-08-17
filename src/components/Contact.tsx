"use client";

import { Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <>
      {/* Upsell Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-wl-lightGreen rounded-[30px] p-16 flex flex-col items-center justify-center min-h-[350px]">
            <h2 className="text-wl-darkPurple text-center mb-8 max-w-2xl">
              Ready to waste less with ZabonEx?
            </h2>
            <a href="#contact" className="cta-purple">
              Get started today
            </a>
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
              <a href="#" className="text-wl-lightPurpleGrey hover:text-wl-mediumPurple font-display text-base transition-colors">Contact</a>
            </div>
          </div>

          <div className="border-t border-wl-darkPurpleTint2 my-8" />

          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6">
              <a href="#" className="text-white hover:text-wl-lightGreen transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:hello@zabonex.com" className="text-white hover:text-wl-lightGreen transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <div className="text-center">
              <a href="mailto:hello@zabonex.com" className="text-wl-lightPurpleGrey hover:text-white transition-colors">hello@zabonex.com</a>
              <span className="text-wl-lightPurpleGrey mx-2">•</span>
              <span className="text-wl-lightPurpleGrey">(+968) 77706770</span>
              <div className="text-wl-lightPurpleGrey mt-2">© ZabonEx Inc. 2026</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
