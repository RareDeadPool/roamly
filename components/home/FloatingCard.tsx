"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, IndianRupee, AlertTriangle, Frown, Gem } from "lucide-react";

interface DayPreview {
  day: number;
  title: string;
}

interface FloatingCardProps {
  title: string;
  destination: string;
  duration: number;
  budget: string;
  days: DayPreview[];
  realityCheck: string;
  regret: string;
  delay?: number;
}

export default function FloatingCard({
  title,
  destination,
  duration,
  budget,
  days,
  realityCheck,
  regret,
  delay = 0,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[340px]"
    >
      {/* Soft glow beneath */}
      <div
        className="absolute inset-0 rounded-[2rem] blur-2xl scale-95 pointer-events-none"
        style={{ background: "rgba(84,191,203,0.18)" }}
      />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="relative rounded-[2rem] overflow-hidden"
        style={{
          background: "rgba(247,250,248,0.88)",
          backdropFilter: "blur(28px) saturate(1.6)",
          WebkitBackdropFilter: "blur(28px) saturate(1.6)",
          border: "1.5px solid rgba(255,255,255,0.84)",
          boxShadow:
            "20px 24px 56px rgba(89,102,106,0.22), -10px -10px 32px rgba(255,255,255,0.70)",
        }}
      >
        {/* Header bar */}
        <div
          className="px-5 pt-5 pb-4"
          style={{ borderBottom: "1px solid rgba(84,191,203,0.14)" }}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3
                className="text-lg font-extrabold leading-tight mb-1"
                style={{ fontFamily: "'Outfit', sans-serif", color: "#10201C" }}
              >
                {title}
              </h3>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" style={{ color: "#54BFCB" }} />
                <span className="text-xs font-medium" style={{ color: "#667572" }}>
                  {destination}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1.5 shrink-0">
              <span
                className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #CFE5E8, #A8D4D9)",
                  color: "#0F6F78",
                  boxShadow: "3px 3px 8px rgba(84,191,203,0.18), -2px -2px 6px rgba(255,255,255,0.80)",
                }}
              >
                <Calendar className="w-3 h-3" />
                {duration} Days
              </span>
              <span
                className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #D6E8E0, #C0D9CC)",
                  color: "#203A32",
                  boxShadow: "3px 3px 8px rgba(32,58,50,0.14), -2px -2px 6px rgba(255,255,255,0.80)",
                }}
              >
                <IndianRupee className="w-3 h-3" />
                {budget}
              </span>
            </div>
          </div>
        </div>

        {/* Day previews */}
        <div className="px-5 py-4 space-y-2.5">
          {days.map((d, i) => (
            <motion.div
              key={d.day}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.12 * i + 0.3 }}
              className="flex items-center gap-3"
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-extrabold shrink-0"
                style={{
                  background: "linear-gradient(135deg, #CFE5E8, #A8D4D9)",
                  color: "#0F6F78",
                  boxShadow: "2px 2px 6px rgba(84,191,203,0.20), -2px -2px 5px rgba(255,255,255,0.80)",
                }}
              >
                {d.day}
              </div>
              <span className="text-xs font-medium" style={{ color: "#667572" }}>
                {d.title}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Reality Check */}
        <div
          className="mx-4 mb-3 rounded-2xl px-4 py-3 flex items-start gap-2.5"
          style={{
            background: "linear-gradient(135deg, #F5EBD8, #EAD9BC)",
            border: "1px solid rgba(201,188,162,0.40)",
            boxShadow: "inset 3px 3px 8px rgba(89,102,106,0.08), inset -3px -3px 8px rgba(255,255,255,0.70)",
          }}
        >
          <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: "#7A5835" }} />
          <div>
            <div className="text-[9px] font-extrabold uppercase tracking-widest mb-0.5" style={{ color: "#7A5835" }}>
              Reality Check
            </div>
            <p className="text-[11px] leading-relaxed" style={{ color: "#5A4535" }}>
              {realityCheck}
            </p>
          </div>
        </div>

        {/* Regret */}
        <div
          className="mx-4 mb-5 rounded-2xl px-4 py-3 flex items-start gap-2.5"
          style={{
            background: "linear-gradient(135deg, #F5E0DF, #ECC8C6)",
            border: "1px solid rgba(200,150,148,0.30)",
            boxShadow: "inset 3px 3px 8px rgba(89,102,106,0.08), inset -3px -3px 8px rgba(255,255,255,0.70)",
          }}
        >
          <Frown className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: "#8B3535" }} />
          <div>
            <div className="text-[9px] font-extrabold uppercase tracking-widest mb-0.5" style={{ color: "#8B3535" }}>
              Regret
            </div>
            <p className="text-[11px] leading-relaxed" style={{ color: "#6B2828" }}>
              {regret}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div
          className="px-5 py-3 flex items-center justify-between"
          style={{ borderTop: "1px solid rgba(84,191,203,0.12)" }}
        >
          <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#B3C4C0" }}>
            Real traveler plan
          </span>
          <div className="flex items-center gap-1">
            <Gem className="w-3 h-3" style={{ color: "#54BFCB" }} />
            <span className="text-[10px] font-bold" style={{ color: "#0F6F78" }}>
              Remixable
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
