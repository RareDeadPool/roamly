import React from "react";
import Link from "next/link";
import { AlertTriangle, Quote, ArrowRight } from "lucide-react";

export default function RealityCheckPreview() {
  const mockChecks = [
    {
      id: 1,
      destination: "Kyoto, Japan",
      category: "Crowd Levels 👥",
      title: "Arashiyama Bamboo Forest at 10 AM",
      quote: "Expect a wall of selfie-sticks and crowds. The quiet, spiritual walk shown on Instagram does not exist unless you go before 7:00 AM.",
      author: "Emiko T."
    },
    {
      id: 2,
      destination: "Positano, Italy",
      category: "Hidden Costs / Prices 💸",
      title: "Valet & Private Parking Surcharges",
      quote: "Valet parking for a small car is up to 100 Euros per day. Ferries are cheaper, faster, and offer better coastal views.",
      author: "Marco R."
    },
    {
      id: 3,
      destination: "Iceland Golden Circle",
      category: "Weather Realities ⛈️",
      title: "Car Rental Door Liability warnings",
      quote: "Winds can hit 50+ mph. Renters are fully responsible for doors getting ripped backward by gusts. Park facing the wind and hold doors tight.",
      author: "Klara H."
    }
  ];

  return (
    <section className="py-20 relative section-glass">
      <div className="section-divider" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="tag-pill mb-4">Unfiltered Truth</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Reality <span className="gradient-text">Checks</span>
            </h2>
            <p className="text-white/45 text-sm mt-2 max-w-md">
              Understand crowds, scams, weather risks, and actual expenses before booking.
            </p>
          </div>
          <Link
            href="/explore?tab=reality-checks"
            className="hidden sm:flex items-center gap-1.5 text-sm font-bold text-orange-400 hover:text-orange-300 transition-colors glass px-4 py-2 rounded-xl mt-4 md:mt-0"
          >
            Read all warnings
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockChecks.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl p-6 space-y-4 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255, 255, 255, 0.09)",
                backdropFilter: "blur(28px) saturate(1.7)",
                WebkitBackdropFilter: "blur(28px) saturate(1.7)",
                border: "1px solid rgba(251, 191, 36, 0.20)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.10)",
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300 bg-amber-500/15 border border-amber-400/25 px-2.5 py-0.5 rounded-lg">
                  {item.category}
                </span>
                <span className="text-xs text-white/40 font-semibold">{item.destination}</span>
              </div>

              <div className="flex gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <h4 className="font-bold text-white leading-snug text-shadow-sm">{item.title}</h4>
              </div>

              <div className="relative">
                <Quote className="w-8 h-8 text-amber-400/20 absolute -top-3 -left-2" />
                <p className="text-xs text-white/75 leading-relaxed pl-4 italic relative z-10">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="text-right text-[10px] text-white/55 font-bold">
                &mdash; {item.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
