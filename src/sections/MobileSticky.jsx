import { MapPin, MessageCircle, Phone } from "lucide-react";
import { BIZ } from "../constants.js";

const telHref = `tel:${BIZ.phone.replace(/\s/g, "")}`;

export function MobileSticky({ whatsappHref }) {
  return (
    <div
      className="mobile-sticky fixed bottom-0 left-0 right-0 z-[300] flex gap-2 border-t-2 border-brand-red bg-brand-obsidian px-3 py-2.5 pb-[calc(0.65rem+env(safe-area-inset-bottom))] shadow-[0_-8px_32px_rgba(0,0,0,0.3)] md:hidden"
      role="navigation"
      aria-label="Quick actions"
    >
      <a
        href={telHref}
        className="flex flex-1 flex-col items-center justify-center gap-1 rounded-sm border border-white/15 bg-white/[0.08] py-3 text-center text-xs font-bold text-white no-underline"
        aria-label="Call Guntur Restro"
      >
        <Phone className="h-4 w-4" aria-hidden />
        Call Now
      </a>
      <a
        href={BIZ.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 flex-col items-center justify-center gap-1 rounded-sm border border-white/15 bg-white/[0.08] py-3 text-center text-xs font-bold text-white no-underline"
        aria-label="Open directions in Google Maps"
      >
        <MapPin className="h-4 w-4" aria-hidden />
        Directions
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="pulse-anim flex-[2] flex flex-col items-center justify-center gap-1 rounded-sm bg-brand-saffron py-3 text-center text-[13px] font-extrabold text-brand-obsidian no-underline"
        aria-label="WhatsApp booking with prefilled message"
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        WhatsApp Booking
      </a>
    </div>
  );
}
