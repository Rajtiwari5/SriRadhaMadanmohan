import React, { useState } from 'react';
import { Phone, Mail, MapPin, ShieldCheck, HeartHandshake, Award, HelpCircle, ChevronDown, ChevronUp, Send, Check } from 'lucide-react';
import { YatraPackage } from '../data/yatraData';

interface OrganizerSectionProps {
  yatra: YatraPackage;
  onOpenBookingModal: () => void;
}

export const OrganizerSection: React.FC<OrganizerSectionProps> = ({
  yatra,
  onOpenBookingModal
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryCity, setInquiryCity] = useState('Jaipur');
  const [inquiryMsg, setInquiryMsg] = useState('');
  const [inquirySent, setInquirySent] = useState(false);

  const faqs = [
    {
      q: 'How are train tickets booked and when will we receive PNR/berths?',
      a: 'Train bookings for 3-AC and 2-AC are done centrally from Jaipur Junction under group reservation as soon as the booking window opens. Confirmed berths and PNR are communicated to all registered yatris well before departure. Lower/middle berths are prioritized for senior citizen devotees.'
    },
    {
      q: 'How is the pure Satvik prasadam managed during train journeys?',
      a: 'Our experienced culinary team prepares fresh, pure Vaishnava meals (strictly without onion & garlic) and arranges hot lunch and dinner deliveries directly into our reserved train coaches at designated junction stops.'
    },
    {
      q: 'What kind of rooms and hotels are provided?',
      a: 'Clean, verified Air-Conditioned (AC) hotel rooms on twin/triple sharing with private attached bathrooms, 24-hour hot water, and lift or ground floor access for senior citizens. In Rameshwaram and Tirupati, we stay for 2 consecutive nights for maximum relaxation.'
    },
    {
      q: 'Are local auto charges really included in the package?',
      a: 'Yes! Unlike standard commercial operators who drop passengers far away, our package covers local auto-rickshaw transfers to bring you directly to temple entrances and ghats comfortably.'
    },
    {
      q: 'How do I pay the booking advance and balance?',
      a: 'You can deposit the booking token (₹7,000 for South Yatra / ₹5,000 for Dwarka Yatra) via UPI, Bank NEFT/RTGS, or in person at Jaipur with Dr. J. P. Agrawal. Official numbered receipts are issued immediately.'
    }
  ];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryPhone) return;
    setInquirySent(true);
  };

  return (
    <section id="contact" className="py-14 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Organizer Spotlight & Inquiry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Organizer Bio Card */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-2xs">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
              Pilgrimage Leadership & Care
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold font-cinzel text-stone-900 tracking-tight mb-2">
              Sri Madan Mohan Tirth Yatra Jaipur
            </h2>

            <div className="text-sm font-semibold text-stone-600 mb-4">
              Chief Organizer: <span className="text-amber-950 font-bold">Dr. J. P. Agrawal</span>
            </div>

            <p className="text-stone-700 text-sm leading-relaxed mb-6">
              For over a decade, Sri Madan Mohan Tirth Yatra Jaipur has organized peaceful, devotional, and comfortable pilgrimages across Bharat for devotee families and senior citizens. Guided by Vaishnava values, complete transparency, and personal warmth from departure to return.
            </p>

            <div className="space-y-3.5 mb-8">
              <div className="flex items-center gap-3 text-sm text-stone-800">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-medium">Primary Contact / WhatsApp</div>
                  <a href="tel:9414248951" className="font-bold text-stone-900 hover:text-amber-700 tabular-nums">
                    +91 9414248951
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-stone-800">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-medium">Head Office & Departure Hub</div>
                  <div className="font-semibold text-stone-900">
                    Jaipur Junction, Rajasthan, India
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-stone-800">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-medium">Group Trust</div>
                  <div className="font-semibold text-stone-900">
                    Hundreds of satisfied Rajasthani yatris & families blessed
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:9414248951"
                className="px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-lg shadow-2xs transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Dr. J. P. Agrawal (9414248951)</span>
              </a>

              <a
                href="https://wa.me/919414248951?text=Namaskar%20Dr.%20Agrawal%20ji,%20I%20would%20like%20to%20book%20seats%20for%20the%20Tirth%20Yatra."
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition-colors flex items-center gap-2"
              >
                <span>WhatsApp Directly</span>
              </a>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-2xs">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
              Have Questions? Request a Callback
            </div>
            <h3 className="text-xl font-bold font-cinzel text-stone-900 mb-2">
              Send Seat Inquiry
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              Fill in your details below and Dr. J. P. Agrawal will get in touch with you directly with seat availability and details.
            </p>

            {!inquirySent ? (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-700"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Mobile / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-700 tabular-nums"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      City / Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Jaipur"
                      value={inquiryCity}
                      onChange={(e) => setInquiryCity(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Message or Specific Questions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Inquiring for 4 seats for South Yatra 2027..."
                    value={inquiryMsg}
                    onChange={(e) => setInquiryMsg(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-700"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-sm font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-lg shadow-2xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry Request</span>
                </button>
              </form>
            ) : (
              <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <div className="font-bold text-stone-900 font-cinzel text-lg">
                  Inquiry Received!
                </div>
                <p className="text-xs text-stone-600">
                  Dhanyavaad, {inquiryName}. Dr. J. P. Agrawal will contact you on {inquiryPhone} shortly.
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/919414248951?text=${encodeURIComponent(`Namaskar Dr. Agrawal ji, my name is ${inquiryName} from ${inquiryCity}. I submitted an inquiry for ${yatra.title}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-800 font-bold hover:underline"
                  >
                    <span>Click here to also message directly on WhatsApp →</span>
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Pilgrims' Frequently Asked Questions (Accordion) */}
        <div className="max-w-4xl mx-auto pt-6 border-t border-stone-200">
          <div className="text-center mb-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
              Common Questions
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-stone-900">
              Frequently Asked Questions (FAQ)
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-stone-900 text-sm sm:text-base hover:bg-stone-50 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="p-1 rounded-md text-stone-500 bg-stone-100 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
