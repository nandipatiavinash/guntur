import { Landmark, Mountain, ShieldCheck, Trophy, Video } from "lucide-react";
import { COLORS, IMAGES } from "../constants.js";
import { Reveal } from "../components/Reveal.jsx";
import { SectionLabel } from "../components/SectionLabel.jsx";

export function BentoExperience() {
  return (
    <section
      id="experience"
      className="overflow-x-hidden bg-brand-obsidian px-4 py-[clamp(3.75rem,8vw,6.25rem)] sm:px-[clamp(1rem,4vw,3.75rem)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <SectionLabel text="Why Guntur Restro" light />
          <h2 className="mb-12 font-display text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold leading-tight text-white">
            Not a Dhaba.
            <br />
            <span className="italic text-brand-saffron">A Destination.</span>
          </h2>
        </Reveal>

        <div className="bento-grid grid max-w-full grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-[minmax(220px,auto)_minmax(200px,auto)] lg:grid-cols-[1.6fr_1fr_1fr] lg:grid-rows-[240px_200px]">
          <Reveal delay={0.1} className="bento-main min-w-0 md:col-span-2 lg:col-span-1 lg:row-span-2">
            <article className="bento-card relative flex h-full min-h-[320px] flex-col justify-end overflow-hidden rounded-md border border-red-600/40 bg-gradient-to-br from-red-800/40 to-red-950/70 p-7 lg:min-h-0">
              <img
                src={IMAGES.biryani}
                alt="Aromatic Andhra biryani with rich colour and spice"
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
              <Trophy
                className="absolute right-6 top-7 h-16 w-16 text-white/15"
                strokeWidth={1.25}
                aria-hidden
              />
              <span
                className="relative z-[1] mb-3 inline-block rounded px-2.5 py-1 text-[10px] font-extrabold tracking-[0.12em] text-brand-obsidian"
                style={{ background: COLORS.saffron }}
              >
                EST. 2013
              </span>
              <h3 className="relative z-[1] mb-3 font-display text-2xl font-extrabold text-white lg:text-[26px]">
                11 Years of Highway Legacy
              </h3>
              <p className="relative z-[1] max-w-[300px] text-sm leading-relaxed text-white/70">
                Since 2013, travelers on the Boddavara–Araku circuit have trusted Guntur Restro for
                consistent quality, real Andhra fire, and a reliable pitstop experience.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.15} className="min-w-0">
            <article className="bento-card flex h-full flex-col justify-between rounded-md border border-white/10 bg-white/[0.04] p-6">
              <ShieldCheck className="h-9 w-9 text-brand-saffron" strokeWidth={1.75} aria-hidden />
              <div>
                <h4 className="mb-1.5 font-display text-lg font-bold text-white">
                  5★ Hygiene Standards
                </h4>
                <p className="text-[13px] leading-relaxed text-white/55">
                  Spotless restrooms praised in public reviews. Safe &amp; secure for families and solo
                  women travelers.
                </p>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/12 px-3 py-1.5">
                <span className="text-[11px] font-bold text-brand-saffron">
                  ★★★★★ Hygiene Score
                </span>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.2} className="min-w-0">
            <article className="bento-card relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-md border border-white/10 bg-white/[0.04] p-6 md:min-h-0">
              <img
                src={IMAGES.hotelRoom}
                alt="Modern AC hotel room with calm lighting"
                width={900}
                height={700}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian via-brand-obsidian/75 to-transparent" />
              <Video className="relative z-[1] h-9 w-9 text-brand-saffron" strokeWidth={1.75} aria-hidden />
              <div className="relative z-[1]">
                <h4 className="mb-1.5 font-display text-lg font-bold text-white">
                  CCTV Safe Parking
                </h4>
                <p className="text-[13px] leading-relaxed text-white/70">
                  Monitored parking for cars, SUVs, and tourist buses. Pull in and dine with peace of mind.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.25} className="min-w-0">
            <article className="bento-card relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-md border border-sky-300/20 bg-gradient-to-br from-brand-obsidian/90 to-brand-obsidianLight/95 p-6 md:min-h-0">
              <img
                src={IMAGES.ghatRoad}
                alt="Scenic mountain road through the Eastern Ghats"
                width={900}
                height={700}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-overlay"
              />
              <Mountain className="relative z-[1] h-9 w-9 text-sky-200" strokeWidth={1.75} aria-hidden />
              <div className="relative z-[1]">
                <h4 className="mb-1.5 font-display text-lg font-bold text-white">
                  Thatipudi Reservoir
                </h4>
                <p className="text-[13px] leading-relaxed text-white/65">
                  Minutes away. Dine surrounded by the lush Eastern Ghats before or after your scenic detour.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.3} className="min-w-0">
            <article className="bento-card flex h-full flex-col justify-between rounded-md border border-red-600/25 bg-gradient-to-br from-red-900/25 to-red-950/45 p-6">
              <Landmark className="h-9 w-9 text-brand-saffron" strokeWidth={1.75} aria-hidden />
              <div>
                <h4 className="mb-1.5 font-display text-lg font-bold text-white">
                  Vaikunta Giri Temple
                </h4>
                <p className="text-[13px] leading-relaxed text-white/55">
                  Sacred stopover. Pilgrims and travelers both know — Guntur Restro is the reward after the climb.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
