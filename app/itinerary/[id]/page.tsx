"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Compass, Clock, DollarSign, Heart, Bookmark, Shuffle, ArrowLeft } from "lucide-react";
import Container from "../../../components/layout/Container";
import Button from "../../../components/shared/Button";
import Badge from "../../../components/shared/Badge";
import DayTimeline from "../../../components/itinerary/DayTimeline";
import BudgetBreakdown from "../../../components/itinerary/BudgetBreakdown";
import RealityCheckCard from "../../../components/itinerary/RealityCheckCard";
import RegretMissingSection from "../../../components/itinerary/RegretMissingSection";
import CommentSection from "../../../components/itinerary/CommentSection";
import SimilarItineraries from "../../../components/itinerary/SimilarItineraries";
import { DEMO_ITINERARIES } from "../../../data/demoItineraries";

export default function ItineraryDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  // Find the matching itinerary or fallback to Kyoto
  const itinerary = DEMO_ITINERARIES.find((item) => item.id === id) || DEMO_ITINERARIES[0];

  return (
    <div className="bg-sand-100/30 min-h-screen pb-16">
      {/* Header Banner */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden bg-deep-navy-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={itinerary.image}
          alt={itinerary.title}
          className="w-full h-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy-950/80 via-deep-navy-950/20 to-transparent" />
        
        {/* Banner Details */}
        <div className="absolute bottom-6 left-0 w-full text-white">
          <Container>
            <div className="space-y-3 text-left">
              <Link
                href="/explore"
                className="inline-flex items-center gap-1 text-xs font-bold text-sand-200 hover:text-white transition-colors mb-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Explore
              </Link>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="teal">{itinerary.travelStyle}</Badge>
                <Badge variant="navy" className="capitalize">{itinerary.pace}</Badge>
              </div>

              <h1 className="text-2xl font-black md:text-4xl tracking-tight leading-tight max-w-4xl">
                {itinerary.title}
              </h1>

              <div className="flex items-center gap-3 text-xs text-sand-200 font-bold flex-wrap pt-1">
                <span>By {itinerary.creatorName}</span>
                <span>&bull;</span>
                <span>{itinerary.destination}</span>
                <span>&bull;</span>
                <span>Published {new Date(itinerary.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Main Content Layout */}
      <Container className="mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Itinerary Itinerary Steps & Comments */}
          <div className="lg:col-span-2 space-y-10 text-left">
            {/* Description */}
            <div className="bg-white border border-sand-200 p-6 rounded-2xl space-y-3">
              <h3 className="text-sm font-black text-deep-navy-900">Overview</h3>
              <p className="text-sm text-deep-navy-600 leading-relaxed">
                {itinerary.description}
              </p>
            </div>

            {/* Timeline */}
            <div className="bg-white border border-sand-200 p-6 sm:p-8 rounded-2xl space-y-6">
              <h3 className="text-lg font-extrabold text-deep-navy-900 border-b border-sand-300 pb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-teal-600" />
                Day-by-Day Schedule
              </h3>
              <DayTimeline days={itinerary.days} />
            </div>

            {/* Regrets */}
            <RegretMissingSection regrets={itinerary.regretsMissing} />

            {/* Comments */}
            <div className="bg-white border border-sand-200 p-6 sm:p-8 rounded-2xl">
              <CommentSection itineraryId={itinerary.id} />
            </div>
          </div>

          {/* Right Column: Sticky Summary & Reality Warnings */}
          <div className="lg:col-span-1 space-y-6 text-left">
            {/* Action Bar Card */}
            <div className="bg-white border border-sand-200 p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between text-xs text-deep-navy-450 font-bold">
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                  {itinerary.likesCount} Likes
                </span>
                <span className="flex items-center gap-1">
                  <Bookmark className="w-4 h-4 text-brand-teal-600" />
                  {itinerary.bookmarksCount} Bookmarks
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <Link href="/create">
                  <Button variant="teal" className="w-full justify-center py-3 shadow-none text-sm">
                    <Shuffle className="w-4 h-4" />
                    Remix This Itinerary
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-center py-3 text-deep-navy-800 text-sm">
                  Save to Collection
                </Button>
              </div>
            </div>

            {/* Budget Breakdown */}
            <BudgetBreakdown budget={itinerary.budget} breakdown={itinerary.budgetBreakdown} />

            {/* Reality Checks warnings */}
            {itinerary.realityChecks.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-deep-navy-500">
                  Reality Checks ({itinerary.realityChecks.length})
                </h3>
                {itinerary.realityChecks.map((check) => (
                  <RealityCheckCard key={check.id} check={check} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Similar Recommendations */}
        <div className="mt-16 border-t border-sand-300 pt-10">
          <SimilarItineraries currentItinerary={itinerary} />
        </div>
      </Container>
    </div>
  );
}
