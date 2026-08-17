"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Instagram, ArrowUp, ArrowUpRight } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "#home" },
    { name: "Our Solution", href: "#solution" },
    { name: "Benefits", href: "#benefits" },
    { name: "Services", href: "#services" },
  ],
  resources: [
    { name: "Case Studies", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Blog", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative section-bg-alt overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pre-footer CTA band */}
        <div className="pt-16 lg:pt-20">
          <div className="relative ring-gradient rounded-[28px]">
            <div className="rounded-[27px] bg-[var(--bg-surface)] p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="eyebrow mb-3">Stay in the loop</div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-primary tracking-tight text-balance">
                  Get AI insights for{" "}
                  <span className="gradient-text">F&amp;B distribution.</span>
                </h3>
                <p className="mt-3 text-sm text-secondary">
                  Monthly product updates, case studies, and demand-forecasting
                  tips. No spam — ever.
                </p>
              </div>
              <form className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 min-w-0 lg:min-w-[420px]">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 min-w-0 px-5 py-3.5 bg-[var(--bg-secondary)] hairline rounded-full text-primary placeholder:text-[var(--text-muted)] focus:outline-none focus:border-primary-500/60 focus:ring-2 focus:ring-primary-500/20 transition"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Main footer */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.a
                href="#home"
                className="inline-flex items-center gap-2.5 mb-5"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Image
                  src="/logo.svg"
                  alt="ZabonEx Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-2xl font-display font-extrabold gradient-text-static">
                  ZabonEx
                </span>
              </motion.a>

              <p className="text-secondary max-w-sm mb-6 leading-relaxed text-sm">
                Empowering Food &amp; Beverage businesses to sell more and
                waste less through AI-driven predictive analytics.
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 surface rounded-xl text-tertiary hover:text-primary-500 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links */}
            <FooterCol title="Company" links={footerLinks.company} />
            <FooterCol title="Resources" links={footerLinks.resources} />
            <FooterCol title="Legal" links={footerLinks.legal} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-[var(--hairline)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} ZabonEx. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span className="text-xs text-muted">
              Headquartered in Muscat, Oman
            </span>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 surface rounded-xl text-tertiary hover:text-primary-500 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="font-display font-bold text-primary mb-4 text-sm tracking-tight">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-sm text-tertiary hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
