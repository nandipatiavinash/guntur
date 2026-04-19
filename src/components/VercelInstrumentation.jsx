import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

/** Production analytics — safe no-ops if packages missing in older installs */
export function VercelInstrumentation() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
