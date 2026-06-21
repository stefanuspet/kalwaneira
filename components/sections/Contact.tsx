"use client";

import { useState, type FormEvent } from "react";
import { contactChannels } from "@/data/content";

type House = "zanetuno" | "nusateraso" | "both";

interface FormState {
  house: House;
  name: string;
  company: string;
  email: string;
  brief: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    house: "nusateraso",
    name: "",
    company: "",
    email: "",
    brief: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-paper py-[120px] sm:py-[72px]" id="contact">
      <div className="max-w-[1320px] mx-auto px-12 lg:px-7 sm:px-5">
        {/* Label row */}
        <div className="flex items-center gap-3 mb-10">
          <span
            className="text-[10.5px] tracking-[0.18em] uppercase text-gold-deep font-medium"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            — Get in touch
          </span>
          <span
            className="text-[10.5px] tracking-[0.15em] text-muted font-medium"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            CORRESPONDENCE
          </span>
          <span className="flex-1 h-px bg-line" />
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[88px] items-start">
          {/* Left — intro */}
          <div>
            <h2
              className="font-extrabold leading-[1.05] tracking-[-0.035em] text-red mb-6"
              style={{ fontSize: "clamp(28px, 3.2vw, 46px)" }}
            >
              Share your requirements, destination, and timeline with us. We
              will provide a tailored logistical strategy to ensure seamless
              delivery.
            </h2>
            {/* <p className="text-[16px] text-ink-soft leading-[1.7] mb-10 max-w-[420px] italic">
              &ldquo;Tell us what you need, where it&apos;s going, and when.
              We&apos;ll write back with a path.&rdquo;
            </p> */}

            {/* Contact channels */}
            <div className="flex flex-col gap-0">
              {contactChannels.map((ch, i) => (
                <div
                  key={i}
                  className="grid items-center py-4 border-b border-line"
                  style={{ gridTemplateColumns: "90px 1fr" }}
                >
                  <span
                    className="text-[10.5px] tracking-[0.12em] uppercase text-muted font-medium"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {ch.key}
                  </span>
                  <span className="text-[14px] text-ink font-normal">
                    {ch.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form
            className="bg-paper-soft border border-line rounded-[16px] p-8 sm:p-6 flex flex-col gap-6"
            onSubmit={handleSubmit}
            noValidate
          >
            <div>
              <div className="text-[19px] font-bold text-ink tracking-[-0.02em] mb-1">
                Send an enquiry.
              </div>
            </div>

            {/* Brand choice */}
            <div className="flex flex-col gap-2">
              <label
                className="text-[11px] tracking-[0.08em] uppercase text-muted-soft font-medium"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Interested in
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["nusateraso", "zanetuno", "both"] as House[]).map((h) => (
                  <span key={h}>
                    <input
                      type="radio"
                      id={`house-${h}`}
                      name="house"
                      checked={form.house === h}
                      onChange={() => setForm((f) => ({ ...f, house: h }))}
                      className="sr-only"
                    />
                    <label
                      htmlFor={`house-${h}`}
                      className={[
                        "flex items-center justify-center px-2 py-[11px] border rounded-[8px] text-[11px] font-semibold tracking-[0.005em] cursor-pointer transition-all duration-[180ms] text-center",
                        form.house === h
                          ? "bg-red border-red text-white shadow-[0_4px_10px_-4px_rgba(225,29,42,0.4)]"
                          : "border-line text-ink-soft hover:border-red hover:text-red",
                      ].join(" ")}
                    >
                      {h.charAt(0).toUpperCase() + h.slice(1)}
                    </label>
                  </span>
                ))}
              </div>
            </div>

            {/* Fields */}
            {[
              {
                id: "contact-name",
                label: "Full name",
                type: "text",
                placeholder: "",
                key: "name" as keyof FormState,
              },
              {
                id: "contact-company",
                label: "Company & country",
                type: "text",
                placeholder: "",
                key: "company" as keyof FormState,
              },
              {
                id: "contact-email",
                label: "Business email",
                type: "email",
                placeholder: "",
                key: "email" as keyof FormState,
              },
            ].map((field) => (
              <div key={field.id} className="flex flex-col gap-1">
                <label
                  htmlFor={field.id}
                  className="text-[11px] tracking-[0.08em] uppercase text-muted-soft font-medium"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.key] as string}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, [field.key]: e.target.value }))
                  }
                  required
                  className="w-full text-[14px] text-ink bg-transparent outline-none transition-colors duration-200 pb-2 pt-2 placeholder:text-muted-soft focus:[border-bottom-color:var(--color-red)]"
                  style={{
                    border: "none",
                    borderBottom: "2px solid var(--color-line)",
                  }}
                />
              </div>
            ))}

            {/* Brief textarea */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="contact-brief"
                className="text-[11px] tracking-[0.08em] uppercase text-muted-soft font-medium"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Brief
              </label>
              <textarea
                id="contact-brief"
                rows={3}
                placeholder=""
                value={form.brief}
                onChange={(e) =>
                  setForm((f) => ({ ...f, brief: e.target.value }))
                }
                className="w-full text-[14px] text-ink bg-transparent outline-none resize-none transition-colors duration-200 pb-2 pt-2 placeholder:text-muted-soft focus:[border-bottom-color:var(--color-red)]"
                style={{
                  border: "none",
                  borderBottom: "2px solid var(--color-line)",
                }}
              />
            </div>

            {submitted ? (
              <div className="flex items-center gap-3 px-5 py-4 bg-earth-wash border border-earth-soft rounded-[10px] text-[14px] font-semibold text-earth">
                ✓&nbsp;&nbsp;Sent — we&apos;ll be in touch.
              </div>
            ) : (
              <button
                type="submit"
                className="inline-flex items-center gap-2.5 px-[22px] py-3 rounded-full text-[13px] font-semibold text-white bg-red border border-transparent transition-all duration-200 hover:bg-red-deep hover:-translate-y-px shadow-[0_4px_14px_-6px_rgba(225,29,42,0.5)] self-start mt-2 group"
              >
                Send enquiry
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">
                  →
                </span>
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
