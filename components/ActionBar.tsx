"use client";

import { MessageCircle, Phone } from "lucide-react";
import { useLang } from "./LanguageProvider";
import { CONTACT, whatsappLink } from "@/lib/data";

/** Mobile: always-visible call + WhatsApp. Desktop: a single WhatsApp button. */
export function ActionBar({ message }: { message?: string }) {
  const { t } = useLang();
  const msg = message ?? t("Namaste! I would like to know about your upcoming yatras.", "नमस्ते! मुझे आपकी आगामी यात्राओं की जानकारी चाहिए।");
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-indigo-night/10 bg-white/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
        <a href={`tel:+${CONTACT.phoneRaw}`} className="btn bg-indigo-night text-white">
          <Phone className="h-4 w-4" aria-hidden />
          {t("Call", "कॉल करें")}
        </a>
        <a href={whatsappLink(msg)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
          <MessageCircle className="h-4 w-4" aria-hidden />
          WhatsApp
        </a>
      </div>
      <a
        href={whatsappLink(msg)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-whatsapp fixed right-6 bottom-6 z-30 hidden shadow-lg md:inline-flex"
      >
        <MessageCircle className="h-5 w-5" aria-hidden />
        {t("WhatsApp us", "WhatsApp करें")}
      </a>
    </>
  );
}
