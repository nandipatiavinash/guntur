import { Flame } from "lucide-react";
import { COLORS } from "../constants.js";

export function ChilliMeter({ level }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden>
      {[1, 2, 3, 4, 5].map((i) => (
        <Flame
          key={i}
          size={12}
          strokeWidth={2}
          color={i <= level ? COLORS.red : "#d4c5b0"}
          fill={i <= level ? COLORS.red : "transparent"}
        />
      ))}
    </span>
  );
}
