"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Compass, PenLine, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#EEF5F4" }}>
      {/* Animated lake blobs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] blob-1 pointer-events-none"
        style={{ background: "rgba(84,191,203,0.14)", filter: "blur(70px)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -top-10 right-0 w-96 h-96 blob-2 pointer-events-none"
        style={{ background: "rgba(201,188,162,0.20)", filter: "blur(60px)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute -bottom-10 left-0 w-96 h-96 blob-3 pointer-events-none"
        style={{ background: "rgba(54,88,74,0.12)", filter: "blur(60px)" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* CTA Panel */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="clay-card-lg p-10 md:p-14 text-center relative overflow-hidden"
        >
          {/* Inner gradient tint */}
          <div
            className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
            style={{
              background: "linear-gradient(145deg, rgba(207,229,232,0.35) 0%, rgba(247,250,248,0) 60%)",
            }}
          />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <span className="clay-badge clay-badge-lake text-xs">
              Give back to the travel community
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="heading-display text-4xl sm:text-5xl lg:text-6xl mb-6"
          >
            Your trip can help{" "}
            <span className="text-lake">someone travel better.</span>
          </motion.h2>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.65 }}
            className="text-lg leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: "#667572" }}
          >
            Share your route, budget, mistakes, hidden gems, and honest review.
            Someone else will thank you later.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Link href="/create" className="clay-btn clay-btn-primary group">
              <PenLine className="w-5 h-5" />
              Create an Itinerary
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/discover" className="clay-btn clay-btn-secondary">
              <Compass className="w-5 h-5" />
              Explore Trips
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold uppercase tracking-wider"
            style={{ color: "#C9BCA2" }}
          >
            {["Free to share", "No booking commissions", "100% user-generated", "Help real travelers"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#A8D4D9" }}
                />
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
