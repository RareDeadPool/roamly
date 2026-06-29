"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Plus, BookOpen, Bookmark, PenTool, Shuffle, CheckCircle2 } from "lucide-react";
import Container from "../../components/layout/Container";
import DashboardStats from "../../components/dashboard/DashboardStats";
import MyItineraries from "../../components/dashboard/MyItineraries";
import SavedItineraries from "../../components/dashboard/SavedItineraries";
import DraftItineraries from "../../components/dashboard/DraftItineraries";
import RemixedItineraries from "../../components/dashboard/RemixedItineraries";
import LoadingSpinner from "../../components/shared/LoadingSpinner";

function DashboardContent() {
  const [activeTab, setActiveTab] = useState<"my" | "saved" | "drafts" | "remixed">("my");
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("publish") === "success") {
      setShowSuccessBanner(true);
      const timer = setTimeout(() => setShowSuccessBanner(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  const tabs = [
    { id: "my",      label: "My Itineraries", icon: <BookOpen className="w-4 h-4" /> },
    { id: "saved",   label: "Saved",          icon: <Bookmark className="w-4 h-4" /> },
    { id: "drafts",  label: "Drafts",         icon: <PenTool className="w-4 h-4" /> },
    { id: "remixed", label: "Remixes",        icon: <Shuffle className="w-4 h-4" /> },
  ] as const;

  return (
    <div className="min-h-screen py-24">
      <Container className="space-y-8">
        {/* Success Banner */}
        {showSuccessBanner && (
          <div className="glass p-4 border border-teal-400/25 text-teal-300 rounded-2xl flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
            <span className="text-xs font-bold">Itinerary published successfully! Your guide is now live in the explore feed.</span>
          </div>
        )}

        {/* Page Header */}
        <div className="flex items-end justify-between">
          <div>
            <div className="tag-pill mb-3">Dashboard</div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight">
              Your <span className="gradient-text">Journey Hub</span>
            </h1>
            <p className="text-white/40 text-sm mt-2">
              Manage published guides, saved itineraries, drafts, and remixes.
            </p>
          </div>
          <Link
            href="/create"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-sm hover:from-orange-400 hover:to-orange-500 transition-all glow-orange"
          >
            <Plus className="w-4 h-4" />
            Share New Trip
          </Link>
        </div>

        {/* Stats */}
        <DashboardStats />

        {/* Tabs */}
        <div className="space-y-6">
          <div className="flex gap-2 border-b border-white/10 pb-3 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-glass shrink-0 ${activeTab === tab.id ? "active" : ""}`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          <div className="min-h-[300px]">
            {activeTab === "my"      && <MyItineraries />}
            {activeTab === "saved"   && <SavedItineraries />}
            {activeTab === "drafts"  && <DraftItineraries />}
            {activeTab === "remixed" && <RemixedItineraries />}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <DashboardContent />
    </Suspense>
  );
}
