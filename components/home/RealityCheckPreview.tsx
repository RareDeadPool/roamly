import React from "react";
import Link from "next/link";
import { AlertTriangle, Compass, Quote, ArrowRight } from "lucide-react";
import SectionTitle from "../shared/SectionTitle";
import { Card, CardContent } from "../shared/Card";

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
    <section className="py-16 bg-sand-100/50 border-t border-b border-sand-300/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <SectionTitle
            tag="Unfiltered Truth"
            title="Reality Checks"
            subtitle="Understand crowds, scams, weather risks, and actual expenses before booking."
            className="mb-0"
          />
          <Link
            href="/explore?tab=reality-checks"
            className="hidden sm:flex items-center gap-1 text-sm font-bold text-brand-orange-600 hover:text-brand-orange-700 transition-colors mt-4 md:mt-0"
          >
            Read all warnings
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockChecks.map((item) => (
            <Card key={item.id} className="border-amber-200 bg-amber-50/20 hover:border-amber-300 transition-all rounded-2xl shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded">
                    {item.category}
                  </span>
                  <span className="text-xs text-deep-navy-500 font-semibold">{item.destination}</span>
                </div>
                
                <div className="flex gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <h4 className="font-bold text-deep-navy-900 leading-snug">{item.title}</h4>
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-amber-200 absolute -top-3 -left-2 opacity-50" />
                  <p className="text-xs text-deep-navy-600 leading-relaxed pl-4 italic relative z-10">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="text-right text-[10px] text-deep-navy-400 font-bold">
                  &mdash; {item.author}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
