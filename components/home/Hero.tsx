import React from "react";
import Link from "next/link";
import { Compass, MapPin, Sparkles, ArrowRight, Star } from "lucide-react";

const TRENDING_DESTINATIONS = [
  {
    name: "Tropical Beach",
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&q=80",
  },
  {
    name: "European City",
    location: "Prague, Czechia",
    image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=400&q=80",
  },
  {
    name: "Mountain Range",
    location: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
  },
];

const PARTNERS = ["Booking.com", "Airbnb", "Expedia", "Tripadvisor", "Outdoorsy"];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden grid-bg pt-16">
      {/* Floating atmospheric orbs */}
      <div className="absolute top-1/4 left-16 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute top-1/3 right-24 w-96 h-96 rounded-full bg-sky-400/8 blur-3xl animate-float pointer-events-none" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-40 left-1/3 w-56 h-56 rounded-full bg-orange-500/8 blur-3xl animate-float pointer-events-none" style={{ animationDelay: "4s" }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="tag-pill mb-8 animate-slide-up">
          <Sparkles className="w-3.5 h-3.5" />
          The Anti-Tourist Guide
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-6 max-w-5xl animate-slide-up text-shadow-lg"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          Start Your Journey to Your{" "}
          <span className="gradient-text">Dream Destination</span>{" "}
          Here.
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg text-white/80 max-w-2xl leading-relaxed mb-10 animate-slide-up text-shadow-sm"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          Explore breathtaking locations, plan with real traveler data, and create lasting memories.
          Whether it&apos;s a serene escape or a thrilling adventure — your perfect journey begins right here.
        </p>

        {/* Toggle Filter Bar */}
        <div className="toggle-glass mb-10 animate-slide-up" style={{ animationDelay: "0.28s", opacity: 0 }}>
          <button className="active">Hotels</button>
          <button>Car Rental</button>
          <button>Events</button>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up"
          style={{ animationDelay: "0.34s", opacity: 0 }}
        >
          <Link
            href="/explore"
            className="flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-base hover:from-orange-400 hover:to-orange-500 transition-all duration-300 shadow-2xl glow-orange"
          >
            <Compass className="w-5 h-5" />
            Explore Itineraries
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/create"
            className="flex items-center gap-2 px-8 py-3.5 rounded-2xl glass text-white/80 font-semibold text-base hover:text-white transition-all duration-300"
          >
            Share Your Journey
          </Link>
        </div>

        {/* ── Trending Destinations ─────────────────── */}
        <div className="w-full max-w-5xl animate-slide-up" style={{ animationDelay: "0.42s", opacity: 0 }}>
          <div className="flex items-center gap-2 text-white/75 text-xs font-bold uppercase tracking-widest mb-4 text-shadow-sm">
            <Star className="w-3.5 h-3.5 text-orange-400" />
            Trending Destinations
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
            {TRENDING_DESTINATIONS.map((dest) => (
              <Link
                key={dest.name}
                href={`/explore?q=${dest.name}`}
                className="glass-card rounded-2xl overflow-hidden flex items-center gap-3 p-3 group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-16 h-16 rounded-xl object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="text-left">
                  <div className="font-bold text-white text-sm text-shadow-sm">{dest.name}</div>
                  <div className="flex items-center gap-1 text-white/70 text-xs mt-0.5">
                    <MapPin className="w-3 h-3 text-orange-400" />
                    {dest.location}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Stats Row ─────────────────────────────── */}
        <div
          className="w-full max-w-4xl glass rounded-2xl px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-left animate-slide-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          <div>
            <div className="text-2xl font-extrabold gradient-text-orange text-shadow-sm">100%</div>
            <div className="text-[11px] uppercase font-bold tracking-wider text-white/60 mt-0.5">User Generated</div>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-sky-300 text-shadow-sm">No Booking</div>
            <div className="text-[11px] uppercase font-bold tracking-wider text-white/60 mt-0.5">Unbiased Reviews</div>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white text-shadow-sm">Reality Checks</div>
            <div className="text-[11px] uppercase font-bold tracking-wider text-white/60 mt-0.5">Crowds & Hidden Costs</div>
          </div>
          <div>
            <div className="text-2xl font-extrabold gradient-text-orange text-shadow-sm">Missed Gems</div>
            <div className="text-[11px] uppercase font-bold tracking-wider text-white/60 mt-0.5">Zero-Regret Trips</div>
          </div>
        </div>
      </div>

      {/* ── Partner Bar ───────────────────────────── */}
      <div className="relative z-10 partner-bar py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="text-white/40 font-bold text-sm tracking-wider hover:text-white/70 transition-colors duration-200 cursor-default select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
