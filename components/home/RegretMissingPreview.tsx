"use client";

import { motion } from "framer-motion";
import { Frown, MapPin, ArrowRight, Heart } from "lucide-react";
import Link from "next/link";

const REGRETS = [
  {
    emoji: "😔", location: "Sissu, Himachal Pradesh",
    quote: "Skipped Sissu. Biggest mistake of the whole trip.",
    detail: "Everyone said 'just a village'. We saw photos after — glacial lake, zero tourists, haunting silence. We still talk about this.",
    accent: "#8B3535", bg: "linear-gradient(135deg, #F5E0DF, #ECC8C6)", border: "rgba(200,150,148,0.30)",
  },
  {
    emoji: "🌅", location: "Tiger Hill, Darjeeling",
    quote: "Missed sunrise at Tiger Hill. Can't explain how bad I feel.",
    detail: "Slept in because 'weather looked cloudy'. It cleared perfectly. The Kanchenjunga view was apparently unreal that morning.",
    accent: "#7A5835", bg: "linear-gradient(135deg, #EDE6D8, #DDD2BC)", border: "rgba(180,160,130,0.28)",
  },
  {
    emoji: "🛍️", location: "Kochi, Kerala",
    quote: "Didn't visit the Saturday local market. Regret every day.",
    detail: "Thought it was a typical bazaar. Found out later — Portuguese antiques, handmade spice blends, local art at 1/10th store price.",
    accent: "#0F6F78", bg: "linear-gradient(135deg, #CFE5E8, #B8D9DE)", border: "rgba(84,191,203,0.25)",
  },
  {
    emoji: "🏡", location: "Meghalaya",
    quote: "Should have tried the village homestay, not the resort.",
    detail: "Paid ₹4,500/night at resort. A traveler we met paid ₹800 at a Khasi family homestay — better views, home-cooked food, real stories.",
    accent: "#203A32", bg: "linear-gradient(135deg, #D6E8E0, #C0D9CC)", border: "rgba(54,88,74,0.22)",
  },
  {
    emoji: "🏰", location: "Hampi, Karnataka",
    quote: "Ignored the fort trail. Guide said 'takes time'. We had time.",
    detail: "Ruins at the top have a 360° view even the main temple doesn't. We skipped it to rest. Biggest lazy-travel regret.",
    accent: "#7A5835", bg: "linear-gradient(135deg, #EDE6D8, #DDD2BC)", border: "rgba(180,160,130,0.28)",
  },
  {
    emoji: "💵", location: "Remote Uttarakhand",
    quote: "Didn't carry enough cash for the remote village.",
    detail: "Zero ATMs after Munsiyari. We had to borrow from a kind family and return later. UPI and card both failed completely.",
    accent: "#8B3535", bg: "linear-gradient(135deg, #F5E0DF, #ECC8C6)", border: "rgba(200,150,148,0.30)",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 24 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function RegretMissingPreview() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#EEF5F4" }}>
      <div className="section-divider" />

      {/* Subtle map-route line decoration */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(84,191,203,0.10) 60px),
            repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(84,191,203,0.10) 60px)
          `,
        }}
      />

      {/* Blob */}
      <div
        className="absolute top-1/2 right-0 w-80 h-80 blob-2 pointer-events-none opacity-30"
        style={{ background: "rgba(201,188,162,0.30)", filter: "blur(60px)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <span className="clay-badge clay-badge-rose mb-5 mx-auto">
            <Frown className="w-3 h-3" /> Avoid Travel Regrets
          </span>
          <h2 className="heading-section text-4xl sm:text-5xl mb-4">
            Places people{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C07070, #8B3535)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              regret missing.
            </span>
          </h2>
          <p className="text-base leading-relaxed max-w-lg mx-auto" style={{ color: "#667572" }}>
            Sometimes the best travel advice is what someone wishes they had done.
            Learn from their mistakes before you plan your route.
          </p>
        </motion.div>

        {/* Regret grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {REGRETS.map((r) => (
            <motion.div
              key={r.quote}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="p-6 flex flex-col gap-3 rounded-[2rem] clay-hover"
              style={{
                background: r.bg,
                border: `1.5px solid ${r.border}`,
                boxShadow: "10px 10px 26px rgba(89,102,106,0.16), -6px -6px 18px rgba(255,255,255,0.85)",
              }}
            >
              {/* Emoji + type */}
              <div className="flex items-center justify-between">
                <span className="text-3xl leading-none">{r.emoji}</span>
                <div className="flex items-center gap-1.5" style={{ color: r.accent, opacity: 0.7 }}>
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="text-xs font-bold">{r.location}</span>
                </div>
              </div>

              {/* Quote */}
              <blockquote
                className="text-base font-extrabold leading-snug"
                style={{ fontFamily: "'Outfit', sans-serif", color: r.accent }}
              >
                &ldquo;{r.quote}&rdquo;
              </blockquote>

              {/* Detail */}
              <p className="text-xs leading-relaxed" style={{ color: r.accent, opacity: 0.75 }}>
                {r.detail}
              </p>
            </motion.div>
          ))}

          {/* Final summary card */}
          <motion.div
            variants={cardVariants}
            className="sm:col-span-2 lg:col-span-1 clay-card flex flex-col items-center justify-center gap-4 p-8 text-center"
          >
            <Heart className="w-10 h-10" style={{ color: "#C9BCA2" }} />
            <p className="text-sm font-medium leading-relaxed" style={{ color: "#667572" }}>
              Every regret here was shared to help you not repeat the same mistake.
            </p>
            <Link href="/explore?tab=regrets" className="clay-btn clay-btn-ghost !text-sm">
              See all regrets <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
