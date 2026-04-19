import { COLORS } from "../constants.js";

export function SectionLabel({ text, light = false }) {
  return (
    <div className="mb-3.5 flex items-center gap-3">
      <div
        className="h-px w-8"
        style={{ background: light ? COLORS.saffron : COLORS.red }}
      />
      <span
        className="text-[10px] font-bold uppercase tracking-[0.22em]"
        style={{ color: light ? COLORS.saffron : COLORS.red }}
      >
        {text}
      </span>
    </div>
  );
}
