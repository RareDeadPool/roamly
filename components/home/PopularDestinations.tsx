import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { DESTINATIONS } from "../../data/destinations";

export default function PopularDestinations() {
  return (
    <section className="py-20 relative section-glass">
      <div className="section-divider" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="tag-pill mb-4">Destinations</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Most Discussed <span className="gradient-text">Locations</span>
            </h2>
            <p className="text-white/45 text-sm mt-2 max-w-md">
              Curated spots with highly-rated reality check notes.
            </p>
          </div>
          <Link
            href="/explore"
            className="hidden sm:flex items-center gap-1.5 text-sm font-bold text-orange-400 hover:text-orange-300 transition-colors glass px-4 py-2 rounded-xl"
          >
            See all places
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.slice(0, 3).map((dest) => (
            <Link key={dest.id} href={`/explore?q=${dest.name}`} className="group">
              <div
                className="rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-350 hover:-translate-y-1.5"
                style={{
                  background: "rgba(255, 255, 255, 0.09)",
                  backdropFilter: "blur(28px) saturate(1.8)",
                  WebkitBackdropFilter: "blur(28px) saturate(1.8)",
                  border: "1px solid rgba(255, 255, 255, 0.16)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.11)",
                }}
              >
                <div className="relative h-56 w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-orange-400" />
                    <span className="font-bold text-lg">{dest.name}</span>
                    <span className="text-xs text-white/50">, {dest.country}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-white/75 leading-relaxed mb-6">
                    {dest.description}
                  </p>
                  <div className="flex items-center justify-between border-t border-white/8 pt-4 mt-auto">
                    <span className="text-xs font-bold uppercase tracking-wider text-white/60">
                      Budget: <span className="text-teal-400 font-extrabold">{dest.averageBudget}</span>
                    </span>
                    <span className="text-xs font-bold text-white/60">
                      {dest.averageDuration}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
