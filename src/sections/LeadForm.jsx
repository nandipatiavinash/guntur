import { useState } from "react";
import { BIZ, COLORS } from "../constants.js";
import { PulseBtn } from "../components/PulseBtn.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { SectionLabel } from "../components/SectionLabel.jsx";
import { buildInquiryMailto } from "../utils/mailto.js";
import { validateIndianMobile } from "../utils/phone.js";

const initial = {
  name: "",
  phone: "",
  date: "",
  guests: "2",
  type: "dine",
  notes: "",
};

export function LeadForm({ whatsappHref }) {
  const [formData, setFormData] = useState(initial);
  const [formSent, setFormSent] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPhoneError("");
    if (!String(formData.name || "").trim()) return;
    if (!validateIndianMobile(formData.phone)) {
      setPhoneError("Enter a valid 10-digit Indian mobile number.");
      return;
    }
    const mailto = buildInquiryMailto({ formData });
    window.location.href = mailto;
    setFormSent(true);
  };

  return (
    <section id="book" className="px-4 py-[clamp(3.75rem,8vw,6.25rem)] sm:px-[clamp(1rem,4vw,3.75rem)]">
      <div className="mx-auto max-w-[680px]">
        <Reveal>
          <div className="mb-12 text-center">
            <SectionLabel text="Reserve Your Experience" />
            <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-extrabold leading-tight text-brand-obsidian">
              Stay &amp; Dine Inquiry
            </h2>
            <p className="mt-3 text-[15px] text-neutral-700">
              We respond within minutes · {BIZ.hours}
            </p>
          </div>
        </Reveal>

        {formSent ? (
          <Reveal>
            <div
              className="rounded-sm border-2 px-8 py-14 text-center shadow-xl"
              style={{ background: COLORS.white, borderColor: COLORS.saffron, boxShadow: `0 16px 64px ${COLORS.saffron}22` }}
            >
              <div className="mb-4 text-5xl" aria-hidden>
                🙏
              </div>
              <h3 className="mb-2.5 font-display text-[26px] text-brand-obsidian">Inquiry Sent!</h3>
              <p className="mb-7 leading-relaxed text-neutral-700">
                Your mail app should open with the enquiry details.
                <br />
                For instant confirmation, WhatsApp us directly.
              </p>
              <PulseBtn href={whatsappHref} variant="saffron" style={{ fontSize: 15 }} aria-label="Open WhatsApp">
                WhatsApp Now for Instant Reply
              </PulseBtn>
            </div>
          </Reveal>
        ) : (
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-sm bg-white p-6 shadow-[0_8px_64px_rgba(15,42,68,0.07)] sm:p-10 md:p-11"
              noValidate
            >
              <div className="mb-6 flex overflow-hidden rounded-sm border-[1.5px] border-brand-creamDark">
                {[
                  { v: "dine", l: "Dine In" },
                  { v: "stay", l: "Overnight Stay" },
                ].map((opt) => (
                  <button
                    key={opt.v}
                    type="button"
                    className="flex-1 cursor-pointer px-3 py-3 font-sans text-[13px] font-bold transition-colors"
                    style={{
                      background: formData.type === opt.v ? COLORS.obsidian : "transparent",
                      color: formData.type === opt.v ? COLORS.white : "#737373",
                    }}
                    aria-pressed={formData.type === opt.v}
                    aria-label={`Select ${opt.l}`}
                    onClick={() => setFormData({ ...formData, type: opt.v })}
                  >
                    {opt.l}
                  </button>
                ))}
              </div>

              <div className="mb-3.5 grid grid-cols-1 gap-3.5 md:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.1em] text-brand-obsidian">
                    Your Name <span className="text-brand-red">*</span>
                  </label>
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    type="text"
                    placeholder="Ravi Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full max-w-full rounded-sm border-[1.5px] border-brand-creamDark bg-brand-cream px-3.5 py-3 text-sm text-brand-obsidian outline-none ring-brand-red/40 focus:border-brand-red focus:ring-2"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.1em] text-brand-obsidian">
                    Phone / WhatsApp <span className="text-brand-red">*</span>
                  </label>
                  <input
                    required
                    name="phone"
                    autoComplete="tel"
                    type="tel"
                    placeholder="+91 98765 43210"
                    inputMode="numeric"
                    value={formData.phone}
                    onChange={(e) => {
                      setPhoneError("");
                      setFormData({ ...formData, phone: e.target.value });
                    }}
                    aria-invalid={Boolean(phoneError)}
                    aria-describedby={phoneError ? "phone-error" : undefined}
                    className="w-full max-w-full rounded-sm border-[1.5px] border-brand-creamDark bg-brand-cream px-3.5 py-3 text-sm text-brand-obsidian outline-none ring-brand-red/40 focus:border-brand-red focus:ring-2"
                  />
                  {phoneError ? (
                    <p id="phone-error" className="mt-1 text-xs font-semibold text-brand-red" role="alert">
                      {phoneError}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mb-3.5 grid grid-cols-1 gap-3.5 md:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.1em] text-brand-obsidian">
                    Visit Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full max-w-full rounded-sm border-[1.5px] border-brand-creamDark bg-brand-cream px-3.5 py-3 text-sm text-brand-obsidian outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/40"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.1em] text-brand-obsidian">
                    No. of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full max-w-full cursor-pointer rounded-sm border-[1.5px] border-brand-creamDark bg-brand-cream px-3.5 py-3 text-sm text-brand-obsidian outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/40"
                  >
                    {["1", "2", "3", "4", "5", "6", "7", "8", "10", "12", "15", "20+"].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === "1" ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.1em] text-brand-obsidian">
                  Message / Special Requirements
                </label>
                <textarea
                  rows={3}
                  name="notes"
                  placeholder="Any special requirements, dietary needs, large group needs..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full max-w-full resize-y rounded-sm border-[1.5px] border-brand-creamDark bg-brand-cream px-3.5 py-3 text-sm text-brand-obsidian outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/40"
                />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <PulseBtn type="submit" variant="saffron" style={{ fontSize: 14, padding: "14px 32px" }} aria-label="Send inquiry email">
                  Send Inquiry →
                </PulseBtn>
                <span className="text-[13px] text-neutral-500">
                  or{" "}
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-brand-red no-underline"
                  >
                    WhatsApp for instant reply
                  </a>
                </span>
              </div>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  );
}
