"use client";

import React from "react";
import Link from "next/link";
import { FolderHeart, ChevronRight, Bookmark } from "lucide-react";
import Container from "../../components/layout/Container";
import PageHeader from "../../components/shared/PageHeader";
import { Card, CardContent } from "../../components/shared/Card";

export default function CollectionsPage() {
  const mockCollections = [
    {
      id: "c1",
      name: "Kyoto & Nara Temple Walkthroughs",
      description: "Quiet shrines, traditional tea houses, and early morning walking tracks to avoid tourist traps.",
      count: 4,
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: "c2",
      name: "Coastal Europe roadtrips",
      description: "Amalfi Coast, French Riviera, and Portuguese beaches including hidden coves and ferry maps.",
      count: 6,
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: "c3",
      name: "Volcanic hikes & hot springs",
      description: "Golden Circle highlights, hot baths, and ring road camper camping rules.",
      count: 3,
      image: "https://images.unsplash.com/photo-1504829857797-ddff28127792?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <div className="py-10 bg-sand-100/30 min-h-screen">
      <Container>
        {/* Page Header */}
        <PageHeader
          title="Collections"
          description="Browse curated folders of travel itineraries compiled by travelers."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockCollections.map((col) => (
            <Link key={col.id} href={`/explore?q=${col.name.split(" ")[0]}`}>
              <Card className="overflow-hidden border border-sand-200 shadow-none hover:shadow-lg transition-all duration-300 rounded-2xl h-full flex flex-col group">
                {/* Image header */}
                <div className="relative h-44 w-full overflow-hidden bg-sand-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={col.image}
                    alt={col.name}
                    className="h-full w-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy-950/70 to-transparent" />
                  
                  <div className="absolute bottom-3 left-4 text-white flex items-center gap-1.5">
                    <FolderHeart className="w-4 h-4 text-brand-orange-400" />
                    <span className="font-extrabold text-sm">{col.name}</span>
                  </div>
                </div>

                <CardContent className="p-5 flex-1 flex flex-col justify-between text-left">
                  <p className="text-xs text-deep-navy-500 leading-relaxed mb-6">
                    {col.description}
                  </p>

                  <div className="flex items-center justify-between border-t border-sand-150 pt-4 mt-auto">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-deep-navy-450 flex items-center gap-1">
                      <Bookmark className="w-3.5 h-3.5" />
                      {col.count} Saved Guides
                    </span>

                    <span className="text-xs font-bold text-brand-orange-600 flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                      Open Folder
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
