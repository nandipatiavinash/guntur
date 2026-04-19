import { Clock, Landmark, MapPin, Phone } from "lucide-react";
import { BIZ } from "../constants.js";
import { PulseBtn } from "../components/PulseBtn.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { SectionLabel } from "../components/SectionLabel.jsx";

const telHref = `tel:${BIZ.phone.replace(/\s/g, "")}`;

export function FindUs() {
  return (
    <section
      id="find-us"
      className="overflow-x-hidden bg-brand-creamDark px-4 py-[clamp(3.75rem,8vw,6.25rem)] sm:px-[clamp(1rem,4vw,3.75rem)]"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="find-grid grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionLabel text="Navigation" />
            <h2 className="mb-8 font-display text-[clamp(2rem,4vw,2.8rem)] font-extrabold leading-tight text-brand-obsidian">
              Find Us on the
              <br />
              Araku Road
            </h2>

            <ul className="flex flex-col gap-5">
              <li className="flex gap-3.5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden />
                <div>
                  <div className="mb-0.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-brand-red">
                    Address
                  </div>
                  <p className="text-[15px] leading-relaxed text-brand-obsidian">{BIZ.address}</p>
                </div>
              </li>
              <li className="flex gap-3.5">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden />
                <div>
                  <div className="mb-0.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-brand-red">
                    Phone
                  </div>
                  <a href={telHref} className="text-[15px] font-semibold text-brand-obsidian no-underline hover:text-brand-red">
                    {BIZ.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-3.5">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden />
                <div>
                  <div className="mb-0.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-brand-red">
                    Hours
                  </div>
                  <p className="text-[15px] leading-relaxed text-brand-obsidian">{BIZ.hours}</p>
                </div>
              </li>
              <li className="flex gap-3.5">
                <Landmark className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden />
                <div>
                  <div className="mb-0.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-brand-red">
                    Nearby
                  </div>
                  <p className="text-[15px] leading-relaxed text-brand-obsidian">
                    Vaikunta Giri Temple · Thatipudi Reservoir
                  </p>
                </div>
              </li>
              <li className="flex gap-3.5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden />
                <div>
                  <div className="mb-0.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-brand-red">
                    Google Maps
                  </div>
                  <a
                    href={BIZ.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[14px] font-bold text-brand-red no-underline"
                  >
                    Click to open navigation ↗
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <PulseBtn href={BIZ.mapsUrl} variant="red" aria-label="Open Google Maps directions">
                Open Google Maps
              </PulseBtn>
              <PulseBtn
                href={telHref}
                variant="ghost"
                style={{
                  background: "#0F2A44",
                  color: "#fff",
                  border: "none",
                  padding: "13px 26px",
                }}
                aria-label="Call Guntur Restro"
              >
                Call Now
              </PulseBtn>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-md border-[3px] border-brand-red shadow-xl">
              <iframe
                title="Guntur Restro Location"
                src="https://maps.google.com/maps?q=Guntur+Restro,+S.+Kota,+Andhra+Pradesh+535145&output=embed&z=15"
                width="100%"
                height={380}
                className="block max-w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex items-center justify-between gap-3 bg-brand-obsidian px-4 py-3.5">
                <div>
                  <div className="text-[13px] font-bold text-white">{BIZ.name}</div>
                  <div className="text-[11px] text-white/55">Boddavara Junction · S. Kota, AP</div>
                </div>
                <a
                  href={BIZ.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-sm bg-brand-saffron px-3.5 py-1.5 text-[11px] font-bold text-brand-obsidian no-underline"
                  aria-label="Open location in Google Maps"
                >
                  Open in Maps ↗
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
