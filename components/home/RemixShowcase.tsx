"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  GitFork, IndianRupee, Plus, Minus, CheckCircle,
  MapPin, ArrowRight,
} from "lucide-react";
import Link from "next/link";

const ORIGINAL = {
  title: "5 Days in Goa",
  budget: 24000,
  items: [
    { label: "Popular beach resort stay", cost: 9000, kept: false },
    { label: "Club nights at Tito's & LPK", cost: 5000, kept: false },
    { label: "Expensive shack dinners", cost: 3500, kept: false },
    { label: "Candolim beach activities", cost: 1500, kept: true },
    { label: "Dolphin boat tour", cost: 800, kept: true },
    { label: "South Goa heritage day", cost: 1000, kept: true },
  ],
};

const REMIXED = {
  title: "Budget Goa Without Clubs",
  budget: 19800,
  changes: [
    { type: "removed", label: "Beach resort → local guesthouse in Arambol", saving: 4500 },
    { type: "removed", label: "Club nights → beach bonfires instead", saving: 5000 },
    { type: "removed", label: "Expensive shack dinners → local eateries", saving: 2000 },
    { type: "added", label: "Added Kakolem Tiger Beach (hidden gem)", cost: 200 },
    { type: "added", label: "Added bike rental for all 5 days", cost: 1750 },
    { type: "added", label: "Added rainy season warnings", cost: undefined },
  ],
  saved: 4200,
};

type View = "original" | "remixed";

export default function RemixShowcase() {
  const [view, setView] = useState<View>("original");

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#EEF5F4" }}>
      <div className="section-divider" />

      {/* Blob */}
      <div
        className="absolute top-24 left-0 w-72 h-72 blob-3 pointer-events-none opacity-30"
        style={{ background: "rgba(201,188,162,0.25)", filter: "blur(60px)" }}
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
          <span className="clay-badge clay-badge-warm mb-5 mx-auto">
            <GitFork className="w-3 h-3" /> Remix Feature
          </span>
          <h2 className="heading-section text-4xl sm:text-5xl mb-4">
            Remix someone&apos;s trip{" "}
            <span className="text-lake">into your own.</span>
          </h2>
          <p className="text-base leading-relaxed max-w-lg mx-auto" style={{ color: "#667572" }}>
            Start with a real itinerary, then adjust it for your budget, pace,
            travel style, and season.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div
            className="inline-flex gap-2 p-2 rounded-full"
            style={{
              background: "#F7FAF8",
              boxShadow: "inset 4px 4px 10px rgba(89,102,106,0.14), inset -4px -4px 10px rgba(255,255,255,0.82)",
            }}
          >
            {(["original", "remixed"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setView(tab)}
                className="px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-250 capitalize"
                style={{
                  background:
                    view === tab
                      ? tab === "remixed"
                        ? "linear-gradient(135deg, #54BFCB, #0F6F78)"
                        : "#F7FAF8"
                      : "transparent",
                  color:
                    view === tab
                      ? tab === "remixed"
                        ? "#fff"
                        : "#10201C"
                      : "#B3C4C0",
                  boxShadow:
                    view === tab
                      ? tab === "remixed"
                        ? "5px 5px 14px rgba(15,111,120,0.28), -3px -3px 10px rgba(255,255,255,0.60)"
                        : "5px 5px 14px rgba(89,102,106,0.18), -3px -3px 10px rgba(255,255,255,0.85)"
                      : "none",
                }}
              >
                {tab === "original" ? "Original Trip" : "✦ Remixed Version"}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Card */}
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {view === "original" ? (
              <motion.div
                key="original"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.32 }}
                className="clay-card-lg p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3
                      className="text-2xl font-extrabold mb-1"
                      style={{ fontFamily: "'Outfit', sans-serif", color: "#10201C" }}
                    >
                      {ORIGINAL.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs" style={{ color: "#B3C4C0" }}>
                      <MapPin className="w-3 h-3" /> Goa, India
                    </div>
                  </div>
                  <div
                    className="flex items-center gap-1 text-xl font-extrabold px-4 py-2.5 rounded-2xl"
                    style={{
                      background: "#E3EFEC",
                      boxShadow: "inset 4px 4px 10px rgba(89,102,106,0.12), inset -4px -4px 10px rgba(255,255,255,0.80)",
                      color: "#10201C",
                    }}
                  >
                    <IndianRupee className="w-5 h-5" />
                    {ORIGINAL.budget.toLocaleString("en-IN")}
                  </div>
                </div>

                <div className="space-y-2.5">
                  {ORIGINAL.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-4 py-3 rounded-2xl"
                      style={{
                        background: item.kept
                          ? "linear-gradient(135deg, #D6E8E0, #C8E0D6)"
                          : "#F7FAF8",
                        boxShadow: "3px 3px 8px rgba(89,102,106,0.10), -3px -3px 8px rgba(255,255,255,0.80)",
                        border: "1px solid rgba(255,255,255,0.65)",
                      }}
                    >
                      <span
                        className={`text-sm font-medium ${item.kept ? "" : "line-through"}`}
                        style={{ color: item.kept ? "#203A32" : "#B3C4C0" }}
                      >
                        {item.label}
                      </span>
                      {item.cost && (
                        <span
                          className="text-xs font-bold flex items-center gap-0.5"
                          style={{ color: item.kept ? "#36584A" : "#C9BCA2" }}
                        >
                          <IndianRupee className="w-3 h-3" />
                          {item.cost.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => setView("remixed")}
                    className="clay-btn clay-btn-ghost !text-sm"
                  >
                    <GitFork className="w-4 h-4 text-lake" />
                    See the remixed version
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="remixed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.32 }}
                className="clay-card-lg p-8"
                style={{
                  background: "linear-gradient(145deg, #F0F8F6 0%, #F7FAF8 100%)",
                }}
              >
                <div className="flex items-start justify-between mb-6 gap-3">
                  <div>
                    <div
                      className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2"
                      style={{
                        background: "linear-gradient(135deg, #CFE5E8, #A8D4D9)",
                        color: "#0F6F78",
                        boxShadow: "3px 3px 8px rgba(84,191,203,0.16), -2px -2px 6px rgba(255,255,255,0.80)",
                      }}
                    >
                      <GitFork className="w-2.5 h-2.5" />
                      Remixed from &quot;5 Days in Goa&quot;
                    </div>
                    <h3
                      className="text-2xl font-extrabold mb-1"
                      style={{ fontFamily: "'Outfit', sans-serif", color: "#10201C" }}
                    >
                      {REMIXED.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs" style={{ color: "#B3C4C0" }}>
                      <MapPin className="w-3 h-3" /> Goa, India — by Kabir Mehta
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div
                      className="flex items-center gap-1 text-xl font-extrabold px-4 py-2.5 rounded-2xl"
                      style={{
                        background: "linear-gradient(135deg, #D6E8E0, #C0D9CC)",
                        color: "#203A32",
                        boxShadow: "5px 5px 14px rgba(54,88,74,0.16), -3px -3px 10px rgba(255,255,255,0.80)",
                      }}
                    >
                      <IndianRupee className="w-5 h-5" />
                      {REMIXED.budget.toLocaleString("en-IN")}
                    </div>
                    <div className="text-[11px] font-bold mt-1.5 flex items-center gap-1 justify-end" style={{ color: "#36584A" }}>
                      <Minus className="w-3 h-3" />
                      ₹{REMIXED.saved.toLocaleString("en-IN")} saved
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 mb-5">
                  {REMIXED.changes.map((c, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 * i }}
                      className="flex items-start gap-3 px-4 py-3 rounded-2xl"
                      style={{
                        background: c.type === "removed"
                          ? "linear-gradient(135deg, #F5E0DF, #ECC8C6)"
                          : "linear-gradient(135deg, #D6E8E0, #C8E0D6)",
                        border: `1px solid ${c.type === "removed" ? "rgba(200,150,148,0.25)" : "rgba(84,191,203,0.20)"}`,
                        boxShadow: "3px 3px 8px rgba(89,102,106,0.08), -2px -2px 6px rgba(255,255,255,0.80)",
                      }}
                    >
                      {c.type === "removed"
                        ? <Minus className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        : <Plus className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#0F6F78" }} />}
                      <span className="text-sm font-medium flex-1 leading-snug" style={{ color: c.type === "removed" ? "#6B2828" : "#0F4A52" }}>
                        {c.label}
                      </span>
                      {c.saving && <span className="text-xs font-bold text-rose-500 shrink-0">-₹{c.saving.toLocaleString("en-IN")}</span>}
                      {c.cost && <span className="text-xs font-bold shrink-0" style={{ color: "#36584A" }}>+₹{c.cost.toLocaleString("en-IN")}</span>}
                    </motion.div>
                  ))}
                </div>

                <div
                  className="flex items-center gap-3 px-5 py-4 rounded-2xl mb-6"
                  style={{
                    background: "linear-gradient(135deg, #CFE5E8, #B8D9DE)",
                    border: "1px solid rgba(84,191,203,0.25)",
                    boxShadow: "4px 4px 12px rgba(84,191,203,0.14), -3px -3px 10px rgba(255,255,255,0.80)",
                  }}
                >
                  <CheckCircle className="w-5 h-5 shrink-0" style={{ color: "#0F6F78" }} />
                  <p className="text-sm" style={{ color: "#0F4A52" }}>
                    Budget reduced by{" "}
                    <span className="font-bold">₹{REMIXED.saved.toLocaleString("en-IN")}</span>
                    . Added hidden gems & rainy season notes. Same great experience.
                  </p>
                </div>

                <div className="text-center">
                  <Link href="/create" className="clay-btn clay-btn-primary">
                    <GitFork className="w-4 h-4" /> Remix Your Own Trip
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
