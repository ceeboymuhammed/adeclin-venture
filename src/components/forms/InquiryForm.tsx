"use client";

import { useMemo, useState } from "react";
import { LeadInput } from "@/lib/validators";

type Status = "idle" | "loading" | "success" | "error";

const inquiryTypes = [
  "Livestock Import & Export",
  "Farming & Farm Management",
  "Agricultural Consulting & Training",
  "PURE IRON BEANS (Wholesale)",
  "Other",
] as const;

export default function InquiryForm({ sourcePage }: { sourcePage?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [form, setForm] = useState<LeadInput>({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "Livestock Import & Export",
    message: "",
    sourcePage: sourcePage ?? "",
  });

  const canSubmit = useMemo(() => {
    return (
      form.name.trim().length >= 2 &&
      form.email.includes("@") &&
      form.phone.trim().length >= 7 &&
      form.message.trim().length >= 10
    );
  }, [form]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, sourcePage: sourcePage ?? form.sourcePage }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setError(data?.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        inquiryType: "Livestock Import & Export",
        message: "",
        sourcePage: sourcePage ?? "",
      });
    } catch {
      setStatus("error");
      setError("Network error. Please check your connection and try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium">Full name</label>
          <input
            className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900"
            value={form.name}
            onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900"
            value={form.email}
            onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
            placeholder="you@company.com"
            type="email"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium">Phone / WhatsApp</label>
          <input
            className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900"
            value={form.phone}
            onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
            placeholder="+234..."
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium">Company (optional)</label>
          <input
            className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900"
            value={form.company ?? ""}
            onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))}
            placeholder="Company name"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="text-sm font-medium">Inquiry type</label>
          <select
            className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900"
            value={form.inquiryType}
           onChange={(e) => {
  const value = e.target.value as LeadInput["inquiryType"];
  setForm((s) => ({ ...s, inquiryType: value }));
}}
          >
            {inquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="text-sm font-medium">Message</label>
          <textarea
            className="mt-1 min-h-120px w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900"
            value={form.message}
            onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
            placeholder="Tell us what you need: product/service, quantity, destination, timeline."
            required
          />
          <p className="mt-2 text-xs text-neutral-600">
            Tip: For wholesale, include quantity, destination, and timeline.
          </p>
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">{error}</p>
      )}
      {status === "success" && (
        <p className="mt-4 text-sm text-green-700">
          Submitted successfully. We’ll respond as soon as possible.
        </p>
      )}

      <button
        type="submit"
        disabled={!canSubmit || status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
