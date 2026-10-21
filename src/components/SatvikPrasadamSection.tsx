import React from 'react';
import { Utensils, HeartHandshake, ShieldCheck, Coffee, CheckCircle2 } from 'lucide-react';

export const SatvikPrasadamSection: React.FC = () => {
  return (
    <section className="py-14 bg-amber-50/40 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
              Vaishnava Tradition · Sri Radha Madan Mohan Seva
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-cinzel text-stone-900 tracking-tight mb-2">
              Pure Satvik Prasadam Without Onion & Garlic
            </h2>

            <div className="text-lg font-rozha text-amber-800 mb-4">
              शुद्ध वैष्णव सात्विक रसोई — बिना प्याज-लहसुन का पवित्र प्रसाद
            </div>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
              In Sri Madan Mohan Tirth Yatra Jaipur, food is not merely catering — it is treated as sacred Bhagwat Prasadam. Prepared under the watchful supervision of experienced Vaishnava cooks with the utmost hygiene, piety, and love for our pilgrim family.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              
              <div className="p-4 bg-white rounded-xl border border-amber-200/80 shadow-2xs">
                <div className="flex items-center gap-2 font-semibold text-stone-900 text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Daily 3-Time Complete Meals</span>
                </div>
                <p className="text-xs text-stone-600">
                  Wholesome morning breakfast with tea, rich traditional lunch (Roti, Dal, Sabzi, Rice, Sweet), and comforting dinner after temple darshans.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-amber-200/80 shadow-2xs">
                <div className="flex items-center gap-2 font-semibold text-stone-900 text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Prasadam in Train Included</span>
                </div>
                <p className="text-xs text-stone-600">
                  Both Lunch and Dinner Prasadam are included and freshly arranged during the Anuvrat SF and Rajdhani express journeys directly at your seats.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-amber-200/80 shadow-2xs">
                <div className="flex items-center gap-2 font-semibold text-stone-900 text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Strictly No Onion & Garlic</span>
                </div>
                <p className="text-xs text-stone-600">
                  Every dish is 100% vegetarian, sattvic, and free of onion, garlic, or artificial ingredients, strictly adhering to Vaishnava principles.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-amber-200/80 shadow-2xs">
                <div className="flex items-center gap-2 font-semibold text-stone-900 text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Senior Citizen Friendly Digestibility</span>
                </div>
                <p className="text-xs text-stone-600">
                  Mild spices, pure ghee, warm digestive teas, and light digestible options so elders travel in peak health and energy throughout the yatra.
                </p>
              </div>

            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-6 bg-white rounded-2xl border border-amber-200 shadow-xs relative">
              <div className="text-xs font-semibold text-amber-900 uppercase tracking-wide mb-3">
                Typical Daily Prasadam Menu (दक्षिण यात्रा भोजन)
              </div>

              <div className="space-y-4 text-xs text-stone-700">
                <div className="pb-3 border-b border-stone-100">
                  <div className="font-bold text-amber-950 mb-0.5">Morning Snan & Breakfast:</div>
                  <div className="text-stone-600">Garam Chai / Doodh, Fresh Poha / Idli-Sambar / Halwa / Upma / Mathri with pickle.</div>
                </div>

                <div className="pb-3 border-b border-stone-100">
                  <div className="font-bold text-amber-950 mb-0.5">Afternoon Tirth Mahaprasad (Lunch):</div>
                  <div className="text-stone-600">Phulka Roti, Dal Tadka, Seasonal Green Vegetable, Paneer / Aloo Dum, Steamed Rice, Sweet (Laddoo / Halwa / Gulab Jamun), Papad & Salad.</div>
                </div>

                <div className="pb-3 border-b border-stone-100">
                  <div className="font-bold text-amber-950 mb-0.5">Evening Temple Aarti Rest & Dinner:</div>
                  <div className="text-stone-600">Hot Rotis / Paratha, Light Khichdi / Kadhi, Vegetable Pulao, Dal, seasonal sabzi, warm milk for elders upon request.</div>
                </div>

                <div>
                  <div className="font-bold text-amber-950 mb-0.5">Train Travel Days:</div>
                  <div className="text-stone-600">Freshly packed Vaishnava meal boxes (Puri-Sabzi, Thepla, or Hot Roti-Dal-Rice) provided directly in the 3-AC coach.</div>
                </div>
              </div>

              <div className="mt-5 p-3 rounded-lg bg-amber-50/80 text-[11px] text-amber-900 border border-amber-200">
                Note: Soft drinks, packaged colas, and commercial non-prasadam beverages are strictly excluded to maintain sanctity.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
