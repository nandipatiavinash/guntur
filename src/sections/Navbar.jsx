import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { BIZ, COLORS } from "../constants.js";
import { PulseBtn } from "../components/PulseBtn.jsx";

const LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#experience" },
  { label: "Stay", href: "#stay" },
  { label: "Find Us", href: "#find-us" },
];

export function Navbar({ navSolid, whatsappHref }) {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav
        className="fixed left-0 right-0 top-0 z-[200] flex h-[66px] items-center justify-between px-4 transition-all duration-300 sm:px-[clamp(1rem,4vw,3.75rem)]"
        style={{
          background: navSolid ? COLORS.cream : "transparent",
          borderBottom: navSolid ? `1px solid ${COLORS.creamDark}` : "none",
          backdropFilter: navSolid ? "blur(16px)" : "none",
          boxShadow: navSolid ? "0 4px 40px rgba(15,42,68,0.08)" : "none",
        }}
        aria-label="Primary"
      >
        <a href="#top" className="flex items-center gap-2.5 no-underline">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full text-lg shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${COLORS.red}, ${COLORS.redDark})`,
              boxShadow: `0 4px 16px ${COLORS.red}55`,
            }}
            aria-hidden
          >
            🌶️
          </div>
          <div>
            <div
              className="font-display text-[17px] font-extrabold leading-tight transition-colors"
              style={{ color: navSolid ? COLORS.obsidian : COLORS.white }}
            >
              {BIZ.name}
            </div>
            <div
              className="text-[9px] font-semibold uppercase tracking-[0.18em] transition-colors"
              style={{ color: navSolid ? COLORS.red : COLORS.saffron }}
            >
              Est. 2013 · S. Kota, AP
            </div>
          </div>
        </a>

        <div className="nav-links-desktop hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[13px] font-medium uppercase tracking-[0.06em] transition-colors no-underline ${
                navSolid ? "text-brand-obsidian/85 hover:text-brand-red" : "text-white/80 hover:text-brand-saffron"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div
            className="hidden transition-all duration-300 sm:block"
            style={{
              opacity: navSolid ? 1 : 0,
              transform: navSolid ? "translateY(0)" : "translateY(-6px)",
              pointerEvents: navSolid ? "auto" : "none",
            }}
          >
            <PulseBtn
              href={whatsappHref}
              variant="saffron"
              style={{ fontSize: 12, padding: "9px 18px" }}
              aria-label="Book on WhatsApp"
            >
              Book on WhatsApp
            </PulseBtn>
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/25 bg-white/10 text-white backdrop-blur md:hidden"
            style={
              navSolid
                ? {
                    borderColor: `${COLORS.obsidian}22`,
                    background: COLORS.cream,
                    color: COLORS.obsidian,
                  }
                : undefined
            }
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed left-0 right-0 top-[66px] z-[190] border-b border-brand-creamDark bg-brand-cream/98 px-4 py-4 shadow-xl backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col gap-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-md px-3 py-3 text-[14px] font-semibold uppercase tracking-[0.08em] text-brand-obsidian no-underline hover:bg-brand-creamDark"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-brand-saffron px-4 py-3 text-[14px] font-bold text-brand-obsidian no-underline"
              aria-label="WhatsApp booking"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
