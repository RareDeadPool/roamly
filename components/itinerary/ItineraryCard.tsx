import React from "react";
import Link from "next/link";
import { Compass, Clock, DollarSign, Heart, Bookmark, AlertTriangle, HelpCircle } from "lucide-react";
import { Itinerary } from "../../types/itinerary";
import Badge from "../shared/Badge";
import { Card, CardContent } from "../shared/Card";

interface ItineraryCardProps {
  itinerary: Itinerary;
}

export default function ItineraryCard({ itinerary }: ItineraryCardProps) {
  return (
    <Link href={`/itinerary/${itinerary.id}`} className="group block h-full">
      <Card className="overflow-hidden border border-sand-200 shadow-none hover:shadow-lg transition-all duration-300 rounded-2xl h-full flex flex-col">
        {/* Thumbnail Image */}
        <div className="relative h-48 w-full overflow-hidden bg-sand-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={itinerary.image}
            alt={itinerary.title}
            className="h-full w-full object-cover group-hover:scale-102 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <Badge variant="teal">{itinerary.travelStyle}</Badge>
            <Badge variant="navy" className="capitalize">{itinerary.pace}</Badge>
          </div>
        </div>

        {/* Card Content */}
        <CardContent className="p-5 flex-1 flex flex-col justify-between">
          <div className="space-y-2">
            {/* Creator Row */}
            <div className="flex items-center gap-2 text-xs text-deep-navy-500">
              {itinerary.creatorImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={itinerary.creatorImage}
                  alt={itinerary.creatorName}
                  className="w-5 h-5 rounded-full object-cover border border-sand-300"
                />
              ) : (
                <div className="w-5 h-5 rounded-full bg-sand-300 flex items-center justify-center text-[10px] font-bold">
                  {itinerary.creatorName.charAt(0)}
                </div>
              )}
              <span className="font-semibold">{itinerary.creatorName}</span>
              <span>&bull;</span>
              <span>{itinerary.destination}</span>
            </div>

            {/* Title */}
            <h3 className="font-bold text-deep-navy-900 line-clamp-2 text-base group-hover:text-brand-orange-600 transition-colors leading-snug">
              {itinerary.title}
            </h3>

            {/* Description */}
            <p className="text-xs text-deep-navy-500 line-clamp-2 leading-relaxed">
              {itinerary.description}
            </p>
          </div>

          <div className="mt-5 space-y-4 pt-4 border-t border-sand-150">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-deep-navy-700">
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-brand-teal-600" />
                <span>{itinerary.duration} Days</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-brand-orange-600" />
                <span>${itinerary.budget} USD</span>
              </div>
            </div>

            {/* Reality & Regret Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {itinerary.realityChecks.length > 0 && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-50 text-[10px] font-bold text-amber-700 border border-amber-200">
                  <AlertTriangle className="w-3 h-3 text-amber-600" />
                  {itinerary.realityChecks.length} Reality Checks
                </span>
              )}
              {itinerary.regretsMissing.length > 0 && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-rose-50 text-[10px] font-bold text-rose-700 border border-rose-200">
                  <HelpCircle className="w-3 h-3 text-rose-600" />
                  {itinerary.regretsMissing.length} Regrets Missing
                </span>
              )}
            </div>

            {/* Engagement Counts */}
            <div className="flex items-center justify-between text-xs text-deep-navy-400 font-bold border-t border-sand-100 pt-3">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 hover:text-brand-orange-600 transition-colors">
                  <Heart className="w-3.5 h-3.5" />
                  {itinerary.likesCount}
                </span>
                <span className="flex items-center gap-1 hover:text-brand-teal-600 transition-colors">
                  <Bookmark className="w-3.5 h-3.5" />
                  {itinerary.bookmarksCount}
                </span>
              </div>
              {itinerary.remixedFromId && (
                <span className="text-[10px] font-bold text-brand-teal-700 bg-brand-teal-50 px-1.5 py-0.5 rounded">
                  Remixed
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
