import React, { useState } from "react";
import { Plus, Trash2, MapPin } from "lucide-react";
import Button from "../shared/Button";

interface StepPlacesProps {
  formData: any;
  onChange: (fields: any) => void;
}

export default function StepPlaces({ formData, onChange }: StepPlacesProps) {
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);
  const [newPlace, setNewPlace] = useState({
    name: "",
    category: "sightseeing",
    timeSpent: "2 hours",
    cost: 0,
    description: ""
  });

  const handleAddPlace = () => {
    if (!newPlace.name.trim()) return;

    const updatedDays = [...formData.days];
    const places = [...(updatedDays[selectedDayIdx].places || [])];
    
    places.push({
      ...newPlace,
      id: `place-${Date.now()}`
    });

    updatedDays[selectedDayIdx] = {
      ...updatedDays[selectedDayIdx],
      places
    };

    onChange({ days: updatedDays });
    setNewPlace({
      name: "",
      category: "sightseeing",
      timeSpent: "2 hours",
      cost: 0,
      description: ""
    });
  };

  const handleRemovePlace = (placeId: string) => {
    const updatedDays = [...formData.days];
    const places = updatedDays[selectedDayIdx].places.filter((p: any) => p.id !== placeId);
    updatedDays[selectedDayIdx] = {
      ...updatedDays[selectedDayIdx],
      places
    };
    onChange({ days: updatedDays });
  };

  const currentPlaces = formData.days[selectedDayIdx]?.places || [];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-extrabold text-deep-navy-900 mb-1">Places Visited</h3>
        <p className="text-xs text-deep-navy-500">Add detailed sights, dining, transit steps, or accommodation spots to your days.</p>
      </div>

      {/* Day Selectors */}
      <div className="flex gap-2 border-b border-sand-300 pb-3 overflow-x-auto">
        {formData.days.map((day: any, idx: number) => (
          <button
            key={day.dayNumber}
            onClick={() => setSelectedDayIdx(idx)}
            className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
              selectedDayIdx === idx
                ? "bg-deep-navy-900 text-white shadow-sm"
                : "bg-sand-200 text-deep-navy-750 hover:bg-sand-300"
            }`}
          >
            Day {day.dayNumber}
          </button>
        ))}
      </div>

      {/* Current Day Places List */}
      <div className="space-y-3">
        <label className="text-xs font-bold text-deep-navy-800 block">
          Day {formData.days[selectedDayIdx]?.dayNumber} Stops ({currentPlaces.length})
        </label>
        
        {currentPlaces.length === 0 ? (
          <div className="p-8 border border-dashed border-sand-300 rounded-2xl text-center text-xs text-deep-navy-500 bg-sand-50/20">
            No stops added for this day yet. Add one below!
          </div>
        ) : (
          <div className="space-y-2">
            {currentPlaces.map((place: any) => (
              <div key={place.id} className="flex items-center justify-between p-3.5 bg-white border border-sand-250 rounded-xl">
                <div className="text-left space-y-0.5">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-brand-teal-700 bg-brand-teal-50 px-1.5 py-0.5 rounded">
                      {place.category}
                    </span>
                    <span className="text-[9px] text-deep-navy-450 font-bold">{place.timeSpent}</span>
                  </div>
                  <h5 className="font-bold text-xs text-deep-navy-900 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-orange-500" />
                    {place.name}
                  </h5>
                </div>
                <button
                  onClick={() => handleRemovePlace(place.id)}
                  className="p-1.5 text-deep-navy-400 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Place Panel */}
      <div className="p-4 border border-sand-250 rounded-2xl bg-sand-50/40 space-y-4">
        <h4 className="text-xs font-black text-deep-navy-900">Add Stop</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-extrabold text-deep-navy-500 block">Place Name</label>
            <input
              type="text"
              value={newPlace.name}
              onChange={(e) => setNewPlace({ ...newPlace, name: e.target.value })}
              placeholder="e.g. Fushimi Inari Taisha"
              className="w-full px-3 py-2 text-xs bg-white border border-sand-300 rounded-xl focus:outline-none focus:border-brand-orange-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-extrabold text-deep-navy-500 block">Category</label>
            <select
              value={newPlace.category}
              onChange={(e) => setNewPlace({ ...newPlace, category: e.target.value })}
              className="w-full px-3 py-2 text-xs bg-white border border-sand-300 rounded-xl focus:outline-none focus:border-brand-orange-500 cursor-pointer"
            >
              <option value="sightseeing">Sightseeing</option>
              <option value="food">Food &amp; Drinks</option>
              <option value="activity">Activities</option>
              <option value="transport">Transport</option>
              <option value="stay">Accommodation</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-extrabold text-deep-navy-500 block">Time Spent</label>
            <input
              type="text"
              value={newPlace.timeSpent}
              onChange={(e) => setNewPlace({ ...newPlace, timeSpent: e.target.value })}
              placeholder="e.g. 2 hours"
              className="w-full px-3 py-2 text-xs bg-white border border-sand-300 rounded-xl"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-extrabold text-deep-navy-500 block">Estimated Cost (USD)</label>
            <input
              type="number"
              min="0"
              value={newPlace.cost}
              onChange={(e) => setNewPlace({ ...newPlace, cost: Number(e.target.value) })}
              className="w-full px-3 py-2 text-xs bg-white border border-sand-300 rounded-xl"
            />
          </div>
        </div>

        <Button
          variant="outline"
          onClick={handleAddPlace}
          disabled={!newPlace.name.trim()}
          className="w-full py-2.5 text-xs text-deep-navy-800"
        >
          <Plus className="w-4 h-4 text-brand-orange-600" />
          Add Stop to Day {formData.days[selectedDayIdx]?.dayNumber}
        </Button>
      </div>
    </div>
  );
}
