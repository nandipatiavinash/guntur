import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { GrainOverlay } from "./components/GrainOverlay.jsx";
import { VercelInstrumentation } from "./components/VercelInstrumentation.jsx";
import { useTrackedSection } from "./hooks/useTrackedSection.js";

import { BentoExperience } from "./sections/BentoExperience.jsx";
import { FindUs } from "./sections/FindUs.jsx";
import { FloatingWhatsApp } from "./sections/FloatingWhatsApp.jsx";
import { Footer } from "./sections/Footer.jsx";
import { Hero } from "./sections/Hero.jsx";
import { LeadForm } from "./sections/LeadForm.jsx";
import { MobileSticky } from "./sections/MobileSticky.jsx";
import { Navbar } from "./sections/Navbar.jsx";
import { ReviewsSection } from "./sections/ReviewsSection.jsx";
import { StaySection } from "./sections/StaySection.jsx";
import { TrustBar } from "./sections/TrustBar.jsx";
import { buildSeoMetadata } from "./seo.config.js";
import { buildWhatsAppUrl } from "./utils/whatsapp.js";

const MenuSection = lazy(async () => {
  const m = await import("./sections/MenuSection.jsx");
  return { default: m.MenuSection };
});

const GallerySection = lazy(async () => {
  const m = await import("./sections/GallerySection.jsx");
  return { default: m.GallerySection };
});

function SectionFallback() {
  return (
    <div className="flex min-h-[120px] items-center justify-center bg-brand-cream px-4 py-16" aria-busy="true" aria-live="polite">
      <span className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-600">Loading section…</span>
    </div>
  );
}

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [navSolid, setNavSolid] = useState(false);
  const waContext = useTrackedSection();

  const seo = useMemo(() => buildSeoMetadata(), []);

  const whatsappHref = useMemo(() => buildWhatsAppUrl(waContext), [waContext]);

  const waLabel =
    waContext === "food" ? "Food & menu enquiry" : waContext === "rooms" ? "Rooms & stay enquiry" : "General enquiry";

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      setNavSolid(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ldJson = JSON.stringify(seo.jsonLd);

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        {seo.canonical ? <link rel="canonical" href={seo.canonical} /> : null}

        <meta property="og:type" content={seo.openGraph.type} />
        <meta property="og:locale" content={seo.openGraph.locale} />
        <meta property="og:site_name" content={seo.openGraph.siteName} />
        <meta property="og:title" content={seo.openGraph.title} />
        <meta property="og:description" content={seo.openGraph.description} />
        {seo.canonical ? <meta property="og:url" content={seo.canonical} /> : null}
        <meta property="og:image" content={seo.openGraph.images[0].url} />
        <meta property="og:image:width" content={String(seo.openGraph.images[0].width)} />
        <meta property="og:image:height" content={String(seo.openGraph.images[0].height)} />
        <meta property="og:image:alt" content={seo.openGraph.images[0].alt} />

        <meta name="twitter:card" content={seo.twitter.card} />
        <meta name="twitter:title" content={seo.twitter.title} />
        <meta name="twitter:description" content={seo.twitter.description} />
        <meta name="twitter:image" content={seo.twitter.image} />

        <script type="application/ld+json">{ldJson}</script>
      </Helmet>

      <div id="top" className="relative min-w-0 font-sans text-brand-obsidian antialiased">
        <GrainOverlay />
        <Navbar navSolid={navSolid} whatsappHref={whatsappHref} />
        <Hero scrollY={scrollY} whatsappHref={whatsappHref} />
        <TrustBar />

        <Suspense fallback={<SectionFallback />}>
          <GallerySection />
        </Suspense>

        <BentoExperience />

        <Suspense fallback={<SectionFallback />}>
          <MenuSection whatsappHref={whatsappHref} />
        </Suspense>

        <ReviewsSection />
        <StaySection whatsappHref={whatsappHref} />
        <LeadForm whatsappHref={whatsappHref} />
        <FindUs />
        <Footer />

        <MobileSticky whatsappHref={whatsappHref} />
        <FloatingWhatsApp href={whatsappHref} contextLabel={waLabel} />

        <VercelInstrumentation />
      </div>
    </>
  );
}
