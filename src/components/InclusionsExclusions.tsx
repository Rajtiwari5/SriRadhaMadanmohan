import React from 'react';
import { Check, X, ShieldCheck, AlertCircle, Utensils, Train, Building, Car, Award } from 'lucide-react';
import { YatraPackage } from '../data/yatraData';

interface InclusionsExclusionsProps {
  yatra: YatraPackage;
  onOpenBookingModal: () => void;
}

export const InclusionsExclusions: React.FC<InclusionsExclusionsProps> = ({
  yatra,
  onOpenBookingModal
}) => {
  return (
    <section id="inclusions" className="py-14 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
            Transparent Pilgrimage Policy
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-cinzel text-stone-900 tracking-tight">
            Package Inclusions & Exclusions
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Sri Madan Mohan Tirth Yatra Jaipur upholds complete transparency. Every essential convenience is handled so you can focus entirely on divine prayers.
          </p>
        </div>

        {/* 2-Column Comparison Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          
          {/* Inclusions Card */}
          <div className="p-6 rounded-2xl bg-amber-50/40 border border-amber-200/90 shadow-2xs">
            <div className="flex items-center gap-2.5 text-emerald-800 font-bold text-lg mb-4">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                <Check className="w-5 h-5" />
              </div>
              <span>What is 100% Included in the Fare</span>
            </div>

            <ul className="space-y-3.5">
              {yatra.inclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-stone-800">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-amber-200/70 text-xs text-amber-900 font-medium">
              ★ Special Highlight: All local auto charges for temple approaches are already included in this package!
            </div>
          </div>

          {/* Exclusions Card */}
          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-2xs">
            <div className="flex items-center gap-2.5 text-stone-900 font-bold text-lg mb-4">
              <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-600">
                <X className="w-5 h-5" />
              </div>
              <span>What is NOT Included (Transparent Exclusions)</span>
            </div>

            <ul className="space-y-3.5">
              {yatra.exclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-stone-700">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-stone-200 text-xs text-stone-600">
              Personal expenses and special fast-track VIP darshan tickets can be purchased directly by yatris as per temple regulations.
            </div>
          </div>

        </div>

        {/* Accommodation Stays Breakdown Banner */}
        <div className="p-6 rounded-2xl bg-stone-900 text-white shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">
                Hotel Room Accommodation
              </div>
              <h3 className="text-xl font-bold font-cinzel text-white">
                {yatra.stayHighlights}
              </h3>
              <p className="text-xs text-stone-300 mt-2 max-w-2xl">
                All rooms are clean, verified Air-Conditioned (AC) rooms arranged on twin/triple sharing for devotee families. Ground floor or elevator-accessible rooms prioritized for senior citizens.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenBookingModal}
                className="px-5 py-3 text-sm font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs transition-colors cursor-pointer whitespace-nowrap"
              >
                Reserve Seat (₹{yatra.bookingAdvance.toLocaleString('en-IN')})
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
