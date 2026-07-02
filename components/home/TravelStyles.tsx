"use client";

import { motion } from "framer-motion";
import { X, CheckCircle, BookOpen, Map, MessageSquare } from "lucide-react";

const NOT_LIST = [
  "Book hotels or flights",
  "Show sponsored travel deals",
  "Rank paid partner listings",
  "Tell you where to stay",
  "Earn from your bookings",
];

const YES_LIST = [
  "Real, day-wise itineraries",
  "Verified traveler budgets in INR",
  "Hidden gems others skipped",
  "Honest travel mistakes & regrets",
  "Remixable community trip plans",
];

const INFO_CARDS = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Real day-wise plans",
    desc: "Every itinerary is structured by actual days — not vague inspiration.",
    color: "#54BFCB",
    bg: "linear-gradient(135deg, #CFE5E8, #A8D4D9)",
  },
  {
    icon: <IndianRupeeIcon />,
    title: "Honest travel budgets",
    desc: "Real costs, real spending — not idealized hotel price estimates.",
    color: "#36584A",
    bg: "linear-gradient(135deg, #D6E8E0, #C0D9CC)",
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: "Mistakes worth avoiding",
    desc: "Learn from what went wrong before you make the same call.",
    color: "#7A5835",
    bg: "linear-gradient(135deg, #EDE6D8, #DDD2BC)",
  },
];

function IndianRupeeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
      <path d="M6 3h12M6 8h12M9 21l6-13M6 8l12 8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function TravelStyles() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#EEF5F4" }}>
      <div className="section-divider mb-0" />

      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <span className="clay-badge clay-badge-lake mb-5 mx-auto">
            Our Philosophy
          </span>
          <h2 className="heading-section text-4xl sm:text-5xl mb-4">
            Roamly is{" "}
            <span className="text-lake">not another booking app.</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#667572" }}>
            No hotels. No flights. No fake perfect plans. Just real trips, real
            budgets, mistakes, hidden gems, and honest reviews from travelers
            who actually went there.
          </p>
        </motion.div>

        {/* Three info cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {INFO_CARDS.map((card) => (
            <motion.div
              key={card.title}
              variants={itemUp}
              whileHover={{ y: -5 }}
              className="clay-card clay-hover p-7 text-center"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{
                  background: card.bg,
                  color: card.color,
                  boxShadow: `5px 5px 14px rgba(89,102,106,0.14), -4px -4px 12px rgba(255,255,255,0.85)`,
                }}
              >
                {card.icon}
              </div>
              <h3
                className="font-bold text-lg mb-2"
                style={{ fontFamily: "'Outfit', sans-serif", color: "#10201C" }}
              >
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#667572" }}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* NOT vs IS comparison */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* NOT */}
          <div
            className="rounded-[2rem] p-7"
            style={{
              background: "linear-gradient(135deg, #F5E0DF, #F0D0CE)",
              border: "1.5px solid rgba(200,150,148,0.30)",
              boxShadow: "10px 10px 28px rgba(89,102,106,0.14), -8px -8px 22px rgba(255,255,255,0.88)",
            }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "rgba(180,80,80,0.14)" }}
              >
                <X className="w-4 h-4 text-rose-600" />
              </div>
              <h3 className="font-bold text-sm uppercase tracking-widest" style={{ color: "#8B3535" }}>
                Roamly is NOT for
              </h3>
            </div>
            <ul className="space-y-3">
              {NOT_LIST.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(180,80,80,0.12)" }}
                  >
                    <X className="w-3 h-3 text-rose-500" />
                  </div>
                  <span
                    className="text-sm font-medium line-through decoration-rose-400/40"
                    style={{ color: "#8B5555" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* IS */}
          <div
            className="rounded-[2rem] p-7"
            style={{
              background: "linear-gradient(135deg, #CFE5E8, #B8D9DE)",
              border: "1.5px solid rgba(84,191,203,0.30)",
              boxShadow: "10px 10px 28px rgba(89,102,106,0.14), -8px -8px 22px rgba(255,255,255,0.88)",
            }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "rgba(15,111,120,0.14)" }}
              >
                <CheckCircle className="w-4 h-4" style={{ color: "#0F6F78" }} />
              </div>
              <h3 className="font-bold text-sm uppercase tracking-widest" style={{ color: "#0F6F78" }}>
                Roamly IS for
              </h3>
            </div>
            <ul className="space-y-3">
              {YES_LIST.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(15,111,120,0.14)" }}
                  >
                    <CheckCircle className="w-3 h-3" style={{ color: "#0F6F78" }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#0F4A52" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
