import { MapPin } from "lucide-react";
import { BIZ, COLORS, REVIEWS_DATA } from "../constants.js";
import { Reveal } from "../components/Reveal.jsx";
import { SectionLabel } from "../components/SectionLabel.jsx";
import { StarRating } from "../components/StarRating.jsx";

export function ReviewsSection() {
  return (
    <section className="overflow-x-hidden bg-brand-creamDark px-4 py-[clamp(3.75rem,8vw,6.25rem)] sm:px-[clamp(1rem,4vw,3.75rem)]">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <SectionLabel text="Traveler Voices" />
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold leading-tight text-brand-obsidian">
              4.8 Stars.
              <br />
              <span className="italic text-brand-red">Earned Honestly.</span>
            </h2>
            <a
              href={BIZ.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-brand-creamDark bg-white px-[18px] py-2.5 text-[13px] font-semibold text-brand-obsidian no-underline shadow-sm hover:border-brand-red/40"
              aria-label="View Guntur Restro on Google Maps"
            >
              <MapPin className="h-4 w-4 text-brand-red" aria-hidden />
              View on Google Maps
            </a>
          </div>
        </Reveal>

        <div className="reviews-grid grid w-full max-w-full grid-cols-1 gap-4 md:grid-cols-2">
          {REVIEWS_DATA.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <blockquote className="review-card rounded-sm border-l-4 border-brand-red bg-white p-6 shadow-[0_2px_20px_rgba(15,42,68,0.05)]">
                <StarRating count={r.stars} />
                <p className="my-3.5 text-[14px] italic leading-relaxed text-neutral-800">&ldquo;{r.text}&rdquo;</p>
                <footer className="flex items-center justify-between gap-3">
                  <cite className="not-italic text-[13px] font-bold text-brand-obsidian">— {r.name}</cite>
                  <span
                    className="rounded px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em]"
                    style={{ background: COLORS.redGlow, color: COLORS.red }}
                  >
                    {r.tag}
                  </span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 text-center">
            <StarRating count={5} size={20} />
            <span className="font-display text-2xl font-bold text-brand-obsidian">4.8</span>
            <span className="text-[14px] text-neutral-500">/ 5.0 on Google Maps ·</span>
            <a
              href={BIZ.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-bold text-brand-red no-underline"
            >
              Leave a Review →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
