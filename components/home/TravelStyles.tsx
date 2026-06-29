import React from "react";
import Link from "next/link";
import { TRAVEL_STYLES_DATA } from "../../data/travelStyles";
import SectionTitle from "../shared/SectionTitle";
import { Card } from "../shared/Card";

export default function TravelStyles() {
  return (
    <section className="py-16 bg-white border-t border-sand-300/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          align="center"
          tag="Find Your Vibe"
          title="Travel by Style"
          subtitle="Whether you are traveling on shoestrings, seeking ultimate luxury, or hunting for street food, we have got you covered."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {TRAVEL_STYLES_DATA.map((style) => (
            <Link key={style.id} href={`/explore?style=${style.id}`} className="group">
              <Card className="relative overflow-hidden h-48 border border-sand-200 shadow-none hover:shadow-lg transition-all duration-300 rounded-2xl">
                {/* Background Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={style.imageUrl}
                  alt={style.label}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy-950/80 via-deep-navy-950/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-brand-orange-400 transition-colors">
                    {style.label}
                  </h3>
                  <p className="text-xs text-sand-200 line-clamp-2 leading-relaxed">
                    {style.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
