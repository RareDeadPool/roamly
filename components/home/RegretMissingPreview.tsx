import React from "react";
import Link from "next/link";
import { HelpCircle, ArrowRight, ThumbsDown } from "lucide-react";
import SectionTitle from "../shared/SectionTitle";
import { Card, CardContent } from "../shared/Card";

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
    <section className="py-16 bg-white border-b border-sand-300/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <SectionTitle
            tag="Avoid Travel Regrets"
            title="What People Regret Missing"
            subtitle="Learn from other travelers' misses. Add these spots to your bucket list to make sure your trip is complete."
            className="mb-0"
          />
          <Link
            href="/explore?tab=regrets"
            className="hidden sm:flex items-center gap-1 text-sm font-bold text-brand-orange-600 hover:text-brand-orange-700 transition-colors mt-4 md:mt-0"
          >
            Read all regrets
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockRegrets.map((item) => (
            <Card key={item.id} className="border-rose-200 bg-rose-50/10 hover:border-rose-300 transition-all rounded-2xl shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded">
                    {item.regretType.replace("_", " ")}
                  </span>
                  <span className="text-xs text-deep-navy-500 font-semibold">{item.destination}</span>
                </div>
                
                <div className="flex gap-2">
                  <HelpCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <h4 className="font-bold text-deep-navy-900 leading-snug">{item.placeName}</h4>
                </div>

                <p className="text-xs text-deep-navy-600 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
