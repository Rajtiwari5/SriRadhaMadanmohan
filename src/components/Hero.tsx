import React from 'react';
import { Calendar, MapPin, IndianRupee, Train, Phone, CheckCircle2, ChevronRight, FileDown } from 'lucide-react';
import { YatraPackage } from '../data/yatraData';

interface HeroProps {
  yatra: YatraPackage;
  activeId: 'south-2027' | 'dwarka-somnath-2027';
  onSelectYatra: (id: 'south-2027' | 'dwarka-somnath-2027') => void;
  onOpenBookingModal: () => void;
  onOpenQuickBrochure: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  yatra,
  activeId,
  onSelectYatra,
  onOpenBookingModal,
  onOpenQuickBrochure
}) => {
  return (
    <section id="home" className="relative pt-6 pb-12 overflow-hidden border-b border-stone-200 bg-linear-to-b from-amber-50/60 via-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Interactive Segmented Switcher for Yatras */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200/80 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800">
              Sri Madan Mohan Tirth Yatra Jaipur · Established Pilgrimage Service
            </div>
            <div className="text-xs text-stone-500 mt-0.5">
              Chief Organizer: <span className="font-semibold text-stone-800">Dr. J. P. Agrawal</span> (Mob: 9414248951)
            </div>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-stone-200/70 rounded-lg self-start sm:self-auto">
            <button
              type="button"
              onClick={() => onSelectYatra('south-2027')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                activeId === 'south-2027'
                  ? 'bg-amber-700 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              South Yatra 2027 (14 Days)
            </button>
            <button
              type="button"
              onClick={() => onSelectYatra('dwarka-somnath-2027')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                activeId === 'dwarka-somnath-2027'
                  ? 'bg-amber-700 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              Dwarka–Somnath (7 Days)
            </button>
          </div>
        </div>

        {/* 2-Column Split Hero Layout with items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
          
          {/* Left Column: Heading, Metadata, Pricing, Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              {/* Unboxed Metadata Line with typographic separators */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-amber-800 font-medium mb-3">
                <span>Jaipur Departure</span>
                <span aria-hidden="true">·</span>
                <span>3-AC / 2-AC Confirmed Berths</span>
                <span aria-hidden="true">·</span>
                <span>Deluxe AC Bus & AC Rooms</span>
                <span aria-hidden="true">·</span>
                <span>Pure Satvik Prasadam</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel text-stone-900 tracking-tight leading-tight mb-2 text-balance">
                {yatra.title}
              </h1>
              
              <div className="text-lg font-rozha text-amber-800 mb-4">
                {yatra.hindiTitle}
              </div>

              <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
                {activeId === 'south-2027' ? (
                  <>
                    Experience the sublime spiritual bliss of Rameswaram Jyotirlinga, the sacred 22 Kund Snan, Dhanushkodi Ram Setu, Lord Venkateswara Balaji Tirupati, Srisailam Mallikarjuna, Ahobilam Narasimha Swamy, Srirangam, Vellore Golden Temple, Kanyakumari, and Sri Padmanabhaswamy Temple. Fully organized with 3-AC train journeys, AC road travel, and nourishing pure Vaishnava prasadam.
                  </>
                ) : (
                  <>
                    A divine Saurashtra pilgrimage traversing holy Dwarkadhish Jagat Mandir, Nageshwar Jyotirlinga, Somnath Jyotirlinga on the ocean shore, Bet Dwarka, Rukmini Temple, Gopi Talav, Diu Beach, and Gir National Park forest borders. Organized from Jaipur with pure Satvik prasadam and AC comfort.
                  </>
                )}
              </p>

              {/* Package Fare & Advance Highlight Box */}
              <div className="p-5 bg-amber-50/70 border border-amber-200/80 rounded-xl mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-amber-900">
                      Total Package Fare (All-Inclusive)
                    </div>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 tabular-nums">
                        ₹{yatra.pricePerPerson.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-stone-600 font-medium">per person (3-AC)</span>
                    </div>
                    <div className="text-xs text-stone-500 mt-1">
                      2-AC upgrade option available from Jaipur
                    </div>
                  </div>

                  <div className="sm:border-l sm:border-amber-200 sm:pl-6">
                    <div className="text-xs uppercase tracking-wider font-semibold text-emerald-800">
                      Booking Advance Token
                    </div>
                    <div className="text-2xl font-bold text-emerald-700 tabular-nums mt-1">
                      ₹{yatra.bookingAdvance.toLocaleString('en-IN')}
                    </div>
                    <div className="text-xs text-stone-500 mt-1">
                      Per seat to confirm railway booking
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs and Direct Contacts */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenBookingModal}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Reserve Seat with ₹{yatra.bookingAdvance.toLocaleString('en-IN')}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/919414248951?text=${encodeURIComponent(`Jai Sri Krishna / Namaskar Dr. J. P. Agrawal ji. I want to inquire about booking seats for ${yatra.title}. Please provide more details.`)}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>WhatsApp Dr. Agrawal</span>
              </a>

              <button
                type="button"
                onClick={onOpenQuickBrochure}
                className="px-4 py-3.5 text-sm font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-stone-600" />
                <span>View Full Brochure</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset (High fidelity generated photograph) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-stone-300/80 shadow-md h-full min-h-[380px] lg:min-h-full">
              <img
                src={yatra.heroImage}
                alt={yatra.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent" />
              
              {/* Bottom Caption inside Scrim */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <div className="text-xs uppercase tracking-wider text-amber-300 font-semibold mb-1">
                  Sacred Teerth Kshetra
                </div>
                <div className="text-xl font-bold font-cinzel leading-snug">
                  {activeId === 'south-2027' 
                    ? 'Rameswaram Jyotirlinga, Tirupati Balaji & Srisailam' 
                    : 'Dwarkadhish Jagat Mandir & Somnath Jyotirlinga'}
                </div>
                <div className="flex items-center gap-3 text-xs text-stone-200 mt-2 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{yatra.dates}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-amber-400" />
                    <span>3-AC / 2-AC Jaipur</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column KPI / Trust Strip below the Hero Split (Full-width row) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-stone-200">
          
          <div className="p-4 bg-white rounded-xl border border-stone-200/90 shadow-2xs">
            <div className="text-xs font-semibold text-amber-800 uppercase tracking-wide">
              Dates & Duration
            </div>
            <div className="text-base sm:text-lg font-bold text-stone-900 mt-1">
              {yatra.dates}
            </div>
            <div className="text-xs text-stone-500 mt-0.5">
              {yatra.duration}
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200/90 shadow-2xs">
            <div className="text-xs font-semibold text-amber-800 uppercase tracking-wide">
              Train Journey
            </div>
            <div className="text-base sm:text-lg font-bold text-stone-900 mt-1">
              3-AC & 2-AC Reserved
            </div>
            <div className="text-xs text-stone-500 mt-0.5 truncate">
              {activeId === 'south-2027' ? 'Anuvrat SF & Rajdhani' : 'Superfast Express from Jaipur'}
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200/90 shadow-2xs">
            <div className="text-xs font-semibold text-amber-800 uppercase tracking-wide">
              Prasadam & Kitchen
            </div>
            <div className="text-base sm:text-lg font-bold text-stone-900 mt-1">
              100% Satvik Meals
            </div>
            <div className="text-xs text-stone-500 mt-0.5">
              Strictly without onion & garlic + train meals
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200/90 shadow-2xs">
            <div className="text-xs font-semibold text-amber-800 uppercase tracking-wide">
              Stay & Local Transport
            </div>
            <div className="text-base sm:text-lg font-bold text-stone-900 mt-1">
              AC Rooms & AC Bus
            </div>
            <div className="text-xs text-stone-500 mt-0.5">
              Local Auto charges included!
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
