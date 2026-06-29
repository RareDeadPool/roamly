import React from "react";

interface StepDayPlanProps {
  formData: any;
  onChange: (fields: any) => void;
}

export default function StepDayPlan({ formData, onChange }: StepDayPlanProps) {
  const handleDayTitleChange = (idx: number, newTitle: string) => {
    const updatedDays = [...formData.days];
    updatedDays[idx] = { ...updatedDays[idx], title: newTitle };
    onChange({ days: updatedDays });
  };

  const handleDayDescChange = (idx: number, newDesc: string) => {
    const updatedDays = [...formData.days];
    updatedDays[idx] = { ...updatedDays[idx], description: newDesc };
    onChange({ days: updatedDays });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-extrabold text-deep-navy-900 mb-1">Day-wise Schedule</h3>
        <p className="text-xs text-deep-navy-500">Provide a high-level summary and theme for each day of the journey.</p>
      </div>

      <div className="space-y-6">
        {formData.days.map((day: any, idx: number) => (
          <div key={day.dayNumber} className="p-4 border border-sand-200 rounded-2xl bg-sand-50/50 space-y-4">
            <h4 className="text-sm font-black text-deep-navy-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-brand-orange-500 text-white flex items-center justify-center text-xs">
                {day.dayNumber}
              </span>
              Day {day.dayNumber} Summary
            </h4>

            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-[10px] font-extrabold uppercase tracking-wider text-deep-navy-500 block">Day Title</label>
                <input
                  type="text"
                  value={day.title}
                  onChange={(e) => handleDayTitleChange(idx, e.target.value)}
                  placeholder="e.g. Higashiyama temple walking and Gion dinner"
                  className="w-full px-4 py-2.5 text-xs bg-white border border-sand-300 rounded-xl focus:outline-none focus:border-brand-orange-500 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-extrabold uppercase tracking-wider text-deep-navy-500 block">Day Summary</label>
                <textarea
                  value={day.description || ""}
                  onChange={(e) => handleDayDescChange(idx, e.target.value)}
                  placeholder="e.g. Today is dedicated to walking ancient streets. Avoid major spots at noon."
                  rows={2}
                  className="w-full px-4 py-2.5 text-xs bg-white border border-sand-300 rounded-xl focus:outline-none focus:border-brand-orange-500 transition-colors"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
