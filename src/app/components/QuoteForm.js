"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
// Industry options for the quote form — a plain list so buyers can still
// tell us their sector even though the industry pages were removed.
const industryOptions = [
  "Sportswear",
  "Work Uniforms",
  "Medical Uniforms",
  "Hospitality Uniforms",
  "Corporate Uniforms",
  "School Uniforms",
  "Military & Tactical",
  "Accessories",
];

export default function QuoteForm() {
  const params = useSearchParams();
  const prefillProduct = params.get("product") || "";
  const prefillIndustry = params.get("industry") || "";

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    industry: prefillIndustry,
    product: prefillProduct,
    quantity: "",
    message: "",
  });

  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSending(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err.message);
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand/20 bg-brand/5 p-10 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-brand" />
        <h2 className="mt-4 text-2xl text-navy">Thank you!</h2>
        <p className="mt-2 text-navy/70">
          Your quote request has been received. Our team will get back to you
          within 1 business day
          {form.product ? (
            <>
              {" "}
              regarding <span className="font-semibold">{form.product}</span>
            </>
          ) : null}
          .
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-outline mt-6"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8"
    >
      {(prefillProduct || prefillIndustry) && (
        <div className="mb-6 rounded-lg border border-brand/20 bg-brand/5 px-4 py-3 text-sm text-navy/80">
          Requesting a quote for{" "}
          <span className="font-bold text-brand">
            {prefillProduct || prefillIndustry}
          </span>
          {prefillProduct && prefillIndustry ? ` (${prefillIndustry})` : ""}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" required>
          <input
            name="name"
            required
            value={form.name}
            onChange={update}
            className={inputCls}
            placeholder="John Doe"
          />
        </Field>
        <Field label="Company">
          <input
            name="company"
            value={form.company}
            onChange={update}
            className={inputCls}
            placeholder="Your company"
          />
        </Field>
        <Field label="Email" required>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={update}
            className={inputCls}
            placeholder="you@company.com"
          />
        </Field>
        <Field label="Phone">
          <input
            name="phone"
            value={form.phone}
            onChange={update}
            className={inputCls}
            placeholder="+44 0000 000000"
          />
        </Field>
        <Field label="Country">
          <input
            name="country"
            value={form.country}
            onChange={update}
            className={inputCls}
            placeholder="United Kingdom"
          />
        </Field>
        <Field label="Industry">
          <select
            name="industry"
            value={form.industry}
            onChange={update}
            className={inputCls}
          >
            <option value="">Select an industry</option>
            {industryOptions.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Product / Item">
          <input
            name="product"
            value={form.product}
            onChange={update}
            className={inputCls}
            placeholder="e.g. Team Uniforms"
          />
        </Field>
        <Field label="Estimated Quantity">
          <input
            name="quantity"
            value={form.quantity}
            onChange={update}
            className={inputCls}
            placeholder="e.g. 500 units"
          />
        </Field>
      </div>

      <Field label="Project Details" className="mt-5">
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={update}
          className={inputCls}
          placeholder="Tell us about your requirements — sizes, colours, branding, deadlines…"
        />
      </Field>

      {error && (
        <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={sending}
        className="btn-primary mt-6 w-full disabled:opacity-60 sm:w-auto"
      >
        {sending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send Request <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}

const inputCls =
  "w-full rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm text-navy outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

function Field({ label, required, children, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-sm font-semibold text-navy">
        {label}
        {required && <span className="text-brand"> *</span>}
      </span>
      {children}
    </label>
  );
}
