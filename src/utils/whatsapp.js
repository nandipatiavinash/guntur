import { BIZ } from "../constants.js";

const BASE = `https://wa.me/${BIZ.phoneE164}?text=`;

export const WHATSAPP_PRESETS = {
  food: `Hi Guntur Restro — I'm on your website looking at the food & biryani section. I'd like to enquire about availability, spice level, and today's specials on the Araku highway. Thank you.`,
  rooms: `Hi Guntur Restro — I'm on your website viewing rooms & stay. Please share availability, AC room types, and rates for S. Kota / Araku travel. Thank you.`,
  default: `Hi Guntur Restro — I'm planning a stop on the Araku circuit from your website. Please help with dining and/or rooms. Thank you.`,
};

export function buildWhatsAppUrl(context) {
  const body =
    context === "food"
      ? WHATSAPP_PRESETS.food
      : context === "rooms"
        ? WHATSAPP_PRESETS.rooms
        : WHATSAPP_PRESETS.default;
  return `${BASE}${encodeURIComponent(body)}`;
}
