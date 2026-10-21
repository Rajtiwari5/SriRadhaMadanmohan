import React, { useState } from 'react';
import { Calendar, MapPin, Train, Bed, Utensils, ChevronDown, ChevronUp, Navigation, Clock } from 'lucide-react';
import { YatraPackage, DaySchedule } from '../data/yatraData';

interface ItineraryTimelineProps {
  yatra: YatraPackage;
}

export const ItineraryTimeline: React.FC<ItineraryTimelineProps> = ({ yatra }) => {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const [filterMode, setFilterMode] = useState<'all' | 'key-darshan'>('all');

  const toggleDay = (dayNum: number) => {
    setExpandedDay(expandedDay === dayNum ? null : dayNum);
  };

  const expandAll = () => setExpandedDay(-1); // -1 signifies all
  const collapseAll = () => setExpandedDay(null);

  return (
    <section id="itinerary" className="py-14 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
              Confirmed Travel Schedule
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-cinzel text-stone-900 tracking-tight">
              Day-by-Day Detailed Itinerary
            </h2>
            <p className="text-stone-600 text-sm mt-1 max-w-2xl">
              Complete schedule from Jaipur departure to sacred temple visits, overnight AC stays, and auspicious return.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              type="button"
              onClick={expandAll}
              className="px-3 py-1.5 text-xs font-medium text-stone-700 bg-white border border-stone-200 rounded-md hover:bg-stone-100 transition-colors cursor-pointer"
            >
              Expand All Days
            </button>
            <button
              type="button"
              onClick={collapseAll}
              className="px-3 py-1.5 text-xs font-medium text-stone-700 bg-white border border-stone-200 rounded-md hover:bg-stone-100 transition-colors cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Route Summary Strip */}
        <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-900 uppercase tracking-wide mb-2">
            <Navigation className="w-3.5 h-3.5 text-amber-700" />
            <span>Complete Pilgrimage Route Map</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-stone-700">
            {yatra.id === 'south-2027' ? (
              <>
                <span className="font-semibold text-amber-900">Jaipur Junction</span>
                <span>➔</span>
                <span>Ongole</span>
                <span>➔</span>
                <span className="font-semibold text-stone-900">Srisailam (Mallikarjuna)</span>
                <span>➔</span>
                <span className="font-semibold text-stone-900">Ahobilam (Narasimha Swamy)</span>
                <span>➔</span>
                <span className="font-semibold text-amber-900">Tirupati (2 Nights)</span>
                <span>➔</span>
                <span>Golden Temple Vellore</span>
                <span>➔</span>
                <span>Srirangam</span>
                <span>➔</span>
                <span className="font-semibold text-amber-900">Rameshwaram (2 Nights)</span>
                <span>➔</span>
                <span>Dhanushkodi</span>
                <span>➔</span>
                <span>Kanyakumari</span>
                <span>➔</span>
                <span className="font-semibold text-stone-900">Thiruvananthapuram</span>
                <span>➔</span>
                <span className="font-semibold text-amber-900">Rajdhani Express to Jaipur</span>
              </>
            ) : (
              <>
                <span className="font-semibold text-amber-900">Jaipur Junction</span>
                <span>➔</span>
                <span className="font-semibold text-stone-900">Dwarka (2 Nights)</span>
                <span>➔</span>
                <span>Nageshwar Jyotirlinga</span>
                <span>➔</span>
                <span>Gopi Talav & Bet Dwarka</span>
                <span>➔</span>
                <span className="font-semibold text-stone-900">Somnath (2 Nights)</span>
                <span>➔</span>
                <span>Diu Beach & Gir Border</span>
                <span>➔</span>
                <span className="font-semibold text-amber-900">Return Train to Jaipur</span>
              </>
            )}
          </div>
        </div>

        {/* Timeline Day Cards */}
        <div className="space-y-4">
          {yatra.itinerary.map((day) => {
            const isExpanded = expandedDay === -1 || expandedDay === day.dayNumber;

            return (
              <div
                key={day.dayNumber}
                className="bg-white rounded-xl border border-stone-200/90 shadow-2xs overflow-hidden transition-all"
              >
                {/* Header row (Clickable) */}
                <button
                  type="button"
                  onClick={() => toggleDay(day.dayNumber)}
                  className="w-full text-left p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-stone-50/70 transition-colors cursor-pointer"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    {/* Editorial Day Number Badge */}
                    <div className="w-12 h-12 rounded-lg bg-amber-100/70 border border-amber-200/80 text-amber-900 font-bold text-base flex flex-col items-center justify-center shrink-0">
                      <span className="text-[10px] font-medium uppercase tracking-tight text-amber-800">Day</span>
                      <span className="text-base font-bold tabular-nums leading-none">{day.dayNumber}</span>
                    </div>

                    <div>
                      {/* Quiet Unboxed Metadata */}
                      <div className="flex items-center gap-2 text-xs text-amber-800 font-medium">
                        <span>{day.date}</span>
                        <span aria-hidden="true">·</span>
                        <span>{day.dayOfWeek}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-stone-500">{day.transport}</span>
                      </div>

                      <div className="text-base sm:text-lg font-bold font-cinzel text-stone-900 mt-0.5">
                        {day.location}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-stone-600 mt-0.5">
                        <Bed className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <span>Stay: <strong className="text-stone-800 font-medium">{day.stayCity}</strong></span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 self-stretch sm:self-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                    <div className="text-xs text-stone-500 flex items-center gap-1.5">
                      <Utensils className="w-3.5 h-3.5 text-stone-400" />
                      <span className="truncate max-w-[200px]">{day.mealPlan}</span>
                    </div>

                    <div className="p-1 rounded-md bg-stone-100 text-stone-600">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded Detailed Content */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-stone-100 bg-stone-50/40">
                    <p className="text-sm text-stone-700 leading-relaxed mb-4">
                      {day.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-white rounded-lg border border-stone-200">
                        <div className="font-semibold text-amber-900 mb-1">Key Day Highlights:</div>
                        <ul className="space-y-1 text-stone-600 list-disc list-inside">
                          {day.highlights.map((h, i) => (
                            <li key={i}>{h}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3 bg-white rounded-lg border border-stone-200 flex flex-col justify-between">
                        <div>
                          <div className="font-semibold text-stone-900 mb-1">Prasadam & Logistics:</div>
                          <div className="text-stone-600 mb-1">
                            <strong>Meals:</strong> {day.mealPlan} (Vaishnava pure, no onion/garlic)
                          </div>
                          <div className="text-stone-600">
                            <strong>Transit:</strong> {day.transport}
                          </div>
                        </div>

                        <div className="text-[11px] text-stone-500 mt-2 pt-2 border-t border-stone-100">
                          Overnight accommodation in verified AC guest rooms.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
