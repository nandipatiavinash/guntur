import {
  Baby,
  Bolt,
  Eye,
  ShieldCheck,
  Snowflake,
  Trophy,
} from "lucide-react";
import { COLORS } from "../constants.js";

const ITEMS = [
  { Icon: ShieldCheck, text: "Spotless 5★ Restrooms", hot: true },
  { Icon: Eye, text: "CCTV-Monitored Parking" },
  { Icon: Baby, text: "100% Family Secure" },
  { Icon: Bolt, text: "< 12 Min Highway Service" },
  { Icon: Trophy, text: "Landmark Since 2013" },
  { Icon: Snowflake, text: "AC Dining Hall" },
];

export function TrustBar() {
  return (
    <div className="bg-brand-obsidian px-4 py-[18px] sm:px-[clamp(1rem,4vw,3.75rem)]">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-x-10 gap-y-3">
        {ITEMS.map(({ Icon, text, hot }) => (
          <div key={text} className="flex items-center gap-2">
            <Icon
              className="h-4 w-4 shrink-0 text-brand-saffron"
              strokeWidth={2}
              aria-hidden
            />
            <span
              className="text-xs font-medium tracking-[0.04em]"
              style={{
                color: hot ? COLORS.saffron : "rgba(255,255,255,0.78)",
                fontWeight: hot ? 700 : 500,
              }}
            >
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
