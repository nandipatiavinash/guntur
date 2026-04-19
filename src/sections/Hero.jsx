import { Circle } from "lucide-react";
import { BIZ, IMAGES } from "../constants.js";
import { PulseBtn } from "../components/PulseBtn.jsx";
import { StarRating } from "../components/StarRating.jsx";

export function Hero({ scrollY, whatsappHref }) {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <img
          src={IMAGES.biryani}
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
            radial-gradient(ellipse at 30% 40%, rgba(198,40,40,0.42) 0%, transparent 55%),
            radial-gradient(ellipse at 75% 20%, rgba(244,196,48,0.14) 0%, transparent 45%),
            radial-gradient(ellipse at 60% 85%, rgba(139,0,0,0.33) 0%, transparent 50%),
            linear-gradient(170deg, #1a0500ee 0%, #2d0a0aec 35%, #0F2A44ee 100%)
          `,
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          { size: 600, top: "5%", right: "-15%", opacity: 0.04, delay: "0s" },
          { size: 350, top: "55%", right: "8%", opacity: 0.06, delay: "1s" },
          { size: 200, top: "20%", left: "5%", opacity: 0.05, delay: "2s" },
        ].map((c, i) => (
          <div
            key={i}
            className="float-anim absolute rounded-full border border-amber-400/30"
            style={{
              top: c.top,
              left: c.left,
              right: c.right,
              width: c.size,
              height: c.size,
              opacity: c.opacity,
              animationDelay: c.delay,
            }}
          />
        ))}
      </div>

      <div
        className="pointer-events-none absolute right-[clamp(-2.5rem,5vw,2.5rem)] top-[8%] select-none text-[clamp(140px,22vw,280px)] leading-none opacity-[0.07]"
        style={{ transform: `translateY(${scrollY * 0.15}px) rotate(-12deg)` }}
        aria-hidden
      >
        🍛
      </div>

      <div className="hero-badge absolute left-4 top-[clamp(90px,13vh,120px)] z-[2] inline-flex items-center gap-2 rounded-sm border border-amber-400/35 bg-amber-400/10 px-3.5 py-1.5 sm:left-[clamp(1rem,4vw,3.75rem)]">
        <span className="text-xs" aria-hidden>
          📍
        </span>
        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-brand-saffron">
          Boddavara Junction · S. Kota, Andhra Pradesh
        </span>
      </div>

      <div className="hero-badge absolute right-4 top-[clamp(90px,13vh,120px)] z-[2] flex max-w-[min(100%,320px)] flex-wrap items-center gap-2 rounded-sm border border-brand-saffron bg-amber-400/15 px-3.5 py-1.5 text-[11px] font-bold sm:right-[clamp(1rem,4vw,3.75rem)]">
        <span className="text-brand-saffron">✓ Verified landmark</span>
        <span className="text-white">{BIZ.rating}★ Google Maps</span>
      </div>

      <div className="relative z-[2] max-w-[960px] px-4 pb-28 pt-[clamp(60px,10vw,110px)] sm:px-[clamp(1rem,4vw,3.75rem)]">
        <h1
          id="hero-heading"
          className="hero-h1 font-display font-black leading-[1.02] tracking-tight text-white"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5.75rem)" }}
        >
          <span className="hero-line-1 block">Guntur Heat.</span>
          <span className="hero-line-2 mt-1 block">
            <span className="italic text-brand-saffron">{BIZ.rating}★</span>
            <span className="text-white"> Highway Solace.</span>
          </span>
        </h1>

        <p className="hero-sub mt-5 max-w-[520px] text-[clamp(15px,2.2vw,18px)] leading-relaxed text-white/75">
          Serving the Araku circuit since 2013. Your essential pitstop near Vaikunta Giri Temple &amp;
          Thatipudi Reservoir — for those who refuse to settle for ordinary roadside.
        </p>

        <div className="hero-btns mt-9 flex flex-wrap gap-3">
          <PulseBtn
            href={whatsappHref}
            variant="saffron"
            style={{ fontSize: 15, padding: "15px 30px" }}
            aria-label="Book on WhatsApp"
          >
            Book on WhatsApp
          </PulseBtn>
          <PulseBtn
            href="#menu"
            variant="ghost"
            style={{ fontSize: 14, padding: "15px 24px" }}
            aria-label="Jump to menu section"
          >
            View Menu ↓
          </PulseBtn>
        </div>

        <div className="hero-badge mt-10 flex flex-wrap items-center gap-5">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <StarRating count={5} size={18} />
              <span className="text-xl font-bold text-white">{BIZ.rating}</span>
              <span className="text-[13px] text-white/45">/ 5.0</span>
            </div>
            <span className="text-xs tracking-[0.06em] text-white/50">{BIZ.reviews} GOOGLE REVIEWS</span>
          </div>
          <div className="hide-mobile h-9 w-px bg-white/15" aria-hidden />
          {["Family Safe", "5★ Hygiene", "Est. 2013"].map((t) => (
            <div key={t} className="flex items-center gap-1.5">
              <Circle className="h-2 w-2 fill-brand-saffron text-brand-saffron" strokeWidth={0} aria-hidden />
              <span className="text-[13px] font-medium text-white/80">{t}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-brand-cream"
        aria-hidden
      />

      <div className="absolute bottom-7 left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-1.5">
        <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-amber-400/50 to-transparent" />
      </div>
    </section>
  );
}
