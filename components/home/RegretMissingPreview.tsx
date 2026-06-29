import React from "react";
import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";

export default function RegretMissingPreview() {
  const mockRegrets = [
    {
      id: 1,
      destination: "Rome, Italy",
      placeName: "Palazzo Colonna on Saturday morning",
      description: "We didn't realize it is only open to the public on Saturday mornings. We missed the most jaw-dropping gallery in Rome because of poor scheduling.",
      regretType: "missed_completely"
    },
    {
      id: 2,
      destination: "Kyoto, Japan",
      placeName: "Sanjusangendo Temple",
      description: "We thought it was just another temple. We later saw photos of the 1,001 wooden statues inside and realized we made a huge mistake skipping it.",
      regretType: "skipped"
    },
    {
      id: 3,
      destination: "Amalfi Coast, Italy",
      placeName: "Fiordo di Furore Beach",
      description: "We rushed past it because of parking stress. We should have taken a boat taxi from Amalfi port instead of trying to drive.",
      regretType: "rushed"
    }
  ];

  return (
    <section className="py-20 relative section-glass">
      <div className="section-divider" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="tag-pill mb-4">Avoid Travel Regrets</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What People Regret <span className="gradient-text">Missing</span>
            </h2>
            <p className="text-white/45 text-sm mt-2 max-w-md">
              Learn from other travelers&apos; misses. Add these spots to your bucket list for a zero-regret trip.
            </p>
          </div>
          <Link
            href="/explore?tab=regrets"
            className="hidden sm:flex items-center gap-1.5 text-sm font-bold text-orange-400 hover:text-orange-300 transition-colors glass px-4 py-2 rounded-xl mt-4 md:mt-0"
          >
            Read all regrets
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockRegrets.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl p-6 space-y-4 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255, 255, 255, 0.09)",
                backdropFilter: "blur(28px) saturate(1.7)",
                WebkitBackdropFilter: "blur(28px) saturate(1.7)",
                border: "1px solid rgba(244, 63, 94, 0.20)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.10)",
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-300 bg-rose-500/15 border border-rose-400/25 px-2.5 py-0.5 rounded-lg">
                  {item.regretType.replace("_", " ")}
                </span>
                <span className="text-xs text-white/40 font-semibold">{item.destination}</span>
              </div>

              <div className="flex gap-2">
                <HelpCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <h4 className="font-bold text-white leading-snug text-shadow-sm">{item.placeName}</h4>
              </div>

              <p className="text-xs text-white/75 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
