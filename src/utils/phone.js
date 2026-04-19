/**
 * Accepts Indian mobile numbers: 10 digits (6–9 leading) or +91 / 91 prefix.
 * Returns normalized 10-digit string or null.
 */
export function normalizeIndianMobile(input) {
  const raw = String(input || "").trim();
  if (!raw) return null;
  let d = raw.replace(/\D/g, "");
  if (d.length === 12 && d.startsWith("91")) d = d.slice(2);
  if (d.length === 11 && d.startsWith("0")) d = d.slice(1);
  if (d.length !== 10 || !/^[6-9]/.test(d)) return null;
  return d;
}

export function validateIndianMobile(input) {
  return normalizeIndianMobile(input) !== null;
}

export function formatIndianMobileDisplay(digits10) {
  const a = digits10.slice(0, 5);
  const b = digits10.slice(5);
  return `${a} ${b}`;
}
