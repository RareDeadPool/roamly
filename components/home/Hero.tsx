"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ArrowRight,
  Users,
  IndianRupee,
  Gem,
  GitFork,
  ShieldCheck,
  Compass,
} from "lucide-react";
import FloatingCard from "./FloatingCard";
import AnimatedBadge from "./AnimatedBadge";

const HERO_BADGES = [
  { label: "Real traveler plan", icon: <Users className="w-3 h-3" />, variant: "lake" as const, delay: 0.9 },
  { label: "Budget included", icon: <IndianRupee className="w-3 h-3" />, variant: "pine" as const, delay: 1.1 },
  { label: "Hidden gems", icon: <Gem className="w-3 h-3" />, variant: "amber" as const, delay: 1.3 },
  { label: "Remixable", icon: <GitFork className="w-3 h-3" />, variant: "warm" as const, delay: 1.5 },
  { label: "Reality checks", icon: <ShieldCheck className="w-3 h-3" />, variant: "rose" as const, delay: 1.7 },
];

const HERO_DAYS = [
  { day: 1, title: "Lake walk + local cafe in Mussoorie" },
  { day: 2, title: "Forest trail + sunrise point" },
  { day: 3, title: "Hidden village stay in Landour" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const springY = useSpring(yImage, { stiffness: 60, damping: 18 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ paddingTop: "88px" }}
    >
      {/* ── Mountain lake background ── */}
      <motion.div
        style={{ y: springY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Mountain lake"
          className="w-full h-full object-cover"
          style={{ minHeight: "110%" }}
        />
        {/* Warm soft overlay — keeps colour palette coherent */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(165deg, rgba(238,245,244,0.55) 0%, rgba(207,229,232,0.38) 35%, rgba(32,58,50,0.22) 100%)",
          }}
        />
        {/* Bottom fade into page bg */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{ background: "linear-gradient(to bottom, transparent, #EEF5F4)" }}
        />
      </motion.div>

      {/* ── Organic blobs ── */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.70, 0.45] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 -left-20 w-64 h-64 blob-1 pointer-events-none"
        style={{ background: "rgba(84,191,203,0.14)", filter: "blur(40px)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-1/3 -right-24 w-80 h-80 blob-2 pointer-events-none"
        style={{ background: "rgba(201,188,162,0.18)", filter: "blur(50px)" }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left — text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 max-w-xl text-center lg:text-left"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="mb-6 flex justify-center lg:justify-start">
            <span
              className="clay-badge clay-badge-lake text-xs"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Compass className="w-3 h-3" />
              Not another booking app. A real travel playbook.
            </span>
          </motion.div>

          {/* Kicker line */}
          <motion.p
            variants={fadeUp}
            className="text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: "#0F6F78", fontFamily: "'Outfit', sans-serif" }}
          >
            Real itineraries. Honest budgets. Hidden gems.
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="heading-display text-5xl sm:text-6xl lg:text-7xl mb-6"
          >
            Find trips that feel{" "}
            <span className="text-lake">real</span> before you take them.
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            className="text-lg leading-relaxed mb-8"
            style={{ color: "#667572", maxWidth: "480px" }}
          >
            Discover day-wise travel plans shared by real people, remix them for
            your own journey, and learn the reality checks travel reels never
            show.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
          >
            <Link href="/discover" className="clay-btn clay-btn-primary group">
              <Compass className="w-5 h-5" />
              Explore Real Trips
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link href="/create" className="clay-btn clay-btn-secondary">
              Create Your Itinerary
            </Link>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
          >
            {HERO_BADGES.map((b) => (
              <AnimatedBadge key={b.label} delay={b.delay} floating variant={b.variant}>
                {b.icon}
                {b.label}
              </AnimatedBadge>
            ))}
          </motion.div>

          {/* Trust stats */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center lg:justify-start gap-8 mt-10 pt-8"
            style={{ borderTop: "1px solid rgba(84,191,203,0.20)" }}
          >
            {[
              { val: "12K+", label: "Itineraries" },
              { val: "₹ Verified", label: "Real budgets" },
              { val: "340+", label: "Hidden gems" },
            ].map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div
                  className="text-xl font-extrabold text-lake"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {s.val}
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wide" style={{ color: "#B3C4C0" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — floating itinerary card */}
        <div className="flex-1 flex justify-center lg:justify-end w-full max-w-sm">
          <FloatingCard
            title="7 Days in Uttarakhand"
            destination="Mussoorie → Landour → Nainital"
            duration={7}
            budget="21,500"
            days={HERO_DAYS}
            realityCheck="Transport gets difficult after sunset. Book ahead."
            regret="Should have kept one extra day for Landour cafes."
            delay={0.5}
          />
        </div>
      </div>

      {/* ── Bottom stat strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="relative z-10 mx-4 sm:mx-6 lg:mx-auto max-w-5xl mb-8 rounded-[2rem] px-8 py-5"
        style={{
          background: "rgba(247,250,248,0.82)",
          backdropFilter: "blur(20px) saturate(1.4)",
          WebkitBackdropFilter: "blur(20px) saturate(1.4)",
          border: "1.5px solid rgba(255,255,255,0.80)",
          boxShadow: "12px 14px 36px rgba(89,102,106,0.16), -6px -6px 18px rgba(255,255,255,0.70)",
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          {[
            { val: "100%", label: "User Generated", accent: "#54BFCB" },
            { val: "No Booking", label: "Zero commissions", accent: "#36584A" },
            { val: "Reality Checks", label: "Crowds & hidden costs", accent: "#C9BCA2" },
            { val: "Missed Gems", label: "Zero-regret trips", accent: "#54BFCB" },
          ].map((item) => (
            <div key={item.label}>
              <div
                className="text-xl font-extrabold mb-0.5"
                style={{ fontFamily: "'Outfit', sans-serif", color: item.accent }}
              >
                {item.val}
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider" style={{ color: "#667572" }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
