import { motion } from "framer-motion";
import { ChefHat, Egg, Fish, Shrimp, Soup, UtensilsCrossed } from "lucide-react";
import { COLORS, MENU } from "../constants.js";
import { ChilliMeter } from "../components/ChilliMeter.jsx";
import { PulseBtn } from "../components/PulseBtn.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { SectionLabel } from "../components/SectionLabel.jsx";
import { buildWhatsAppUrl } from "../utils/whatsapp.js";

const ICONS = [Soup, Shrimp, Fish, UtensilsCrossed, Egg, ChefHat];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const rowVariant = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
  },
};

export function MenuSection({ whatsappHref }) {
  const waMenu = whatsappHref || buildWhatsAppUrl("food");

  return (
    <section
      id="menu"
      className="overflow-x-hidden px-4 py-[clamp(3.5rem,8vw,6.25rem)] sm:px-[clamp(1rem,4vw,3.75rem)]"
    >
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <SectionLabel text="Signature Kitchen" />
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold leading-tight text-brand-obsidian">
            Dishes Worth
            <br />
            <span className="italic text-brand-red">The Drive.</span>
          </h2>
          <p className="mb-12 max-w-[420px] text-[15px] leading-relaxed text-neutral-700">
            Each dish carries the Guntur Sannam chilli legacy. The spice meter is honest.
          </p>
        </Reveal>

        <motion.div
          className="menu-grid grid w-full max-w-full grid-cols-1 gap-0 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px", amount: 0.15 }}
        >
          {MENU.map((dish, i) => {
            const Ico = ICONS[i % ICONS.length];
            return (
              <motion.div key={dish.name} variants={rowVariant}>
                <div
                  className={`dish-row w-full max-w-full rounded px-4 py-[22px] text-left transition-colors hover:bg-brand-red/[0.04] md:px-5 ${i % 2 === 0 ? "md:border-r md:border-brand-creamDark" : ""} border-b border-brand-creamDark`}
                  role="group"
                  aria-label={dish.name}
                >
                  <div className="flex max-w-full justify-between gap-3">
                    <div className="flex min-w-0 flex-1 gap-3.5">
                      <Ico
                        className="mt-0.5 h-8 w-8 shrink-0 text-brand-red"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex flex-wrap items-center gap-2">
                          <span className="font-display text-[17px] font-bold text-brand-obsidian">
                            {dish.name}
                          </span>
                          <span
                            className="rounded px-2 py-0.5 text-[9px] font-extrabold tracking-[0.12em]"
                            style={{
                              background: COLORS.redGlow,
                              color: COLORS.red,
                            }}
                          >
                            {dish.tag}
                          </span>
                        </div>
                        <p className="mb-2.5 text-[13px] leading-snug text-neutral-600">
                          {dish.sub}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-500">
                            Heat
                          </span>
                          <ChilliMeter level={dish.heat} />
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="font-display text-lg font-bold text-brand-red">
                        {dish.price}
                      </div>
                      <div className="mt-0.5 text-[10px] text-neutral-400">
                        est.
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <Reveal delay={0.3}>
          <div className="mt-10 text-center">
            <PulseBtn href={waMenu} variant="red" aria-label="WhatsApp for full menu and daily specials">
              WhatsApp for Full Menu & Daily Specials
            </PulseBtn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
