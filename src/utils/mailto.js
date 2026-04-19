import { BIZ } from "../constants.js";
import { formatIndianMobileDisplay, normalizeIndianMobile } from "./phone.js";

export function buildInquiryMailto({ formData }) {
  const digits = normalizeIndianMobile(formData.phone);
  const phoneLine = digits
    ? `+91 ${formatIndianMobileDisplay(digits)}`
    : formData.phone.trim();

  const typeLine =
    formData.type === "stay" ? "Overnight Stay / Rooms" : "Dine-in / Table";

  const subject = `[Guntur Restro Inquiry] ${typeLine} — ${formData.name.trim()}`;

  const body = [
    "Dear Guntur Restro Team,",
    "",
    "Please find my enquiry details below:",
    "",
    `Name: ${formData.name.trim()}`,
    `Phone / WhatsApp: ${phoneLine}`,
    `Preferred date: ${formData.date || "Not specified"}`,
    `Guests / party size: ${formData.guests}`,
    `Request type: ${typeLine}`,
    "",
    "Notes / requirements:",
    formData.notes.trim() || "—",
    "",
    "—",
    `Sent via Guntur Restro web inquiry · ${BIZ.name}`,
    BIZ.address,
  ].join("\n");

  const q = new URLSearchParams({
    subject,
    body,
  });

  return `mailto:${BIZ.email}?${q.toString()}`;
}
