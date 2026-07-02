import Link from "next/link";
import { Bookmark, ArrowRight, Compass } from "lucide-react";

export const metadata = {
  title: "Saved Trips — Roamly",
  description: "Your saved travel itineraries and collections on Roamly.",
};

export default function SavedPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold mb-4"
            style={{
              background: "rgba(167,139,250,0.10)",
              border: "1px solid rgba(167,139,250,0.22)",
              color: "#c4b5fd",
            }}
          >
            <Bookmark className="w-3.5 h-3.5" />
            Saved Trips
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">
            Your Collections
          </h1>
          <p className="text-white/45 text-sm">
            Itineraries you&apos;ve saved for later planning.
          </p>
        </div>

        {/* Empty state */}
        <div
          className="text-center rounded-3xl px-8 py-20"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px dashed rgba(255,255,255,0.12)",
          }}
        >
          <Bookmark className="w-12 h-12 text-violet-400/40 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white/60 mb-2">
            No saved trips yet
          </h2>
          <p className="text-white/30 text-sm mb-6 max-w-md mx-auto">
            Browse itineraries and save the ones that inspire you. They&apos;ll
            appear here for easy access when you&apos;re ready to plan.
          </p>
          <Link
            href="/discover"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
              boxShadow: "0 0 20px rgba(14,165,233,0.25)",
            }}
          >
            <Compass className="w-4 h-4" />
            Explore Itineraries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
