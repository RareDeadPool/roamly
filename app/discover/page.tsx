import Link from "next/link";
import { Compass, Search, Filter, MapPin, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Discover Itineraries — Roamly",
  description:
    "Browse thousands of real day-wise travel itineraries created by travelers. Filter by destination, budget, and travel style.",
};

export default function DiscoverPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold mb-4"
            style={{
              background: "rgba(56,189,248,0.10)",
              border: "1px solid rgba(56,189,248,0.22)",
              color: "#7dd3fc",
            }}
          >
            <Compass className="w-3.5 h-3.5" />
            Discover Itineraries
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Find Your Next Adventure
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            12,000+ day-wise itineraries from real travelers across India and beyond.
          </p>
        </div>

        {/* Search bar placeholder */}
        <div
          className="flex items-center gap-3 rounded-2xl px-5 py-4 mb-10 max-w-2xl mx-auto"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.14)",
            backdropFilter: "blur(20px)",
          }}
        >
          <Search className="w-5 h-5 text-white/35 shrink-0" />
          <span className="text-white/35 text-sm">
            Search destinations, itineraries, budgets...
          </span>
          <div className="ml-auto flex items-center gap-2 shrink-0">
            <button
              className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg"
              style={{
                background: "rgba(56,189,248,0.12)",
                border: "1px solid rgba(56,189,248,0.22)",
                color: "#7dd3fc",
              }}
            >
              <Filter className="w-3.5 h-3.5" />
              Filter
            </button>
          </div>
        </div>

        {/* Coming soon */}
        <div
          className="text-center rounded-3xl px-8 py-16"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px dashed rgba(255,255,255,0.12)",
          }}
        >
          <MapPin className="w-12 h-12 text-sky-400/40 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white/60 mb-2">
            Full discover page coming soon
          </h2>
          <p className="text-white/30 text-sm mb-6">
            Browse, filter, and save itineraries from the community.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-sky-300 transition-colors"
          >
            Back to Home <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
