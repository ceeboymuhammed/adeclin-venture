"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import { COMPANY, NAV_LINKS, WHATSAPP } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close menu when route changes via link click
  function closeMenu() {
    setOpen(false);
  }

  // Prevent body scroll when menu is open (nice UX)
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/85 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="h-9 w-9 rounded-xl bg-[#115a37]" aria-hidden />
            <div className="leading-tight">
              <div className="text-sm font-semibold">{COMPANY.name}</div>
              <div className="text-xs text-neutral-600">{COMPANY.tagline}</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-neutral-700 hover:text-neutral-900"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 md:flex">
            <ButtonLink href="/contact" variant="gold">
              Request a Quote
            </ButtonLink>
            <a
              href={WHATSAPP.url()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={WHATSAPP.url()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
              aria-label="Chat on WhatsApp"
            >
              WA
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {/* Simple hamburger / close icon */}
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 bg-neutral-900 transition ${
                    open ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-5 bg-neutral-900 transition ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 h-0.5 w-5 bg-neutral-900 transition ${
                    open ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden ${open ? "block" : "hidden"}`}
      >
        <div className="border-t border-neutral-200 bg-white">
          <Container>
            <div className="py-4">
              <nav className="grid gap-2">
                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={closeMenu}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-4 grid gap-2">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center rounded-xl bg-[#caa24a] px-4 py-2.5 text-sm font-semibold text-black hover:opacity-90"
                >
                  Request a Quote
                </Link>

                <a
                  href={`mailto:${COMPANY.email}`}
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
                >
                  Email
                </a>
              </div>

              <div className="mt-4 rounded-2xl bg-neutral-50 p-4 text-xs text-neutral-700">
                <div className="font-semibold">Contact</div>
                <div className="mt-2">
                  <a className="underline underline-offset-4" href={`tel:${COMPANY.phoneE164}`}>
                    {COMPANY.phoneDisplay}
                  </a>
                </div>
                <div className="mt-1">{COMPANY.address}</div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Optional: click-outside overlay */}
      {open && (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
