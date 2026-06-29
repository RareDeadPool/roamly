import React from "react";
import Link from "next/link";
import { TRAVEL_STYLES_DATA } from "../../data/travelStyles";

export default function TravelStyles() {
  return (
    <section className="py-20 relative section-glass">
      <div className="section-divider" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="tag-pill mx-auto mb-4 w-fit">Find Your Vibe</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Travel by <span className="gradient-text">Style</span>
          </h2>
          <p className="text-white/45 text-sm mt-3 max-w-lg mx-auto">
            Whether you&apos;re on a shoestring, seeking luxury, or hunting street food—we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {TRAVEL_STYLES_DATA.map((style) => (
            <Link key={style.id} href={`/explore?style=${style.id}`} className="group">
              <div className="relative overflow-hidden h-52 rounded-2xl border border-white/15 shadow-lg
                             transition-all duration-500 hover:-translate-y-1
                             hover:border-white/28 hover:shadow-2xl">

                {/* Background Image — fills the card */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={style.imageUrl}
                  alt={style.label}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-108
                             transition-transform duration-700"
                />

                {/* Glass label panel at the bottom — THIS has the blur */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{
                    background: "rgba(10, 15, 35, 0.45)",
                    backdropFilter: "blur(20px) saturate(1.6)",
                    WebkitBackdropFilter: "blur(20px) saturate(1.6)",
                    borderTop: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <h3 className="font-bold text-base text-white mb-1 group-hover:text-orange-400 transition-colors text-shadow-sm">
                    {style.label}
                  </h3>
                  <p className="text-xs text-white/75 line-clamp-1 leading-relaxed">
                    {style.description}
                  </p>
                </div>

                {/* Frosted glass top-edge highlight */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/22 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
