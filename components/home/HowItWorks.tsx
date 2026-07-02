"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Map, GitFork, Share2, ArrowRight } from "lucide-react";

const STEPS = [
  {
    num: "01",
    icon: <Search className="w-7 h-7" />,
    title: "Discover",
    desc: "Find real itineraries by destination, budget, duration, and travel style.",
    detail: "12K+ itineraries",
    bg: "linear-gradient(135deg, #CFE5E8, #A8D4D9)",
    color: "#0F6F78",
    shadow: "rgba(84,191,203,0.22)",
  },
  {
    num: "02",
    icon: <Map className="w-7 h-7" />,
    title: "Save",
    desc: "Save trips into collections like \"Monsoon Trips\", \"Budget Plans\", or \"Weekend Escapes\".",
    detail: "Unlimited collections",
    bg: "linear-gradient(135deg, #D6E8E0, #C0D9CC)",
    color: "#203A32",
    shadow: "rgba(54,88,74,0.20)",
  },
  {
    num: "03",
    icon: <GitFork className="w-7 h-7" />,
    title: "Remix",
    desc: "Take someone's itinerary and customize it for your own budget, dates, and vibe.",
    detail: "One-click remix",
    bg: "linear-gradient(135deg, #EDE6D8, #DDD2BC)",
    color: "#7A5835",
    shadow: "rgba(122,88,53,0.18)",
  },
  {
    num: "04",
    icon: <Share2 className="w-7 h-7" />,
    title: "Review",
    desc: "Share what worked, what failed, what was overrated, and what people should not miss.",
    detail: "Help 1000s of travelers",
    bg: "linear-gradient(135deg, #F5E0DF, #ECC8C6)",
    color: "#8B3535",
    shadow: "rgba(139,53,53,0.16)",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};
const stepVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#E3EFEC" }}>
      {/* Soft blob */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 blob-1 pointer-events-none opacity-30"
        style={{ background: "rgba(84,191,203,0.18)", filter: "blur(60px)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <span className="clay-badge clay-badge-pine mb-5 mx-auto">How it works</span>
          <h2 className="heading-section text-4xl sm:text-5xl mb-4">
            Plan with{" "}
            <span className="text-pine">people, not perfection.</span>
          </h2>
          <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: "#667572" }}>
            Roamly is built around the complete travel planning journey — from
            discovery to memory.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              variants={stepVariants}
              whileHover={{ y: -6 }}
              className="clay-card p-7 flex flex-col gap-5 relative"
              style={{ transition: "all 0.28s cubic-bezier(0.34,1.56,0.64,1)" }}
            >
              {/* Big number watermark */}
              <span
                className="absolute top-4 right-5 font-extrabold opacity-[0.08] select-none"
                style={{ fontSize: "4rem", lineHeight: 1, fontFamily: "'Outfit', sans-serif", color: step.color }}
              >
                {step.num}
              </span>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{
                  background: step.bg,
                  color: step.color,
                  boxShadow: `6px 6px 16px ${step.shadow}, -4px -4px 12px rgba(255,255,255,0.80)`,
                }}
              >
                {step.icon}
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest" style={{ color: "#B3C4C0" }}>
                    {step.num}
                  </span>
                  <h3
                    className="font-extrabold text-xl"
                    style={{ fontFamily: "'Outfit', sans-serif", color: "#10201C" }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#667572" }}>
                  {step.desc}
                </p>
              </div>

              {/* Tag */}
              <div
                className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full w-fit mt-auto"
                style={{
                  background: step.bg,
                  color: step.color,
                  boxShadow: `3px 3px 8px ${step.shadow}, -2px -2px 6px rgba(255,255,255,0.80)`,
                }}
              >
                {step.detail}
              </div>

              {/* Connector arrow (desktop) */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden lg:flex absolute top-1/2 -right-4 w-8 h-8 rounded-full items-center justify-center z-10"
                  style={{
                    background: "#F7FAF8",
                    boxShadow: "4px 4px 10px rgba(89,102,106,0.16), -3px -3px 8px rgba(255,255,255,0.85)",
                    color: "#C9BCA2",
                    transform: "translateY(-50%)",
                  }}
                >
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/discover" className="clay-btn clay-btn-primary">
            Start Exploring <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
