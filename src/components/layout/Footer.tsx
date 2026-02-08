import Link from "next/link";
import Container from "@/components/ui/Container";
import { COMPANY, NAV_LINKS, WHATSAPP } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container>
        <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-sm font-semibold">{COMPANY.name}</div>
            <p className="mt-2 text-sm text-neutral-600">
              {COMPANY.promise}. We deliver practical agricultural solutions and
              global-trade coordination across West Africa.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">Navigation</div>
            <ul className="mt-3 space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link className="text-neutral-700 hover:text-neutral-900" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>
                <a className="hover:text-neutral-900" href={`tel:${COMPANY.phoneE164}`}>
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li>
                <a className="hover:text-neutral-900" href={`mailto:${COMPANY.email}`}>
                  {COMPANY.email}
                </a>
              </li>
              <li className="text-neutral-600">{COMPANY.address}</li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Quick action</div>
            <div className="mt-3 flex flex-col gap-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Request a Quote
              </Link>
              <a
                href={WHATSAPP.url()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-neutral-200 py-6 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-neutral-900">Privacy</Link>
            <Link href="/terms" className="hover:text-neutral-900">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
