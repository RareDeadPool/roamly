"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin, Clock, IndianRupee, Heart, Bookmark,
  AlertTriangle, GitFork, Star, Gem, ArrowRight, Sparkles,
} from "lucide-react";
import { INDIAN_ITINERARIES } from "../../data/indianItineraries";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function FeaturedItineraries() {
  const featured = INDIAN_ITINERARIES.slice(0, 4);

  return (
    <section className="py-24 relative" style={{ background: "#EEF5F4" }}>
      <div className="section-divider" />

      {/* Soft background blob */}
      <div
        className="absolute top-24 right-0 w-80 h-80 blob-2 pointer-events-none opacity-40"
        style={{ background: "rgba(84,191,203,0.10)", filter: "blur(60px)" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
        >
          <div>
            <span className="clay-badge clay-badge-lake mb-4">
              <Sparkles className="w-3 h-3" />
              Featured Journeys
            </span>
            <h2 className="heading-section text-4xl sm:text-5xl mb-3">
              Trips people{" "}
              <span className="text-lake">actually took.</span>
            </h2>
            <p className="text-base leading-relaxed max-w-md" style={{ color: "#667572" }}>
              Browse real routes, costs, hidden gems, and honest notes before
              planning your own.
            </p>
          </div>
          <Link
            href="/discover"
            className="clay-btn clay-btn-ghost shrink-0 !text-sm"
          >
            Explore all trips <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featured.map((itin) => (
            <motion.div
              key={itin.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="clay-card group flex flex-col overflow-hidden"
              style={{ transition: "all 0.28s cubic-bezier(0.34,1.56,0.64,1)" }}
            >
              {/* Cover image */}
              <div className="relative h-48 overflow-hidden rounded-[1.5rem] m-3 mb-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={itin.coverImage}
                  alt={itin.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 rounded-[1.5rem]" style={{ background: "linear-gradient(to top, rgba(16,32,28,0.65) 0%, transparent 55%)" }} />

                {/* Tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {itin.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold text-white px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(32,58,50,0.65)", border: "1px solid rgba(255,255,255,0.20)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Budget */}
                <div className="absolute bottom-3 right-3">
                  <span
                    className="inline-flex items-center gap-1 text-xs font-extrabold px-2.5 py-1.5 rounded-full text-white"
                    style={{
                      background: "rgba(15,111,120,0.75)",
                      border: "1px solid rgba(84,191,203,0.40)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <IndianRupee className="w-3 h-3" />
                    {itin.budget.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* Creator */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={itin.creatorAvatar} alt={itin.creatorName} className="w-6 h-6 rounded-full object-cover border-2 border-white/50" />
                  <span className="text-[11px] font-semibold text-white/90">{itin.creatorName}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                {/* Title + rating */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3
                    className="font-bold text-base leading-snug group-hover:text-lake transition-colors"
                    style={{ fontFamily: "'Outfit', sans-serif", color: "#10201C" }}
                  >
                    {itin.title}
                  </h3>
                  <div className="flex items-center gap-0.5 shrink-0">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold" style={{ color: "#667572" }}>{itin.rating}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1 mb-3">
                  <MapPin className="w-3.5 h-3.5" style={{ color: "#54BFCB" }} />
                  <span className="text-xs font-medium" style={{ color: "#667572" }}>
                    {itin.destination}, {itin.state}
                  </span>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-3 text-xs mb-4" style={{ color: "#667572" }}>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" style={{ color: "#54BFCB" }} />
                    {itin.duration} days
                  </span>
                  <span className="flex items-center gap-1">
                    <IndianRupee className="w-3.5 h-3.5" style={{ color: "#36584A" }} />
                    {itin.budget.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* Hidden gem */}
                <div
                  className="clay-inset px-3 py-2.5 mb-3 flex items-start gap-2"
                >
                  <Gem className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: "#7A5835" }} />
                  <p className="text-[11px] leading-snug" style={{ color: "#5A4535" }}>
                    {itin.hiddenGem}
                  </p>
                </div>

                {/* Reality */}
                <div
                  className="flex items-start gap-2 rounded-xl px-3 py-2.5 mb-4"
                  style={{
                    background: "linear-gradient(135deg, #F5E0DF, #ECC8C6)",
                    border: "1px solid rgba(200,150,148,0.25)",
                  }}
                >
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-rose-500" />
                  <p className="text-[11px] leading-snug" style={{ color: "#6B2828" }}>
                    {itin.realityCheck}
                  </p>
                </div>

                {/* Footer */}
                <div
                  className="flex items-center justify-between pt-4 mt-auto"
                  style={{ borderTop: "1px solid rgba(84,191,203,0.14)" }}
                >
                  <div className="flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.85 }}
                      className="flex items-center gap-1 text-xs font-bold"
                      style={{ color: "#B3C4C0" }}
                    >
                      <Heart className="w-3.5 h-3.5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.85 }}
                      className="flex items-center gap-1 text-xs font-bold"
                      style={{ color: "#B3C4C0" }}
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                    </motion.button>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href={`/itinerary/${itin.id}`}
                        className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1.5 rounded-full"
                        style={{
                          background: "linear-gradient(135deg, #CFE5E8, #A8D4D9)",
                          color: "#0F6F78",
                          boxShadow: "3px 3px 8px rgba(84,191,203,0.18), -2px -2px 6px rgba(255,255,255,0.80)",
                        }}
                      >
                        <GitFork className="w-3 h-3" /> Remix
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href={`/itinerary/${itin.id}`}
                        className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1.5 rounded-full"
                        style={{
                          background: "#E3EFEC",
                          color: "#36584A",
                          boxShadow: "3px 3px 8px rgba(89,102,106,0.14), -2px -2px 6px rgba(255,255,255,0.85)",
                        }}
                      >
                        View <ArrowRight className="w-3 h-3" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
