"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Recycle,
  Database,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Customer Orientation",
    description:
      "Help FMCG businesses understand the demand and preferences of their target customers.",
    features: [
      "Customer behavior analysis",
      "Demand pattern recognition",
      "Preference mapping",
      "Market trend insights",
    ],
    color: "from-primary-500 to-blue-500",
    tint: "bg-primary-500/10",
    accent: "text-primary-500",
  },
  {
    icon: Recycle,
    title: "Transforming F&B Waste",
    description:
      "Promote eco-friendly practices, reduce carbon footprints, and ensure a sustainable future.",
    features: [
      "Waste reduction strategies",
      "Sustainability reporting",
      "Carbon footprint tracking",
      "Eco-friendly recommendations",
    ],
    color: "from-accent-500 to-emerald-500",
    tint: "bg-accent-500/10",
    accent: "text-accent-500",
  },
  {
    icon: Database,
    title: "Data Integration",
    description:
      "Integrate sub-component systems into one functional platform with seamless communication.",
    features: [
      "API integrations",
      "Real-time data sync",
      "Legacy system support",
      "Custom connectors",
    ],
    color: "from-violet-500 to-purple-500",
    tint: "bg-violet-500/10",
    accent: "text-violet-500",
  },
];

const partners = [
  "ERP Systems",
  "POS Systems",
  "Warehouse Management",
  "E-commerce Platforms",
  "Analytics Tools",
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 overflow-hidden section-bg-alt"
    >
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div
        ref={ref}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-violet-500">
              <Database className="w-3.5 h-3.5 text-white" />
            </span>
            <span className="text-xs font-semibold text-violet-600 dark:text-violet-300 tracking-[0.18em] uppercase">
              Our Services
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-primary mb-6 tracking-tight text-balance">
            Comprehensive solutions for
            <br />
            <span className="gradient-text">your F&amp;B business.</span>
          </h2>

          <p className="text-lg text-secondary max-w-2xl mx-auto text-pretty">
            Beyond predictions, we offer a complete suite of services to help
            you optimize every aspect of your food and beverage operations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * index, duration: 0.5 }}
              className="group"
            >
              <div className="relative surface-lift rounded-[24px] p-8 h-full overflow-hidden">
                {/* Ambient corner */}
                <div
                  className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br ${service.color} opacity-[0.08] blur-3xl`}
                />

                {/* Icon */}
                <div
                  className={`relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} mb-6 shadow-lg`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="relative text-2xl font-display font-bold text-primary mb-3 tracking-tight flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 text-[var(--text-muted)] opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </h3>

                <p className="relative text-secondary mb-7 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="relative space-y-2.5 pt-5 border-t border-[var(--hairline)]">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2
                        className={`w-4 h-4 flex-shrink-0 ${service.accent}`}
                      />
                      <span className="text-sm text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <span className="eyebrow">
              Seamless integration with your existing systems
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 lg:gap-4">
            {partners.map((partner) => (
              <div
                key={partner}
                className="px-5 py-2.5 surface rounded-full text-sm text-tertiary hover:text-primary hover:border-primary-500/40 transition-colors cursor-default"
              >
                {partner}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
