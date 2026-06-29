import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { DESTINATIONS } from "../../data/destinations";
import SectionTitle from "../shared/SectionTitle";
import { Card, CardContent } from "../shared/Card";

export default function PopularDestinations() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <SectionTitle
            tag="Destinations"
            title="Most Discussed Locations"
            subtitle="Curated spots with highly-rated reality check notes."
            className="mb-0"
          />
          <Link
            href="/explore"
            className="hidden sm:flex items-center gap-1 text-sm font-bold text-brand-orange-600 hover:text-brand-orange-700 transition-colors"
          >
            See all places
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.slice(0, 3).map((dest) => (
            <Link key={dest.id} href={`/explore?q=${dest.name}`} className="group">
              <Card className="overflow-hidden border border-sand-200 shadow-none hover:shadow-lg transition-all duration-300 rounded-2xl h-full flex flex-col">
                <div className="relative h-56 w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-brand-orange-400" />
                    <span className="font-bold text-lg">{dest.name}</span>
                    <span className="text-xs text-sand-200">, {dest.country}</span>
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-deep-navy-500 leading-relaxed mb-6">
                    {dest.description}
                  </p>
                  <div className="flex items-center justify-between border-t border-sand-150 pt-4 mt-auto">
                    <span className="text-xs font-bold uppercase tracking-wider text-deep-navy-400">
                      Budget: <span className="text-brand-teal-600 font-extrabold">{dest.averageBudget}</span>
                    </span>
                    <span className="text-xs font-bold text-deep-navy-500">
                      {dest.averageDuration}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
