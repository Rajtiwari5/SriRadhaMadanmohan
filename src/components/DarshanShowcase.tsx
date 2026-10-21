import React, { useState } from 'react';
import { Sparkles, MapPin, Info, ArrowUpRight } from 'lucide-react';
import { YatraPackage, TempleDarshan } from '../data/yatraData';

interface DarshanShowcaseProps {
  yatra: YatraPackage;
}

export const DarshanShowcase: React.FC<DarshanShowcaseProps> = ({ yatra }) => {
  const [selectedDarshan, setSelectedDarshan] = useState<TempleDarshan | null>(null);

  return (
    <section id="darshan" className="py-14 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
            Divine Pilgrimage Shrines
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-cinzel text-stone-900 tracking-tight">
            Sacred Darshans Included in the Package
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Each shrine has been carefully scheduled with adequate time for peaceful prayers, traditional rituals, and holy baths.
          </p>
        </div>

        {/* Featured Visual Spotlights for Marquee Shrines */}
        {yatra.id === 'south-2027' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="group relative rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-900">
              <div className="h-64 sm:h-72 overflow-hidden">
                <img
                  src="/src/assets/images/rameshwaram_corridor_1792593728722.jpg"
                  alt="Ramanathaswamy Temple Rameshwaram"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <div className="text-xs text-amber-300 font-semibold mb-0.5">
                  Char Dham & Holy Jyotirlinga
                </div>
                <h3 className="text-xl font-bold font-cinzel text-white">
                  Rameswaram Jyotirlinga & 22 Kund Snan
                </h3>
                <p className="text-xs text-stone-200 mt-1 line-clamp-2">
                  Complete Ramanathaswamy darshan, auspicious holy bath in 22 sacred teertham wells, Samudra Snan in Agni Teertham, and visit to Dhanushkodi Ram Setu point. 2 nights stay included.
                </p>
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-900">
              <div className="h-64 sm:h-72 overflow-hidden">
                <img
                  src="/src/assets/images/tirupati_balaji_gopuram_1792593728321.jpg"
                  alt="Sri Venkateswara Swamy Tirupati"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <div className="text-xs text-amber-300 font-semibold mb-0.5">
                  Seven Sacred Hills of Tirumala
                </div>
                <h3 className="text-xl font-bold font-cinzel text-white">
                  Tirupati Balaji (Sri Venkateswara)
                </h3>
                <p className="text-xs text-stone-200 mt-1 line-clamp-2">
                  Divine darshan of Lord Venkateswara at Tirumala hills, authentic laddu prasadam, and Padmavathi temple at Alamelu Mangapuram. 2 nights comfortable AC stay in Tirupati included.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-900 mb-10">
            <div className="h-72 sm:h-80 overflow-hidden">
              <img
                src="/src/assets/images/dwarka_somnath_temple_1792593727974.jpg"
                alt="Somnath Jyotirlinga and Dwarkadhish"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-6 text-white max-w-3xl">
              <div className="text-xs text-amber-300 font-semibold mb-0.5">
                Panch Tirth & Adya Jyotirlinga
              </div>
              <h3 className="text-2xl font-bold font-cinzel text-white">
                Dwarkadhish Jagat Mandir & Somnath Mahadev
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 mt-1">
                From the flag hoisting at Lord Krishna&apos;s ancient kingdom in Dwarka to the evening Aarti on the Arabian sea at Somnath, experience Saurashtra with 2 nights Dwarka and 2 nights Somnath.
              </p>
            </div>
          </div>
        )}

        {/* Complete Darshan Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {yatra.darshanList.map((darshan, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-stone-200 hover:border-amber-400/80 bg-stone-50/50 hover:bg-white transition-all shadow-2xs flex flex-col justify-between"
            >
              <div>
                {/* Quiet Unboxed Metadata */}
                <div className="flex items-center gap-1.5 text-xs text-amber-800 font-medium mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>{darshan.city}</span>
                  <span aria-hidden="true">·</span>
                  <span>{darshan.state}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold font-cinzel text-stone-900 leading-snug">
                  {darshan.name}
                </h3>

                <div className="text-xs text-stone-500 font-medium mt-1">
                  Deity: <span className="text-stone-700">{darshan.deity}</span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed mt-2.5">
                  {darshan.significance}
                </p>
              </div>

              {darshan.specialRitual && (
                <div className="mt-4 pt-3 border-t border-stone-200/80">
                  <div className="text-[11px] font-semibold text-amber-900 uppercase tracking-wide">
                    Special Ritual Highlight
                  </div>
                  <div className="text-xs text-amber-800 font-medium mt-0.5">
                    {darshan.specialRitual}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
