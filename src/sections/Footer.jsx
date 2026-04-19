import { BIZ, COLORS } from "../constants.js";
import { StarRating } from "../components/StarRating.jsx";

const FOOTER_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#experience" },
  { label: "Stay & Rooms", href: "#stay" },
  { label: "Find Us", href: "#find-us" },
  { label: "Book a Table", href: "#book" },
];

const telHref = `tel:${BIZ.phone.replace(/\s/g, "")}`;

export function Footer() {
  return (
    <footer className="bg-brand-obsidian px-4 pb-28 pt-[clamp(2.5rem,6vw,4rem)] sm:px-[clamp(1rem,4vw,3.75rem)] md:pb-16">
      <div className="mx-auto max-w-[1100px]">
        <div className="footer-cols grid grid-cols-1 gap-10 border-b border-white/[0.08] pb-10 md:grid-cols-3 md:gap-12">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full text-xl"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.red}, ${COLORS.redDark})`,
                }}
                aria-hidden
              >
                🌶️
              </div>
              <div>
                <div className="font-display text-[19px] font-extrabold text-white">{BIZ.name}</div>
                <div className="text-[9px] font-semibold uppercase tracking-[0.15em] text-brand-saffron">
                  Est. 2013 · Gateway to Araku
                </div>
              </div>
            </div>
            <p className="mb-5 max-w-[300px] text-[14px] leading-relaxed text-white/55">
              Serving the Boddavara–Araku circuit for over a decade. Authentic Andhra fire. Uncompromising hospitality.
            </p>
            <div className="flex items-center gap-2">
              <StarRating count={5} size={16} />
              <span className="text-[15px] font-bold text-white">4.8</span>
              <span className="self-end text-[13px] text-white/45">Google</span>
            </div>
          </div>

          <nav aria-label="Footer">
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white">Navigate</div>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[13px] text-white/55 no-underline transition-colors hover:text-brand-saffron">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white">Landmarks Near Us</div>
            <ul className="space-y-2">
              {BIZ.landmarks.map((l) => (
                <li key={l} className="flex items-center gap-1.5 text-[13px] text-white/45">
                  <span className="text-[10px] text-brand-red" aria-hidden>
                    ●
                  </span>
                  {l}
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white">Direct Contact</div>
              <a href={telHref} className="mb-1.5 block text-[15px] font-bold text-brand-saffron no-underline hover:underline">
                {BIZ.phone}
              </a>
              <p className="text-xs text-white/45">{BIZ.hours}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-6">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Guntur Restro · {BIZ.address}
          </p>
          <a
            href={BIZ.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/35 no-underline hover:text-brand-saffron"
          >
            View on Google Maps ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
