import { useEffect, useState } from "react";

/** Stable mapping: DOM id → WhatsApp context key */
export const SECTION_TRACK_DEFS = [
  { id: "menu", kind: "food" },
  { id: "stay", kind: "rooms" },
];

/**
 * Picks `food` or `rooms` when that section is meaningfully in view (for dynamic WhatsApp text).
 */
export function useTrackedSection() {
  const [context, setContext] = useState("default");

  useEffect(() => {
    const defs = SECTION_TRACK_DEFS;
    const ratios = Object.fromEntries(defs.map((d) => [d.kind, 0]));

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const def = defs.find((d) => d.id === e.target.id);
          if (def) ratios[def.kind] = e.intersectionRatio;
        }
        const ranked = defs
          .map((d) => ({ kind: d.kind, r: ratios[d.kind] || 0 }))
          .sort((a, b) => b.r - a.r);
        const top = ranked[0];
        setContext(top && top.r >= 0.14 ? top.kind : "default");
      },
      { rootMargin: "-10% 0px -55% 0px", threshold: [0, 0.08, 0.15, 0.25, 0.45] }
    );

    for (const d of defs) {
      const el = document.getElementById(d.id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, []);

  return context;
}
