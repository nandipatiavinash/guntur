import { MapPin } from "lucide-react";
import { IMAGES } from "../constants.js";
import { Reveal } from "../components/Reveal.jsx";
import { SectionLabel } from "../components/SectionLabel.jsx";

const tiles = [
  {
    src: IMAGES.biryani,
    alt: "Rich Guntur-style mutton biryani with vibrant spices",
    caption: "Guntur heat · slow dum",
  },
  {
    src: IMAGES.hotelRoom,
    alt: "Modern air-conditioned hotel room interior",
    caption: "Premium AC rooms · highway rest",
  },
  {
    src: IMAGES.ghatRoad,
    alt: "Mountain ghat road winding through misty hills",
    caption: "Minutes to the Eastern Ghats",
  },
];

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="border-y border-brand-creamDark bg-brand-creamDark/40 px-4 py-[clamp(3rem,7vw,5rem)] sm:px-[clamp(1rem,4vw,3.75rem)]"
      aria-label="Photo gallery"
    >
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <SectionLabel text="Arrival Preview" />
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-tight text-brand-obsidian">
              Flavors, Comfort,
              <br />
              <span className="italic text-brand-red">&amp; The Road Ahead.</span>
            </h2>
            <p className="max-w-md text-[15px] leading-relaxed text-neutral-700">
              Real plates, real rooms, real ghats — the essentials before you climb toward Araku.
            </p>
          </div>
        </Reveal>

        <div className="grid w-full max-w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((t) => (
            <Reveal key={t.caption}>
              <figure className="group overflow-hidden rounded-md border border-neutral-300/80 bg-white shadow-sm">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={t.src}
                    alt={t.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full max-w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <figcaption className="absolute bottom-0 left-0 right-0 flex items-center gap-2 px-4 py-3 text-sm font-semibold text-white drop-shadow">
                    <MapPin className="h-4 w-4 shrink-0 text-brand-saffron" aria-hidden />
                    {t.caption}
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
