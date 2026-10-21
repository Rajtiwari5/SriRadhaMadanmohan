import React, { useState } from 'react';
import { X, Check, Phone, Send, Calculator, Printer, ShieldCheck, User, Users, MapPin, AlertCircle, FileText } from 'lucide-react';
import { YatraPackage } from '../data/yatraData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  yatra: YatraPackage;
  onSelectYatra: (id: 'south-2027' | 'dwarka-somnath-2027') => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  yatra,
  onSelectYatra
}) => {
  const [numYatris, setNumYatris] = useState<number>(2);
  const [trainClass, setTrainClass] = useState<'3-AC' | '2-AC'>('3-AC');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Jaipur');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const basePricePerPerson = yatra.pricePerPerson;
  const upgradeCost = trainClass === '2-AC' ? yatra.twoAcUpgradeDiff : 0;
  const effectivePricePerPerson = basePricePerPerson + upgradeCost;
  const totalAmount = effectivePricePerPerson * numYatris;
  const totalAdvance = yatra.bookingAdvance * numYatris;
  const remainingBalance = totalAmount - totalAdvance;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('Please provide your name and contact phone number.');
      return;
    }

    const ref = `SMMTY-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setSubmitted(true);

    // Save to localStorage for yatri records
    const bookingRecord = {
      ref,
      yatraTitle: yatra.title,
      name,
      phone,
      city,
      numYatris,
      trainClass,
      totalAmount,
      totalAdvance,
      remainingBalance,
      notes,
      timestamp: new Date().toISOString()
    };
    try {
      const existing = JSON.parse(localStorage.getItem('smmty_bookings') || '[]');
      existing.unshift(bookingRecord);
      localStorage.setItem('smmty_bookings', JSON.stringify(existing));
    } catch {
      // Ignore local storage error
    }
  };

  const generateWhatsAppUrl = () => {
    const text = `*Sri Madan Mohan Tirth Yatra Jaipur - Seat Reservation Inquiry*
---------------------------------------
*Yatra:* ${yatra.title}
*Organizer:* Dr. J. P. Agrawal (9414248951)
*Dates:* ${yatra.dates}
*Lead Devotee:* ${name || 'Pilgrim'}
*Contact:* ${phone || 'Not provided'}
*From City:* ${city || 'Jaipur'}
*No. of Yatris:* ${numYatris}
*Train Coach:* ${trainClass} (Departure from Jaipur)
*Total Fare:* ₹${totalAmount.toLocaleString('en-IN')}
*Required Advance Token:* ₹${totalAdvance.toLocaleString('en-IN')} (₹${yatra.bookingAdvance}/seat)
*Special Request / Berth:* ${notes || 'Standard'}
---------------------------------------
Jai Sri Krishna! Kindly confirm seat availability and send account/UPI details to deposit the advance token.`;

    return `https://wa.me/919414248951?text=${encodeURIComponent(text)}`;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-6">
        
        {/* Modal Top Header */}
        <div className="bg-amber-900 text-white px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
              Sri Madan Mohan Tirth Yatra Jaipur
            </div>
            <h3 className="text-lg font-bold font-cinzel">
              {submitted ? 'Seat Reservation Voucher' : 'Reserve Pilgrimage Seats'}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-amber-200 hover:text-white hover:bg-amber-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleBookingSubmit} className="space-y-5">
              
              {/* Yatra Selector inside Modal */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1.5">
                  Select Pilgrimage Tour
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectYatra('south-2027')}
                    className={`p-3 text-left rounded-lg border text-xs cursor-pointer transition-all ${
                      yatra.id === 'south-2027'
                        ? 'border-amber-700 bg-amber-50/80 font-bold text-amber-950'
                        : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                    }`}
                  >
                    <div className="font-semibold text-sm">South Yatra 2027</div>
                    <div className="text-stone-500 mt-0.5">31 Jan - 13 Feb · ₹41,000/person</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectYatra('dwarka-somnath-2027')}
                    className={`p-3 text-left rounded-lg border text-xs cursor-pointer transition-all ${
                      yatra.id === 'dwarka-somnath-2027'
                        ? 'border-amber-700 bg-amber-50/80 font-bold text-amber-950'
                        : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                    }`}
                  >
                    <div className="font-semibold text-sm">Dwarka-Somnath Yatra</div>
                    <div className="text-stone-500 mt-0.5">05 Jan - 11 Jan · ₹17,000/person</div>
                  </button>
                </div>
              </div>

              {/* Yatris Count & Train Class Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1.5">
                    Number of Devotees / Yatris
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min={1}
                      max={25}
                      value={numYatris}
                      onChange={(e) => setNumYatris(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-700 font-semibold tabular-nums"
                    />
                    <span className="text-xs text-stone-500 shrink-0">Persons</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1.5">
                    Train Coach Preference
                  </label>
                  <select
                    value={trainClass}
                    onChange={(e) => setTrainClass(e.target.value as '3-AC' | '2-AC')}
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-700 bg-white"
                  >
                    <option value="3-AC">3-AC Coach (Included in Base Package)</option>
                    <option value="2-AC">2-AC Coach (+₹{yatra.twoAcUpgradeDiff.toLocaleString('en-IN')}/person)</option>
                  </select>
                </div>
              </div>

              {/* Real-time Fare Calculation Summary Box */}
              <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200 text-xs text-stone-800 space-y-2">
                <div className="flex justify-between items-center text-stone-600">
                  <span>Fare per Person ({trainClass}):</span>
                  <span className="font-semibold text-stone-900 tabular-nums">
                    ₹{effectivePricePerPerson.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between items-center text-stone-600">
                  <span>Total Package Cost ({numYatris} Yatris):</span>
                  <span className="font-bold text-stone-900 text-sm tabular-nums">
                    ₹{totalAmount.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-amber-200/80 font-bold text-amber-950">
                  <span>Booking Advance Token Today:</span>
                  <span className="text-base text-emerald-800 tabular-nums">
                    ₹{totalAdvance.toLocaleString('en-IN')} (₹{yatra.bookingAdvance}/seat)
                  </span>
                </div>
                <div className="text-[11px] text-stone-500">
                  Remaining balance (₹{remainingBalance.toLocaleString('en-IN')}) payable comfortably before travel departure.
                </div>
              </div>

              {/* Devotee Contact Information */}
              <div className="space-y-3 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Full Name of Lead Yatri *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98290XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-700 tabular-nums"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      City / Hometown
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Jaipur, Sikar, Ajmer"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Special Requests / Senior Citizen Berth
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Lower berth needed, ground floor room"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-700"
                    />
                  </div>
                </div>
              </div>

              {/* Organizer Trust Marker */}
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-stone-100 text-xs text-stone-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  Booking processed directly by <strong>Dr. J. P. Agrawal</strong> (Chief Organizer, Mob: <strong>9414248951</strong>).
                </span>
              </div>

              {/* Form Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 px-5 py-3 text-sm font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-lg shadow-xs transition-colors cursor-pointer text-center"
                >
                  Generate Booking Voucher & Inquire
                </button>

                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-3 text-sm font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-emerald-700" />
                  <span>Send via WhatsApp</span>
                </a>
              </div>

            </form>
          ) : (
            /* Confirmation Voucher View */
            <div className="space-y-5">
              
              <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-stone-900 font-cinzel">
                  Reservation Voucher Generated!
                </h4>
                <div className="text-xs text-stone-600 mt-1">
                  Voucher Reference: <strong className="text-emerald-800 font-mono">{bookingRef}</strong>
                </div>
              </div>

              {/* Printable Voucher Slip */}
              <div id="printable-voucher" className="p-5 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-3">
                <div className="flex justify-between items-start border-b border-stone-200 pb-3">
                  <div>
                    <div className="font-bold text-base font-cinzel text-amber-950">
                      Sri Madan Mohan Tirth Yatra Jaipur
                    </div>
                    <div className="text-stone-500 text-[11px]">
                      Organizer: Dr. J. P. Agrawal · Mobile: 9414248951
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-stone-600">{bookingRef}</div>
                    <div className="text-[11px] text-stone-400">{new Date().toLocaleDateString('en-IN')}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-stone-700">
                  <div><strong>Yatra:</strong> {yatra.title}</div>
                  <div><strong>Dates:</strong> {yatra.dates}</div>
                  <div><strong>Lead Yatri:</strong> {name}</div>
                  <div><strong>Phone:</strong> {phone}</div>
                  <div><strong>City:</strong> {city}</div>
                  <div><strong>Total Persons:</strong> {numYatris}</div>
                  <div><strong>Train Preference:</strong> {trainClass} (from Jaipur)</div>
                  <div><strong>Meals:</strong> 100% Satvik (No Onion/Garlic)</div>
                </div>

                <div className="pt-3 border-t border-stone-200 grid grid-cols-3 gap-2 text-center bg-white p-3 rounded-lg border border-stone-200">
                  <div>
                    <div className="text-stone-500 text-[10px] uppercase">Total Fare</div>
                    <div className="font-bold text-stone-900 text-sm">₹{totalAmount.toLocaleString('en-IN')}</div>
                  </div>
                  <div>
                    <div className="text-emerald-700 text-[10px] uppercase font-bold">Booking Advance</div>
                    <div className="font-bold text-emerald-800 text-sm">₹{totalAdvance.toLocaleString('en-IN')}</div>
                  </div>
                  <div>
                    <div className="text-stone-500 text-[10px] uppercase">Balance Due</div>
                    <div className="font-bold text-stone-900 text-sm">₹{remainingBalance.toLocaleString('en-IN')}</div>
                  </div>
                </div>

                {notes && (
                  <div className="text-stone-600 pt-1">
                    <strong>Special Note:</strong> {notes}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex-1 px-5 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Voucher to Dr. Agrawal on WhatsApp</span>
                </a>

                <a
                  href="tel:9414248951"
                  className="w-full sm:w-auto px-5 py-3 text-sm font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-700" />
                  <span>Call 9414248951</span>
                </a>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="w-full sm:w-auto px-4 py-3 text-sm font-medium text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-amber-800 hover:underline font-medium cursor-pointer"
                >
                  ← Edit details or recalculate
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
