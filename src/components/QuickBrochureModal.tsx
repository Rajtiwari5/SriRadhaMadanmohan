import React, { useState } from 'react';
import { X, Printer, Share2, Copy, Check, Download, Phone, MapPin } from 'lucide-react';
import { YatraPackage } from '../data/yatraData';

interface QuickBrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  yatra: YatraPackage;
}

export const QuickBrochureModal: React.FC<QuickBrochureModalProps> = ({
  isOpen,
  onClose,
  yatra
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const text = `🌸 ${yatra.title} 🌸
${yatra.subtitle}
तारिख / Dates: ${yatra.dates} (${yatra.duration})
कुल राशि / Amount: ₹${yatra.pricePerPerson.toLocaleString('en-IN')}/- per person
(3-AC train tickets in Anuvrat SF express & Rajdhani express from Jaipur)
AC Bus, AC Rooms, Lunch, Dinner and Breakfast Prasadam (No onion garlic)

प्रमुख दर्शन / Sacred Darshan:
${yatra.darshanList.map(d => `• ${d.name} (${d.city})`).join('\n')}

विशेष सुविधाएं / Features:
• बुकिंग राशि / Booking advance: ₹${yatra.bookingAdvance.toLocaleString('en-IN')}/-
• ट्रेन में प्रसादी (Lunch & Dinner) शामिल
• ऑटो खर्च शामिल
• शुद्ध वैष्णव भोजन (बिना लहसुन-प्याज)

सीट बुकिंग हेतु संपर्क करें:
डॉ. जे. पी. अग्रवाल (Dr. J. P. Agrawal)
मोबाइल / WhatsApp: 9414248951
जयपुर, राजस्थान`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-6">
        
        {/* Header Bar */}
        <div className="bg-amber-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-bold text-lg">ॐ</span>
            <div>
              <div className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                Official Pilgrimage Brochure & Circular
              </div>
              <h3 className="text-base sm:text-lg font-bold font-cinzel">
                {yatra.title}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-amber-200 hover:text-white hover:bg-amber-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Brochure Content Container (Printable) */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          
          {/* Header Banner */}
          <div className="text-center pb-6 border-b-2 border-amber-900/15">
            <div className="text-amber-800 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-1">
              ॥ श्री राधा मदनमोहनो विजयतेतराम ॥
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-cinzel text-stone-950 tracking-tight">
              {yatra.subtitle}
            </h2>
            <div className="text-base sm:text-lg font-rozha text-amber-800 mt-1">
              {yatra.hindiTitle}
            </div>
            <div className="text-xs text-stone-600 font-medium mt-2">
              आयोजक: <strong>डॉ. जे. पी. अग्रवाल (Dr. J. P. Agrawal)</strong> · संपर्क: <strong className="text-stone-900">9414248951</strong> · प्रस्थान: जयपुर (Jaipur Junction)
            </div>
          </div>

          {/* Key Particulars Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-amber-50/50 p-4 rounded-xl border border-amber-200/90">
            <div>
              <span className="font-semibold text-stone-500">यात्रा अवधि / Dates:</span>
              <div className="text-sm font-bold text-stone-900 mt-0.5">{yatra.dates} ({yatra.duration})</div>
            </div>
            <div>
              <span className="font-semibold text-stone-500">कुल पैकेज राशि / Amount:</span>
              <div className="text-sm font-bold text-amber-900 mt-0.5">₹{yatra.pricePerPerson.toLocaleString('en-IN')}/- per person (3-AC)</div>
            </div>
            <div>
              <span className="font-semibold text-stone-500">ट्रेन यात्रा / Train:</span>
              <div className="text-stone-800 mt-0.5">{yatra.trainDetails}</div>
            </div>
            <div>
              <span className="font-semibold text-stone-500">बुकिंग अग्रिम / Booking Token:</span>
              <div className="text-stone-800 mt-0.5 font-bold text-emerald-800">₹{yatra.bookingAdvance.toLocaleString('en-IN')}/- प्रति सीट (Advance)</div>
            </div>
          </div>

          {/* Darshan List */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2.5">
              पवित्र देवदर्शन सूची / Sacred Darshan Shrines:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {yatra.darshanList.map((d, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-stone-50 border border-stone-200">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center text-[10px] shrink-0">
                    {i + 1}
                  </span>
                  <span className="font-medium text-stone-800">{d.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Day By Day Schedule Textual Digest */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2.5">
              यात्रा कार्यक्रम विवरण / Travel Schedule:
            </h4>
            <div className="space-y-2 text-xs">
              {yatra.itinerary.map((d) => (
                <div key={d.dayNumber} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 p-2.5 bg-stone-50/70 rounded-lg border border-stone-100">
                  <span className="font-bold text-amber-900 whitespace-nowrap min-w-[120px]">
                    Day {d.dayNumber} ({d.date.split(' ')[0]} {d.date.split(' ')[1]}):
                  </span>
                  <span className="text-stone-800">
                    <strong>{d.location}</strong> — {d.stayCity}.
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions Note */}
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-2">
            <h4 className="font-bold text-stone-900 text-xs uppercase tracking-wide">
              महत्वपूर्ण नियम एवं सुविधाएं (IMPORTANT NOTES):
            </h4>
            <ul className="space-y-1.5 text-stone-700 list-disc list-inside">
              <li>बुकिंग राशि: ₹{yatra.bookingAdvance.toLocaleString('en-IN')}/- अग्रिम टोकन जमा कराना अनिवार्य है।</li>
              <li>ट्रेन में प्रसादी (Lunch and Dinner) पैकेज में शामिल है।</li>
              <li>स्थानीय ऑटो रिक्शा खर्च (Auto charges) पैकेज में शामिल हैं।</li>
              <li>कॉफी, कोल्ड्रिंक, चाय के अतिरिक्त अन्य पेय पैकेज में शामिल नहीं हैं।</li>
              <li>बोट राइडिंग, स्पेशल प्राइवेट टैक्सी चार्ज शामिल नहीं हैं।</li>
              <li>एसी बस एवं एसी रूम्स की सुविधा (AC Bus, AC Rooms) पैकेज में शामिल है।</li>
              <li>नाश्ता, दोपहर व रात्रि भोजन (Breakfast, Lunch and Dinner strictly without onion & garlic) शामिल है।</li>
              <li>{yatra.stayHighlights}।</li>
              <li>विशेष वीआईपी दर्शन शुल्क पैकेज में शामिल नहीं है।</li>
            </ul>
          </div>

          {/* Booking Contact Card */}
          <div className="p-4 rounded-xl bg-amber-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs text-amber-300 font-semibold uppercase">
                सीट आरक्षण हेतु तुरंत संपर्क करें / To Book Your Seat Kindly Contact:
              </div>
              <div className="text-lg font-bold font-cinzel mt-0.5">
                डॉ. जे. पी. अग्रवाल (Dr. J. P. Agrawal)
              </div>
              <div className="text-sm font-semibold text-amber-200 mt-0.5">
                मोबाइल: +91 9414248951 · जयपुर, राजस्थान
              </div>
            </div>

            <a
              href="tel:9414248951"
              className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-lg transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              Call Dr. Agrawal
            </a>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-stone-100 px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-t border-stone-200">
          <div className="text-xs text-stone-500">
            Share this official circular with family & friends
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyText}
              className="px-3 py-1.5 text-xs font-medium text-stone-700 bg-white border border-stone-300 rounded-md hover:bg-stone-50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-stone-600" />
                  <span>Copy Text Notice</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-medium text-stone-700 bg-white border border-stone-300 rounded-md hover:bg-stone-50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-stone-600" />
              <span>Print Circular</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
