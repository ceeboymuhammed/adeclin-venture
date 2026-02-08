import Link from "next/link";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import { COMPANY, NAV_LINKS, WHATSAPP } from "@/lib/constants";

export default function Header() {
  return (
   <header className="sticky top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-neutral-900" aria-hidden />
            <div className="leading-tight">
              <div className="text-sm font-semibold">{COMPANY.name}</div>
              <div className="text-xs text-neutral-600">{COMPANY.tagline}</div>
            </div>
          </Link>

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

          <div className="flex items-center gap-2">
            <ButtonLink href="/contact" variant="primary">
              Request a Quote
            </ButtonLink>
            <a
              href={WHATSAPP.url()}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50 sm:inline-flex"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
