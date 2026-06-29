"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Plus, BookOpen, Bookmark, PenTool, Shuffle, CheckCircle2 } from "lucide-react";
import Container from "../../components/layout/Container";
import PageHeader from "../../components/shared/PageHeader";
import Button from "../../components/shared/Button";
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
    { id: "my", label: "My Itineraries", icon: <BookOpen className="w-4 h-4" /> },
    { id: "saved", label: "Saved Itineraries", icon: <Bookmark className="w-4 h-4" /> },
    { id: "drafts", label: "Drafts", icon: <PenTool className="w-4 h-4" /> },
    { id: "remixed", label: "Remixes", icon: <Shuffle className="w-4 h-4" /> },
  ] as const;

  return (
    <div className="py-10 bg-sand-100/30 min-h-screen">
      <Container className="space-y-8">
        {/* Success Alert Banner */}
        {showSuccessBanner && (
          <div className="p-4 border border-brand-teal-200 bg-brand-teal-50 text-brand-teal-800 rounded-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
            <CheckCircle2 className="w-5 h-5 text-brand-teal-600 shrink-0" />
            <span className="text-xs font-bold">Itinerary published successfully! Your guide is now live in the explore feed.</span>
          </div>
        )}

        {/* Page Header */}
        <PageHeader
          title="Dashboard"
          description="Manage your published travel guides, saved itineraries, drafts, and remixes."
          actions={
            <Link href="/create">
              <Button variant="primary" size="sm" className="flex items-center gap-1">
                <Plus className="w-4 h-4" />
                Share New Trip
              </Button>
            </Link>
          }
        />

        {/* General Stats Cards */}
        <DashboardStats />

        {/* Tab Controls */}
        <div className="space-y-6">
          <div className="flex gap-2 border-b border-sand-300 pb-3 overflow-x-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all shrink-0 ${
                    isActive
                      ? "bg-deep-navy-900 text-white shadow-sm"
                      : "bg-white border border-sand-300 text-deep-navy-700 hover:bg-sand-100"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Panel Renderings */}
          <div className="min-h-[300px]">
            {activeTab === "my" && <MyItineraries />}
            {activeTab === "saved" && <SavedItineraries />}
            {activeTab === "drafts" && <DraftItineraries />}
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
