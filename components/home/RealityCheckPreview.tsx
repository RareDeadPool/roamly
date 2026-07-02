"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

const CHECKS = [
  {
    category: "Safety ⚠️",
    dest: "Manali, HP",
    quote: "This waterfall was beautiful but genuinely unsafe after 5 PM. The trail goes dark, signal drops, and you'll be completely alone. Do not go without a guide.",
    author: "Priya S.",
  },
  {
    category: "Hidden Costs 💸",
    dest: "Jaipur, Rajasthan",
    quote: "Cab drivers near Amber Fort quoted ₹600 for a 10-minute ride. Take a tuk-tuk or Rapido. The meter-less cabs near tourist spots are notorious.",
    author: "Rohit M.",
  },
  {
    category: "Overhyped 🙄",
    dest: "Goa",
    quote: "The famous café everyone posts about — not worth the 45-minute queue and ₹350 coffee. Found a local shack 200m away for ₹60 that tasted better.",
    author: "Kavya N.",
  },
  {
    category: "Practical 📱",
    dest: "Spiti Valley, HP",
    quote: "Carry cash. Lots of it. UPI failed everywhere after Kaza. Only BSNL SIM had signal. Airtel and Jio were completely dead for three days straight.",
    author: "Arjun K.",
  },
  {
    category: "Navigation 🗺️",
    dest: "Uttarakhand",
    quote: "The Google Maps shortcut to the forest trail was blocked by a landslide. Locals knew a different path but nobody updated the map. Always ask the dhaba uncle.",
    author: "Sneha G.",
  },
  {
    category: "Crowds 👥",
    dest: "Rishikesh",
    quote: "The famous viewpoint was stunning, but only before the sunrise crowd arrived. After 6:30 AM it becomes a selfie war zone with 200 people. Go at 5 AM.",
    author: "Meera P.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function RealityCheckPreview() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "#203A32" }}
    >
      {/* Organic blob decorations */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-96 h-96 blob-1 pointer-events-none"
        style={{ background: "rgba(84,191,203,0.08)", filter: "blur(50px)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -bottom-20 -left-20 w-80 h-80 blob-2 pointer-events-none"
        style={{ background: "rgba(201,188,162,0.12)", filter: "blur(60px)" }}
      />

      {/* Dot pattern (muted on dark) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(84,191,203,0.25) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
        >
          <div>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-5"
              style={{
                background: "rgba(84,191,203,0.14)",
                border: "1px solid rgba(84,191,203,0.25)",
                color: "#8ED5DE",
                boxShadow: "3px 3px 10px rgba(0,0,0,0.25), -2px -2px 8px rgba(255,255,255,0.05)",
              }}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              Unfiltered Truth
            </span>
            <h2
              className="text-4xl sm:text-5xl font-extrabold mb-3 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif", color: "#F0F8F6" }}
            >
              The stuff travel reels{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8ED5DE, #54BFCB)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                don&apos;t tell you.
              </span>
            </h2>
            <p className="text-base leading-relaxed max-w-md" style={{ color: "rgba(207,229,232,0.65)" }}>
              Roamly travelers share the raw, unfiltered moments that no
              influencer will put in their reel.
            </p>
          </div>
          <Link
            href="/explore?tab=reality-checks"
            className="inline-flex items-center gap-1.5 text-sm font-bold px-5 py-2.5 rounded-full shrink-0 transition-all hover:scale-105"
            style={{
              background: "rgba(84,191,203,0.14)",
              border: "1px solid rgba(84,191,203,0.25)",
              color: "#8ED5DE",
              boxShadow: "4px 4px 12px rgba(0,0,0,0.30), -2px -2px 8px rgba(255,255,255,0.04)",
            }}
          >
            Read all warnings <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {CHECKS.map((item) => (
            <motion.div
              key={item.quote.slice(0, 30)}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="p-5 rounded-[1.75rem] flex flex-col gap-4"
              style={{
                background: "linear-gradient(135deg, rgba(54,88,74,0.80) 0%, rgba(32,58,50,0.85) 100%)",
                border: "1px solid rgba(84,191,203,0.14)",
                boxShadow: "8px 8px 24px rgba(0,0,0,0.30), -4px -4px 14px rgba(255,255,255,0.04)",
                transition: "all 0.28s cubic-bezier(0.34,1.56,0.64,1)",
              }}
            >
              {/* Top */}
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(84,191,203,0.14)",
                    border: "1px solid rgba(84,191,203,0.22)",
                    color: "#8ED5DE",
                  }}
                >
                  {item.category}
                </span>
                <span className="text-xs font-semibold" style={{ color: "rgba(207,229,232,0.45)" }}>
                  {item.dest}
                </span>
              </div>

              {/* Quote */}
              <div className="relative">
                <span
                  className="text-6xl font-black absolute -top-3 -left-1 leading-none select-none opacity-10"
                  style={{ color: "#8ED5DE" }}
                >
                  &ldquo;
                </span>
                <p className="text-sm leading-relaxed pl-3 relative z-10" style={{ color: "rgba(207,229,232,0.80)" }}>
                  {item.quote}
                </p>
              </div>

              {/* Author */}
              <div
                className="text-right text-[11px] font-bold pt-3"
                style={{
                  color: "rgba(207,229,232,0.40)",
                  borderTop: "1px solid rgba(84,191,203,0.12)",
                }}
              >
                — {item.author}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
