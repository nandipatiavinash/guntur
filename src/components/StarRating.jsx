import { Star } from "lucide-react";
import { COLORS } from "../constants.js";

export function StarRating({ count, size = 16 }) {
  return (
    <span className="inline-flex gap-0.5" role="img" aria-label={`${count} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          width={size}
          height={size}
          fill={i <= count ? COLORS.saffron : "none"}
          stroke={i <= count ? COLORS.saffron : "#b8a78e"}
          strokeWidth={1.5}
        />
      ))}
    </span>
  );
}
