import { MessageCircle } from "lucide-react";

/** Desktop / tablet — contextual pre-filled chat; hidden on small screens where the sticky bar is primary. */
export function FloatingWhatsApp({ href, contextLabel }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[320] hidden h-14 w-14 items-center justify-center rounded-full bg-brand-saffron text-brand-obsidian shadow-[0_10px_40px_rgba(0,0,0,0.25)] ring-2 ring-brand-obsidian/10 transition-transform hover:scale-105 md:flex lg:bottom-8 lg:right-8"
      aria-label={`WhatsApp Guntur Restro (${contextLabel})`}
      title={`WhatsApp · ${contextLabel}`}
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2} aria-hidden />
    </a>
  );
}
