/** Fixed grain layer — tactile, low-contrast overlay (WCAG-safe: decorative only) */
export function GrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[90] opacity-[0.03] mix-blend-multiply bg-grain bg-repeat"
      aria-hidden
    />
  );
}
