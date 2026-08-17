"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  TrendingUp,
  Leaf,
  Route,
  PackageCheck,
  BarChart3,
  Network,
  ArrowRight,
  Lightbulb,
} from "lucide-react";

const tabs = [
  {
    id: "forecasting",
    label: "Demand Forecasting",
    icon: TrendingUp,
    color: "from-blue-500 to-indigo-500",
    accentColor: "text-blue-500",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/10",
    title: "Predict demand before it happens",
    subtitle: "Let AI eliminate guesswork from your orders",
    description:
      "ZabonEx analyzes historical sales, seasonal trends, and external signals to generate store-level quantity forecasts. Your sales team gets actionable numbers — not spreadsheets to guess from.",
    cta: "See forecasting in action",
    visual: (
      <div className="space-y-3">
        {[
          { store: "Store A – Al Olaya", units: 320, pct: 85, trend: "+12%" },
          { store: "Store B – Tahlia", units: 210, pct: 56, trend: "+5%" },
          { store: "Store C – King Fahd", units: 410, pct: 100, trend: "+18%" },
          { store: "Store D – Sitteen", units: 155, pct: 40, trend: "-3%" },
        ].map((row, i) => (
          <div key={i}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-secondary">{row.store}</span>
              <span className="font-semibold text-primary">
                {row.units} units{" "}
                <span
                  className={
                    row.trend.startsWith("+")
                      ? "text-emerald-500"
                      : "text-rose-500"
                  }
                >
                  {row.trend}
                </span>
              </span>
            </div>
            <div className="h-2 rounded-full bg-[var(--bg-tertiary)] overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                style={{ width: `${row.pct}%` }}
              />
            </div>
          </div>
        ))}
        <div className="mt-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center gap-3">
          <TrendingUp className="w-5 h-5 text-blue-500 flex-shrink-0" />
          <span className="text-sm text-secondary">
            AI confidence:{" "}
            <span className="font-bold text-primary">94%</span> accuracy on
            last 90 days
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "waste",
    label: "Waste Reduction",
    icon: Leaf,
    color: "from-emerald-500 to-teal-500",
    accentColor: "text-emerald-500",
    borderColor: "border-emerald-500/30",
    bgColor: "bg-emerald-500/10",
    title: "Cut waste before it hits the shelf",
    subtitle: "Turn sustainability into a competitive edge",
    description:
      "By matching supply precisely to demand, ZabonEx slashes overstock and expiry losses. Track your waste reduction progress in real time and generate sustainability reports for stakeholders.",
    cta: "Explore waste analytics",
    visual: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Waste Reduced", value: "34%", sub: "vs. last quarter" },
            { label: "Cost Saved", value: "SAR 42K", sub: "this month" },
            { label: "CO₂ Avoided", value: "1.2 t", sub: "equivalent" },
            { label: "Items Saved", value: "8,400", sub: "units" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-3 rounded-xl glass border border-emerald-500/20 text-center"
            >
              <div className="text-xl font-bold gradient-text-static">
                {stat.value}
              </div>
              <div className="text-xs text-secondary mt-0.5">{stat.label}</div>
              <div className="text-xs text-muted">{stat.sub}</div>
            </div>
          ))}
        </div>
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
          <Leaf className="w-5 h-5 text-emerald-500 flex-shrink-0" />
          <span className="text-sm text-secondary">
            On track to hit{" "}
            <span className="font-bold text-primary">zero-waste</span> goal by
            Q4
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "routing",
    label: "Smart Routing",
    icon: Route,
    color: "from-amber-500 to-orange-500",
    accentColor: "text-amber-500",
    borderColor: "border-amber-500/30",
    bgColor: "bg-amber-500/10",
    title: "Deliver smarter, not just faster",
    subtitle: "Optimize every route, every run",
    description:
      "ZabonEx automatically groups stores by geography and demand timing, building efficient delivery sequences that cut fuel costs and driver hours — without sacrificing freshness windows.",
    cta: "View routing demo",
    visual: (
      <div className="space-y-3">
        {[
          { route: "Route 1 — North Riyadh", stops: 6, saving: "18 km saved", time: "2h 10m" },
          { route: "Route 2 — Central", stops: 9, saving: "31 km saved", time: "3h 05m" },
          { route: "Route 3 — East Side", stops: 5, saving: "12 km saved", time: "1h 45m" },
        ].map((r, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-3 rounded-xl glass border border-amber-500/20"
          >
            <div>
              <div className="text-sm font-semibold text-primary">{r.route}</div>
              <div className="text-xs text-muted">{r.stops} stops · {r.time}</div>
            </div>
            <span className="text-xs font-medium text-amber-500 bg-amber-500/10 px-2 py-1 rounded-full">
              {r.saving}
            </span>
          </div>
        ))}
        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-3">
          <Route className="w-5 h-5 text-amber-500 flex-shrink-0" />
          <span className="text-sm text-secondary">
            Average{" "}
            <span className="font-bold text-primary">22% reduction</span> in
            delivery distance
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "inventory",
    label: "Inventory Sync",
    icon: PackageCheck,
    color: "from-violet-500 to-purple-500",
    accentColor: "text-violet-500",
    borderColor: "border-violet-500/30",
    bgColor: "bg-violet-500/10",
    title: "One live view of all your stock",
    subtitle: "No more guessing what's on the shelf",
    description:
      "ZabonEx connects to your ERP, WMS, and POS systems to surface real-time stock levels across every warehouse and store. Reorder alerts fire before you run out — not after.",
    cta: "See inventory dashboard",
    visual: (
      <div className="space-y-3">
        {[
          { item: "Dairy SKUs", stock: 78, status: "Healthy", statusColor: "text-emerald-500" },
          { item: "Bakery SKUs", stock: 32, status: "Low Stock", statusColor: "text-amber-500" },
          { item: "Beverages", stock: 91, status: "Healthy", statusColor: "text-emerald-500" },
          { item: "Frozen Foods", stock: 15, status: "Critical", statusColor: "text-rose-500" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex-1">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-secondary">{item.item}</span>
                <span className={`font-semibold ${item.statusColor}`}>
                  {item.status}
                </span>
              </div>
              <div className="h-2 rounded-full bg-[var(--bg-tertiary)] overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    item.stock >= 70
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500"
                      : item.stock >= 30
                      ? "bg-gradient-to-r from-amber-500 to-orange-500"
                      : "bg-gradient-to-r from-rose-500 to-pink-500"
                  }`}
                  style={{ width: `${item.stock}%` }}
                />
              </div>
            </div>
            <span className="text-xs text-muted w-8 text-right">{item.stock}%</span>
          </div>
        ))}
        <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center gap-3 mt-2">
          <PackageCheck className="w-5 h-5 text-violet-500 flex-shrink-0" />
          <span className="text-sm text-secondary">
            <span className="font-bold text-primary">2 alerts</span> need
            attention — reorder triggered automatically
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "analytics",
    label: "Sales Analytics",
    icon: BarChart3,
    color: "from-sky-500 to-cyan-500",
    accentColor: "text-sky-500",
    borderColor: "border-sky-500/30",
    bgColor: "bg-sky-500/10",
    title: "Know what sells, where, and when",
    subtitle: "Insights that drive real decisions",
    description:
      "Drill into SKU-level performance by store, region, or time period. Spot underperformers, discover seasonal patterns, and share automated reports with your team every Monday morning.",
    cta: "Explore analytics",
    visual: (
      <div className="space-y-4">
        <div className="flex items-end justify-between h-28 px-2 gap-1">
          {[55, 70, 45, 85, 60, 90, 75, 88, 65, 92, 80, 95].map(
            (h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t-sm ${
                  i >= 9
                    ? "bg-gradient-to-t from-sky-600 to-sky-400"
                    : "bg-[var(--bg-tertiary)]"
                }`}
                style={{ height: `${h}%` }}
              />
            )
          )}
        </div>
        <div className="flex justify-between text-xs text-muted px-2">
          <span>Jan</span><span>Mar</span><span>Jun</span><span>Sep</span><span>Dec</span>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2">
          {[
            { label: "Top SKU", value: "Laban 1L" },
            { label: "Best Region", value: "North" },
            { label: "Peak Day", value: "Thursday" },
          ].map((s, i) => (
            <div key={i} className="p-2 rounded-lg glass text-center">
              <div className="text-xs text-muted">{s.label}</div>
              <div className="text-sm font-semibold text-primary mt-0.5">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "distribution",
    label: "Distribution Planning",
    icon: Network,
    color: "from-rose-500 to-pink-500",
    accentColor: "text-rose-500",
    borderColor: "border-rose-500/30",
    bgColor: "bg-rose-500/10",
    title: "Plan your entire network in minutes",
    subtitle: "From warehouse to shelf, fully optimized",
    description:
      "Model different distribution scenarios — new store openings, fleet changes, promotional surges — and see the cost and efficiency impact before committing. Turn planning from days into minutes.",
    cta: "Try the planner",
    visual: (
      <div className="space-y-3">
        {[
          { from: "Central Warehouse", to: "12 stores", vol: "4,200 units", status: "Scheduled" },
          { from: "North Hub", to: "8 stores", vol: "2,800 units", status: "In Transit" },
          { from: "South Hub", to: "5 stores", vol: "1,500 units", status: "Delivered" },
        ].map((flow, i) => (
          <div
            key={i}
            className="p-3 rounded-xl glass border border-rose-500/20"
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="text-sm font-semibold text-primary">{flow.from}</div>
                <div className="text-xs text-muted mt-0.5">→ {flow.to} · {flow.vol}</div>
              </div>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  flow.status === "Delivered"
                    ? "bg-emerald-500/10 text-emerald-500"
                    : flow.status === "In Transit"
                    ? "bg-amber-500/10 text-amber-500"
                    : "bg-rose-500/10 text-rose-500"
                }`}
              >
                {flow.status}
              </span>
            </div>
          </div>
        ))}
        <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center gap-3">
          <Network className="w-5 h-5 text-rose-500 flex-shrink-0" />
          <span className="text-sm text-secondary">
            Next plan auto-generated in{" "}
            <span className="font-bold text-primary">6 hours</span>
          </span>
        </div>
      </div>
    ),
  },
];

export default function Challenges() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const active = tabs[activeTab];

  return (
    <section
      id="challenges"
      className="relative py-24 lg:py-32 overflow-hidden section-bg"
    >
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute inset-0 mesh-gradient opacity-50" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500">
              <Lightbulb className="w-3.5 h-3.5 text-white" />
            </span>
            <span className="text-xs font-semibold text-primary-600 dark:text-primary-300 tracking-[0.18em] uppercase">
              Platform Capabilities
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-primary mb-6 tracking-tight text-balance">
            One platform.{" "}
            <span className="gradient-text">Every challenge.</span>
          </h2>

          <p className="text-lg text-secondary max-w-2xl mx-auto text-pretty">
            From predicting demand to planning routes, ZabonEx covers every
            step of your F&amp;B distribution — in one unified platform.
          </p>
        </motion.div>

        {/* Main Layout: Tab List Left + Content Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="flex flex-col lg:flex-row gap-6"
        >
          {/* Left — Vertical Tab List */}
          <div className="flex flex-row lg:flex-col gap-2 lg:w-64 flex-shrink-0 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 text-left w-full flex-shrink-0 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tab.color} text-white border border-transparent shadow-lg shadow-primary-600/20`
                    : `surface text-tertiary hover:text-primary`
                }`}
              >
                <tab.icon className="w-4 h-4 flex-shrink-0" />
                <span className="whitespace-nowrap lg:whitespace-normal">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Right — Content Panel */}
          <div className="surface rounded-[28px] overflow-hidden flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid lg:grid-cols-2 gap-0 h-full"
              >
                {/* Left — Text */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  {/* Icon badge */}
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${active.bgColor} border ${active.borderColor} w-fit mb-6`}
                  >
                    <active.icon className={`w-4 h-4 ${active.accentColor}`} />
                    <span className={`text-xs font-semibold ${active.accentColor}`}>
                      {active.label}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-3 leading-tight">
                    {active.title}
                  </h3>

                  <p className={`text-base font-semibold mb-4 ${active.accentColor}`}>
                    {active.subtitle}
                  </p>

                  <p className="text-secondary leading-relaxed mb-8">
                    {active.description}
                  </p>

                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 font-semibold transition-colors group w-fit ${active.accentColor}`}
                  >
                    <span>{active.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Right — Visual */}
                <div
                  className={`p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-[var(--glass-border)] bg-gradient-to-br ${active.color} bg-opacity-5`}
                >
                  <div
                    className={`h-full p-1 rounded-2xl bg-gradient-to-br ${active.color} bg-opacity-10`}
                  >
                    <div className="glass rounded-xl p-6 h-full">
                      {/* Visual header */}
                      <div className="flex items-center gap-2 mb-5">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-400/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
                        </div>
                        <span className="text-xs text-muted ml-1">
                          ZabonEx — {active.label}
                        </span>
                      </div>

                      {/* Dynamic content */}
                      {active.visual}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
