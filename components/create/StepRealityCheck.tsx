import React, { useState } from "react";
import { Plus, Trash2, AlertTriangle, HelpCircle } from "lucide-react";
import { REALITY_CHECK_CATEGORIES } from "../../lib/constants";
import Button from "../shared/Button";

interface StepRealityCheckProps {
  formData: any;
  onChange: (fields: any) => void;
}

export default function StepRealityCheck({ formData, onChange }: StepRealityCheckProps) {
  const [newCheck, setNewCheck] = useState({
    category: "crowds",
    title: "",
    description: ""
  });

  const [newRegret, setNewRegret] = useState({
    placeName: "",
    description: "",
    regretType: "skipped"
  });

  const handleAddCheck = () => {
    if (!newCheck.title.trim() || !newCheck.description.trim()) return;
    const checks = [...(formData.realityChecks || [])];
    checks.push({
      ...newCheck,
      id: `check-${Date.now()}`
    });
    onChange({ realityChecks: checks });
    setNewCheck({ category: "crowds", title: "", description: "" });
  };

  const handleRemoveCheck = (checkId: string) => {
    const checks = formData.realityChecks.filter((c: any) => c.id !== checkId);
    onChange({ realityChecks: checks });
  };

  const handleAddRegret = () => {
    if (!newRegret.placeName.trim() || !newRegret.description.trim()) return;
    const regrets = [...(formData.regrets || [])];
    regrets.push({
      ...newRegret,
      id: `regret-${Date.now()}`
    });
    onChange({ regrets });
    setNewRegret({ placeName: "", description: "", regretType: "skipped" });
  };

  const handleRemoveRegret = (regretId: string) => {
    const regrets = formData.regrets.filter((r: any) => r.id !== regretId);
    onChange({ regrets });
  };

  return (
    <div className="space-y-8">
      {/* Reality Check Section */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-extrabold text-deep-navy-900 mb-1">Reality Checks</h3>
          <p className="text-xs text-deep-navy-500">Provide warnings for other travelers: crowded peaks, pricing traps, weather realities, or pickpocket zones.</p>
        </div>

        {/* Existing Checks */}
        {formData.realityChecks?.length > 0 && (
          <div className="space-y-2">
            {formData.realityChecks.map((check: any) => (
              <div key={check.id} className="flex items-center justify-between p-3.5 bg-amber-50/20 border border-amber-250 rounded-xl text-left">
                <div>
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">
                    {check.category}
                  </span>
                  <h5 className="font-bold text-xs text-deep-navy-900 mt-1 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    {check.title}
                  </h5>
                  <p className="text-[11px] text-deep-navy-500">{check.description}</p>
                </div>
                <button
                  onClick={() => handleRemoveCheck(check.id)}
                  className="p-1.5 text-deep-navy-450 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Add Check Form */}
        <div className="p-4 border border-amber-200 rounded-2xl bg-amber-50/10 space-y-4">
          <h4 className="text-xs font-black text-deep-navy-900 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            Add Reality Check warning
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-extrabold text-deep-navy-500 block">Category</label>
              <select
                value={newCheck.category}
                onChange={(e) => setNewCheck({ ...newCheck, category: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-white border border-sand-300 rounded-xl cursor-pointer"
              >
                {REALITY_CHECK_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-extrabold text-deep-navy-500 block">Warning Summary</label>
              <input
                type="text"
                value={newCheck.title}
                onChange={(e) => setNewCheck({ ...newCheck, title: e.target.value })}
                placeholder="e.g. Avoid the noon heat and tour buses"
                className="w-full px-3 py-2 text-xs bg-white border border-sand-300 rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-extrabold text-deep-navy-500 block">Full Description</label>
            <textarea
              value={newCheck.description}
              onChange={(e) => setNewCheck({ ...newCheck, description: e.target.value })}
              placeholder="e.g. Hundreds of cruise passengers arrive starting at 10 AM, making walking extremely frustrating. Arrive early or skip entirely."
              rows={2}
              className="w-full px-3 py-2 text-xs bg-white border border-sand-300 rounded-xl"
            />
          </div>

          <Button variant="outline" onClick={handleAddCheck} className="w-full text-xs text-amber-900 border-amber-200 hover:bg-amber-100/50">
            Add Reality Check
          </Button>
        </div>
      </div>

      {/* Regrets Section */}
      <div className="space-y-6 pt-6 border-t border-sand-200">
        <div>
          <h3 className="text-lg font-extrabold text-deep-navy-900 mb-1">What You Regret Missing</h3>
          <p className="text-xs text-deep-navy-500">Share places you skipped, rushed through, or only discovered after leaving.</p>
        </div>

        {/* Existing Regrets */}
        {formData.regrets?.length > 0 && (
          <div className="space-y-2">
            {formData.regrets.map((regret: any) => (
              <div key={regret.id} className="flex items-center justify-between p-3.5 bg-rose-50/20 border border-rose-250 rounded-xl text-left">
                <div>
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-rose-700 bg-rose-50 border border-rose-205 px-1.5 py-0.5 rounded">
                    {regret.regretType}
                  </span>
                  <h5 className="font-bold text-xs text-deep-navy-900 mt-1 flex items-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                    {regret.placeName}
                  </h5>
                  <p className="text-[11px] text-deep-navy-500">{regret.description}</p>
                </div>
                <button
                  onClick={() => handleRemoveRegret(regret.id)}
                  className="p-1.5 text-deep-navy-450 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Add Regret Form */}
        <div className="p-4 border border-rose-200 rounded-2xl bg-rose-50/10 space-y-4">
          <h4 className="text-xs font-black text-deep-navy-900 flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-rose-600" />
            Add Travel Regret
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-extrabold text-deep-navy-500 block">Regret Type</label>
              <select
                value={newRegret.regretType}
                onChange={(e) => setNewRegret({ ...newRegret, regretType: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-white border border-sand-300 rounded-xl cursor-pointer"
              >
                <option value="skipped">Regret Skipped</option>
                <option value="rushed">Regret Rushed</option>
                <option value="missed_completely">Regret Missed Completely</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-extrabold text-deep-navy-500 block">Place / Activity Name</label>
              <input
                type="text"
                value={newRegret.placeName}
                onChange={(e) => setNewRegret({ ...newRegret, placeName: e.target.value })}
                placeholder="e.g. Sanjusangendo wooden temple"
                className="w-full px-3 py-2 text-xs bg-white border border-sand-300 rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-extrabold text-deep-navy-500 block">Why do you regret it?</label>
            <textarea
              value={newRegret.description}
              onChange={(e) => setNewRegret({ ...newRegret, description: e.target.value })}
              placeholder="e.g. We skipped this thinking it is a duplicate temple. We later found out the interior houses 1,001 historical statues and is magnificent."
              rows={2}
              className="w-full px-3 py-2 text-xs bg-white border border-sand-300 rounded-xl"
            />
          </div>

          <Button variant="outline" onClick={handleAddRegret} className="w-full text-xs text-rose-900 border-rose-200 hover:bg-rose-100/50">
            Add Regret Note
          </Button>
        </div>
      </div>
    </div>
  );
}
