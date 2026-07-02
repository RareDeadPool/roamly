"use client";

import { motion } from "framer-motion";
import { Star, ThumbsUp, ThumbsDown, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { TRAVELER_REVIEWS } from "../../data/reviewsData";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < n ? "fill-amber-400 text-amber-400" : "fill-[#E3EFEC] text-[#E3EFEC]"}`}
        />
      ))}
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function CommunityReviews() {
  const reviews = TRAVELER_REVIEWS.slice(0, 3);

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#E3EFEC" }}>
      {/* Blob */}
      <div
        className="absolute bottom-0 right-0 w-80 h-80 blob-1 pointer-events-none opacity-25"
        style={{ background: "rgba(84,191,203,0.20)", filter: "blur(60px)" }}
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
            <span className="clay-badge clay-badge-pine mb-4">
              <MessageCircle className="w-3 h-3" /> Community Reviews
            </span>
            <h2 className="heading-section text-4xl sm:text-5xl mb-3">
              Honest reviews from{" "}
              <span className="text-pine">real travelers.</span>
            </h2>
            <p className="text-base leading-relaxed max-w-md" style={{ color: "#667572" }}>
              No paid reviews. No sponsored posts. Just people who followed an
              itinerary and reported back.
            </p>
          </div>
          <Link href="/explore?tab=reviews" className="clay-btn clay-btn-ghost shrink-0 !text-sm">
            Read all reviews <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {reviews.map((r) => (
            <motion.div
              key={r.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="clay-card p-6 flex flex-col gap-4"
              style={{ transition: "all 0.28s cubic-bezier(0.34,1.56,0.64,1)" }}
            >
              {/* Reviewer */}
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-white"
                  style={{ boxShadow: "3px 3px 10px rgba(89,102,106,0.16), -2px -2px 8px rgba(255,255,255,0.85)" }}
                />
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm truncate" style={{ fontFamily: "'Outfit', sans-serif", color: "#10201C" }}>
                    {r.name}
                  </div>
                  <div className="text-xs font-medium" style={{ color: "#B3C4C0" }}>{r.username}</div>
                </div>
                <Stars n={r.rating} />
              </div>

              {/* Trip ref */}
              <div
                className="px-3.5 py-2.5 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #CFE5E8, #B8D9DE)",
                  boxShadow: "inset 3px 3px 8px rgba(89,102,106,0.10), inset -3px -3px 8px rgba(255,255,255,0.75)",
                }}
              >
                <span className="text-[10px] font-extrabold uppercase tracking-wider" style={{ color: "#0F6F78" }}>
                  Reviewed:
                </span>
                <span className="text-xs font-medium ml-2 truncate" style={{ color: "#0F4A52" }}>
                  {r.tripTitle}
                </span>
              </div>

              {/* Review */}
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#667572" }}>
                &ldquo;{r.review}&rdquo;
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {r.tags.slice(0, 2).map((t: string) => (
                  <span
                    key={t}
                    className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: "#E3EFEC",
                      color: "#667572",
                      boxShadow: "3px 3px 8px rgba(89,102,106,0.12), -2px -2px 6px rgba(255,255,255,0.85)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Would follow */}
              <div
                className="flex items-center justify-between pt-4"
                style={{ borderTop: "1px solid rgba(84,191,203,0.14)" }}
              >
                <span className="text-xs font-medium" style={{ color: "#B3C4C0" }}>Would follow again?</span>
                {r.wouldFollow ? (
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{
                      background: "linear-gradient(135deg, #D6E8E0, #C0D9CC)",
                      color: "#203A32",
                      boxShadow: "3px 3px 8px rgba(54,88,74,0.14), -2px -2px 6px rgba(255,255,255,0.80)",
                    }}
                  >
                    <ThumbsUp className="w-3 h-3" /> Yes, definitely
                  </span>
                ) : (
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{
                      background: "linear-gradient(135deg, #F5E0DF, #ECC8C6)",
                      color: "#8B3535",
                      boxShadow: "3px 3px 8px rgba(139,53,53,0.12), -2px -2px 6px rgba(255,255,255,0.80)",
                    }}
                  >
                    <ThumbsDown className="w-3 h-3" /> With changes
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs font-bold uppercase tracking-wider mt-10"
          style={{ color: "#B3C4C0" }}
        >
          All reviews are from verified travelers who completed the itinerary.
        </motion.p>
      </div>
    </section>
  );
}
