import React from "react";
import Link from "next/link";
import { Compass, Sparkles, AlertCircle } from "lucide-react";
import Button from "../shared/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 grid-bg">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-brand-orange-400/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-brand-teal-400/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Banner Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-orange-50 border border-brand-orange-200 text-xs font-bold text-brand-orange-700 mb-6 animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          The Anti-Tourist Guide
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold tracking-tight text-deep-navy-900 sm:text-6xl max-w-4xl mx-auto leading-[1.1] mb-6">
          Discover Real Trips. <br />
          Avoid <span className="text-brand-orange-600">Hidden Scams</span> &amp; Regrets.
        </h1>

        {/* Description */}
        <p className="text-lg text-deep-navy-600 max-w-2xl mx-auto leading-relaxed mb-10">
          Roamly is a travel itinerary sharing platform powered by real user experiences. Explore day-wise plans, honest budgets, reality checks, and places people regret skipping.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/explore">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              <Compass className="w-5 h-5" />
              Explore Real Itineraries
            </Button>
          </Link>
          <Link href="/create">
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-deep-navy-800">
              Share Your Journey
            </Button>
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-20 border-t border-sand-300 pt-10 text-left">
          <div className="space-y-1">
            <div className="text-2xl font-bold text-brand-orange-600">100%</div>
            <div className="text-xs uppercase font-bold tracking-wider text-deep-navy-500">User Generated</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold text-brand-teal-600">No Booking</div>
            <div className="text-xs uppercase font-bold tracking-wider text-deep-navy-500">Unbiased Reviews</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold text-deep-navy-800">Reality Checks</div>
            <div className="text-xs uppercase font-bold tracking-wider text-deep-navy-500">Crowds &amp; Hidden Costs</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold text-brand-orange-500">Missed Gems</div>
            <div className="text-xs uppercase font-bold tracking-wider text-deep-navy-500">Zero-Regret Itineraries</div>
          </div>
        </div>
      </div>
    </section>
  );
}
