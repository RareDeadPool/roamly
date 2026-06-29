import React from "react";
import Link from "next/link";
import { Compass, Clock, DollarSign, Heart, Bookmark, AlertTriangle, HelpCircle, MapPin } from "lucide-react";
import { Itinerary } from "../../types/itinerary";

interface ItineraryCardProps {
  itinerary: Itinerary;
}

export default function ItineraryCard({ itinerary }: ItineraryCardProps) {
  return (
    <Link href={`/itinerary/${itinerary.id}`} className="group block h-full">
      <div
        className="rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-350
                   hover:-translate-y-1.5"
        style={{
          background: "rgba(255, 255, 255, 0.10)",
          backdropFilter: "blur(28px) saturate(1.8) brightness(1.08)",
          WebkitBackdropFilter: "blur(28px) saturate(1.8) brightness(1.08)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.13)",
        }}
      >
        {/* Thumbnail Image */}
        <div className="relative h-48 w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={itinerary.image}
            alt={itinerary.title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Badges overlay */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-teal-500/20 border border-teal-400/30 text-teal-300 text-[10px] font-bold backdrop-blur-sm">
              {itinerary.travelStyle}
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-white/10 border border-white/20 text-white text-[10px] font-bold capitalize backdrop-blur-sm">
              {itinerary.pace}
            </span>
          </div>

          {/* Price tag */}
          <div className="absolute bottom-3 right-3">
            <span className="glass-strong px-3 py-1 rounded-xl text-white font-extrabold text-sm">
              ${itinerary.budget}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div className="space-y-2">
            {/* Creator Row */}
            <div className="flex items-center gap-2 text-xs text-white/65">
              {itinerary.creatorImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={itinerary.creatorImage}
                  alt={itinerary.creatorName}
                  className="w-5 h-5 rounded-full object-cover border border-white/25"
                />
              ) : (
                <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-[10px] font-bold text-white">
                  {itinerary.creatorName.charAt(0)}
                </div>
              )}
              <span className="font-semibold text-white/85">{itinerary.creatorName}</span>
              <span className="text-white/35">•</span>
              <span className="flex items-center gap-0.5 text-white/65">
                <MapPin className="w-3 h-3 text-orange-400" />
                {itinerary.destination}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-bold text-white line-clamp-2 text-base group-hover:text-orange-400 transition-colors leading-snug text-shadow-sm">
              {itinerary.title}
            </h3>

            {/* Description */}
            <p className="text-xs text-white/65 line-clamp-2 leading-relaxed">
              {itinerary.description}
            </p>
          </div>

          <div className="mt-4 space-y-3 pt-4 border-t border-white/8">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-white/80">
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                <span>{itinerary.duration} Days</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-orange-400" />
                <span>${itinerary.budget} USD</span>
              </div>
            </div>

            {/* Reality & Regret Badges */}
            <div className="flex flex-wrap gap-2">
              {itinerary.realityChecks.length > 0 && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-amber-500/15 border border-amber-400/25 text-[10px] font-bold text-amber-300">
                  <AlertTriangle className="w-3 h-3" />
                  {itinerary.realityChecks.length} Reality Checks
                </span>
              )}
              {itinerary.regretsMissing.length > 0 && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-rose-500/15 border border-rose-400/25 text-[10px] font-bold text-rose-300">
                  <HelpCircle className="w-3 h-3" />
                  {itinerary.regretsMissing.length} Regrets Missing
                </span>
              )}
            </div>

            {/* Engagement Counts */}
            <div className="flex items-center justify-between text-xs text-white/55 font-bold pt-2 border-t border-white/10">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 hover:text-orange-400 transition-colors cursor-pointer">
                  <Heart className="w-3.5 h-3.5" />
                  {itinerary.likesCount}
                </span>
                <span className="flex items-center gap-1 hover:text-teal-400 transition-colors cursor-pointer">
                  <Bookmark className="w-3.5 h-3.5" />
                  {itinerary.bookmarksCount}
                </span>
              </div>
              {itinerary.remixedFromId && (
                <span className="text-[10px] font-bold text-teal-400 bg-teal-500/10 border border-teal-400/20 px-1.5 py-0.5 rounded-lg">
                  Remixed
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
