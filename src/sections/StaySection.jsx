import {
  Bath,
  BedDouble,
  MessageCircle,
  Sunrise,
  Wifi,
} from "lucide-react";
import { BIZ, IMAGES } from "../constants.js";
import { PulseBtn } from "../components/PulseBtn.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { SectionLabel } from "../components/SectionLabel.jsx";

const ROOM_POINTS = [
  { Icon: BedDouble, label: "Peaceful Night's Rest", sub: "Away from highway noise" },
  { Icon: Bath, label: "Clean Attached Bath", sub: "Hot water available" },
  { Icon: Wifi, label: "Wi-Fi Enabled", sub: "Stay connected on the road" },
  { Icon: Sunrise, label: "Wake to the Ghats", sub: "Eastern Ghats morning view" },
];

export function StaySection({ whatsappHref }) {
  const wa = whatsappHref || `https://wa.me/${BIZ.phoneE164}`;

  return (
    <section
      id="stay"
      className="relative overflow-x-hidden bg-gradient-to-br from-brand-obsidian via-[#162d45] to-[#0d3322] px-4 py-[clamp(3.75rem,8vw,6.25rem)] sm:px-[clamp(1rem,4vw,3.75rem)]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(244,196,48,0.07),transparent_60%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1100px]">
        <div className="stay-grid grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionLabel text="Overnight Stay" light />
            <h2 className="mb-5 font-display text-[clamp(2rem,4.5vw,3rem)] font-extrabold leading-tight text-white">
              Rest Between
              <br />
              <span className="italic text-brand-saffron">The Mountains.</span>
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/70">
              Clean, secure rooms for Araku Valley travelers. Wake rested, fuel with breakfast, hit the ghat roads
              fresh. Ideal for families, pilgrims &amp; driver teams.
            </p>
            <div className="mb-9 flex flex-wrap gap-2.5">
              {[
                "Daily Fresh Linen",
                "24/7 Reception",
                "Monitored Overnight Parking",
                "Hot Breakfast Available",
                "Family Rooms",
              ].map((f) => (
                <span
                  key={f}
                  className="rounded-sm border border-white/15 bg-white/[0.07] px-3.5 py-1.5 text-xs font-medium text-white/85"
                >
                  ✓ {f}
                </span>
              ))}
            </div>
            <PulseBtn href={wa} variant="saffron" aria-label="Inquire about rooms on WhatsApp">
              Inquire About Rooms
            </PulseBtn>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-md border border-white/10 bg-white/[0.04]">
              <div className="relative aspect-[16/11] w-full">
                <img
                  src={IMAGES.hotelRoom}
                  alt="Comfortable AC lodging for highway travelers"
                  width={1200}
                  height={825}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 rounded-md bg-black/45 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                  <MessageCircle className="h-4 w-4 text-brand-saffron" aria-hidden />
                  Ask on WhatsApp for live room availability
                </div>
              </div>
              <div className="p-7">
                <div className="mb-6 font-display text-lg font-bold text-white">Room Highlights</div>
                {ROOM_POINTS.map(({ Icon, label, sub }) => (
                  <div
                    key={label}
                    className="flex gap-3.5 border-b border-white/[0.07] py-4 first:pt-0 last:border-b-0"
                  >
                    <Icon className="mt-0.5 h-6 w-6 shrink-0 text-brand-saffron" strokeWidth={1.75} aria-hidden />
                    <div>
                      <div className="mb-0.5 text-sm font-semibold text-white">{label}</div>
                      <div className="text-[13px] text-white/50">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
