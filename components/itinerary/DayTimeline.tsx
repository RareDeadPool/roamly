import React from "react";
import { Compass, Clock, MapPin, DollarSign, Calendar } from "lucide-react";
import { DayPlan } from "../../types/itinerary";
import { Card, CardContent } from "../shared/Card";

interface DayTimelineProps {
  days: DayPlan[];
}

export default function DayTimeline({ days }: DayTimelineProps) {
  return (
    <div className="space-y-10 relative before:absolute before:inset-0 before:left-4 before:top-2 before:w-0.5 before:bg-sand-300">
      {days.map((day) => (
        <div key={day.dayNumber} className="relative pl-10 group">
          {/* Timeline Dot */}
          <div className="absolute left-0 top-1.5 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-brand-orange-500 text-white border-4 border-sand-50 shadow-sm z-10">
            <span className="text-xs font-black">{day.dayNumber}</span>
          </div>

          <div className="space-y-4">
            {/* Day Header */}
            <div>
              <h3 className="font-extrabold text-lg text-deep-navy-900 group-hover:text-brand-orange-600 transition-colors">
                Day {day.dayNumber}: {day.title}
              </h3>
              {day.description && (
                <p className="text-xs text-deep-navy-500 leading-relaxed mt-1">
                  {day.description}
                </p>
              )}
            </div>

            {/* Places Grid */}
            <div className="grid grid-cols-1 gap-4">
              {day.places.map((place, idx) => (
                <Card key={place.id || idx} className="shadow-none border border-sand-200 hover:border-sand-300 transition-all rounded-xl">
                  <CardContent className="p-4 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-teal-700 bg-brand-teal-50 px-1.5 py-0.5 rounded">
                          {place.category || "sightseeing"}
                        </span>
                        {place.timeSpent && (
                          <span className="flex items-center gap-1 text-[10px] text-deep-navy-400 font-bold">
                            <Clock className="w-3 h-3" />
                            {place.timeSpent}
                          </span>
                        )}
                      </div>
                      <h4 className="font-bold text-sm text-deep-navy-900 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-orange-500 shrink-0" />
                        {place.name}
                      </h4>
                      {place.description && (
                        <p className="text-xs text-deep-navy-500 leading-relaxed max-w-xl">
                          {place.description}
                        </p>
                      )}
                    </div>

                    <div className="shrink-0 flex items-center gap-1 text-xs font-extrabold text-brand-orange-600">
                      <DollarSign className="w-3.5 h-3.5" />
                      <span>{place.cost === 0 ? "Free" : `${place.cost} USD`}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Day Notes */}
            {day.notes && (
              <div className="p-3 bg-sand-100/50 rounded-xl border border-sand-200 text-xs text-deep-navy-600 leading-relaxed">
                <span className="font-bold text-deep-navy-800 block mb-0.5">Local Tip:</span>
                {day.notes}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
