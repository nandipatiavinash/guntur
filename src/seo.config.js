import { BIZ } from "./constants.js";

const OG_IMAGE =
  "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=1200&h=630&q=85";

/**
 * Canonical site URL for absolute OG/canonical tags on Vercel.
 * Set `VITE_SITE_URL=https://your-domain.vercel.app` in project env.
 */
export function getSiteUrl() {
  if (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL) {
    return import.meta.env.VITE_SITE_URL.replace(/\/$/, "");
  }
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  return "";
}

export function buildSeoMetadata(siteUrl = getSiteUrl()) {
  const canonical = siteUrl ? `${siteUrl}/` : undefined;

  return {
    title: "Guntur Restro | Best Spicy Biryani & Stay in S. Kota (Near Araku)",
    description:
      "Experience the legendary 4.8★ rated Guntur flavors and premium lodging on the highway to Araku. Perfect stop for families near Thatipudi Reservoir.",
    canonical,
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: "Guntur Restro",
      title: "Guntur Restro · 4.8★ Andhra Biryani & Rooms · S. Kota",
      description:
        "Premium highway dining & stay on the road to Araku. 4.8★ Google-rated Guntur spice, family-safe hygiene, AC dining — minutes from Thatipudi Reservoir.",
      url: canonical,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Guntur Restro — fiery Andhra biryani and hospitality on the Araku route",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Guntur Restro | 4.8★ Biryani & Stay · S. Kota (Near Araku)",
      description:
        "Legendary Guntur heat, clean rooms, CCTV parking — your pitstop before the ghats.",
      image: OG_IMAGE,
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: "Guntur Restro",
      image: OG_IMAGE,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Boddavara Junction",
        addressLocality: "S. Kota",
        addressRegion: "Andhra Pradesh",
        postalCode: "535145",
        addressCountry: "IN",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "200",
      },
      servesCuisine: "Andhra",
      telephone: `+${BIZ.phoneE164}`,
    },
  };
}
