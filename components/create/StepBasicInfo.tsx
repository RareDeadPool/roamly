import React from "react";
import { TRAVEL_STYLES, PACES } from "../../lib/constants";

interface StepBasicInfoProps {
  formData: any;
  onChange: (fields: any) => void;
}

export default function StepBasicInfo({ formData, onChange }: StepBasicInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-extrabold text-deep-navy-900 mb-1">Trip Details</h3>
        <p className="text-xs text-deep-navy-500">Provide the basic metadata and characteristics of your trip.</p>
      </div>

      <div className="space-y-4">
        {/* Title */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-deep-navy-800 block">Itinerary Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => onChange({ title: e.target.value })}
            placeholder="e.g. Kyoto 5-Day Slow Walk & Local Food Guide"
            className="w-full px-4 py-2.5 text-sm bg-white border border-sand-300 rounded-xl focus:outline-none focus:border-brand-orange-500 transition-colors"
          />
          <p className="text-[10px] text-deep-navy-400">Must be descriptive (at least 5 characters).</p>
        </div>

        {/* Destination & Duration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-deep-navy-800 block">Destination</label>
            <input
              type="text"
              value={formData.destination}
              onChange={(e) => onChange({ destination: e.target.value })}
              placeholder="e.g. Kyoto, Japan"
              className="w-full px-4 py-2.5 text-sm bg-white border border-sand-300 rounded-xl focus:outline-none focus:border-brand-orange-500 transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-deep-navy-800 block">Duration (Days)</label>
            <input
              type="number"
              min="1"
              value={formData.duration}
              onChange={(e) => onChange({ duration: Number(e.target.value) })}
              className="w-full px-4 py-2.5 text-sm bg-white border border-sand-300 rounded-xl focus:outline-none focus:border-brand-orange-500 transition-colors"
            />
          </div>
        </div>

        {/* Budget & Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-deep-navy-800 block">Total Est. Budget (USD)</label>
            <input
              type="number"
              min="0"
              value={formData.budget}
              onChange={(e) => onChange({ budget: Number(e.target.value) })}
              className="w-full px-4 py-2.5 text-sm bg-white border border-sand-300 rounded-xl focus:outline-none focus:border-brand-orange-500 transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-deep-navy-800 block">Travel Style</label>
            <select
              value={formData.travelStyle}
              onChange={(e) => onChange({ travelStyle: e.target.value })}
              className="w-full px-4 py-2.5 text-sm bg-white border border-sand-300 rounded-xl focus:outline-none focus:border-brand-orange-500 transition-colors cursor-pointer"
            >
              {TRAVEL_STYLES.map((style) => (
                <option key={style.id} value={style.id}>
                  {style.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Pace */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-deep-navy-800 block">Pace</label>
          <div className="grid grid-cols-3 gap-3">
            {PACES.map((p) => (
              <label
                key={p.id}
                className={`flex flex-col p-3 rounded-xl border text-center cursor-pointer select-none transition-all ${
                  formData.pace === p.id
                    ? "bg-brand-orange-50/50 border-brand-orange-400 text-brand-orange-800 font-bold"
                    : "bg-white border-sand-200 text-deep-navy-600"
                }`}
              >
                <input
                  type="radio"
                  name="pace"
                  value={p.id}
                  checked={formData.pace === p.id}
                  onChange={() => onChange({ pace: p.id })}
                  className="sr-only"
                />
                <span className="text-sm">{p.label.split(" ")[0]}</span>
                <span className="text-[9px] opacity-75 leading-tight mt-1">{p.description.substring(0, 15)}...</span>
              </label>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-deep-navy-800 block">Trip Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => onChange({ description: e.target.value })}
            placeholder="Introduce your trip. What is the core highlight? Why should someone choose this over normal tour packages?"
            rows={3}
            className="w-full px-4 py-2.5 text-sm bg-white border border-sand-300 rounded-xl focus:outline-none focus:border-brand-orange-500 transition-colors"
          />
        </div>
      </div>
    </div>
  );
}
