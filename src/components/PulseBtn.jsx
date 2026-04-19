import { useState } from "react";
import { COLORS } from "../constants.js";

export function PulseBtn({
  children,
  href,
  onClick,
  type = "button",
  style = {},
  variant = "saffron",
  ariaLabel,
}) {
  const [hov, setHov] = useState(false);
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    fontSize: 14,
    padding: "13px 26px",
    borderRadius: 3,
    textDecoration: "none",
    cursor: "pointer",
    border: "none",
    transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
    letterSpacing: "0.04em",
  };
  const variants = {
    saffron: {
      background: hov ? COLORS.saffronDark : COLORS.saffron,
      color: COLORS.obsidian,
      boxShadow: hov ? `0 8px 32px ${COLORS.saffron}55` : `0 0 0 0 ${COLORS.saffron}00`,
      transform: hov ? "scale(1.03) translateY(-1px)" : "scale(1)",
    },
    ghost: {
      background: "transparent",
      color: COLORS.white,
      border: "1.5px solid rgba(255,255,255,0.35)",
      backdropFilter: "blur(8px)",
    },
    red: {
      background: hov ? COLORS.redDark : COLORS.red,
      color: COLORS.white,
      boxShadow: hov ? `0 8px 24px ${COLORS.red}66` : "none",
      transform: hov ? "scale(1.03)" : "scale(1)",
    },
  };

  const Tag = href ? "a" : "button";

  return (
    <Tag
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      type={href ? undefined : type}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ ...base, ...variants[variant], ...style }}
    >
      {children}
    </Tag>
  );
}
