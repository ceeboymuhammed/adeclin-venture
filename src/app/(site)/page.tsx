import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import Link from "next/link";
import { COMPANY, PRIORITY_SERVICES, PRODUCT_PURE_IRON_BEANS, WHATSAPP } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* HERO (full width background image + overlay) */}
      <section className="relative overflow-hidden">
        {/* Background image via CSS (reliable) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-adeclin.jpg')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0f4a2f]/75" />
        <div className="absolute inset-0 bg-linear-to-br from-black/40 via-transparent to-[rgba(202,162,74,0.35)]" />

        {/* Content */}
        <div className="relative border-b border-white/10">
          <Container className="max-w-7xl">
            <div className="grid gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:items-center">
              {/* Left */}
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
                  {COMPANY.tagline}
                </p>

                <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  West Africa’s trusted bridge to global agricultural markets.
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85">
                  {COMPANY.name} delivers livestock import/export, farm management, and agricultural
                  consulting & training—guided by clean-food standards and dependable execution across
                  Nigeria and West Africa.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/contact" variant="gold">
                    Request a Quote
                  </ButtonLink>

                  <a
                    href={WHATSAPP.url()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/15 backdrop-blur"
                  >
                    WhatsApp
                  </a>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Export-ready execution mindset",
                    "Quality & food-safety focus",
                    "Reliable coordination",
                    "Nigeria & West Africa representation",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: highlight card */}
              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur sm:p-6">
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="text-sm font-semibold font-display text-[#0f4a2f]">
                    Our commitment
                  </div>
                  <p className="mt-2 text-sm text-neutral-700">
                    {COMPANY.promise}. We deliver solutions that reduce risk, improve consistency,
                    and make agricultural trade and operations simpler.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      ["Clarity", "Clear requirements, timelines, and updates."],
                      ["Reliability", "Professional execution from start to finish."],
                      ["Quality mindset", "Clean handling and consistent processes."],
                      ["Partnership", "Built for long-term collaboration."],
                    ].map(([title, desc]) => (
                      <div
                        key={title}
                        className="rounded-xl border border-neutral-200 bg-neutral-50 p-4"
                      >
                        <div className="text-sm font-medium">{title}</div>
                        <div className="mt-1 text-xs text-neutral-600">{desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/about"
                      className="text-sm font-medium text-[#115a37] underline underline-offset-4"
                    >
                      Learn about Adeclin
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* SERVICES (colour accents) */}
      <Section
        title="Solutions built for results"
        subtitle="We focus on execution, communication, and dependable delivery for buyers, partners, and institutions."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {PRIORITY_SERVICES.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-3 inline-flex rounded-full bg-[#eef7f1] px-3 py-1 text-xs font-medium text-[#115a37]">
                Priority service
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{s.summary}</p>

              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                {s.outcomes.slice(0, 3).map((o) => (
                  <li key={o} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#caa24a]" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <Link
                  href={s.href}
                  className="text-sm font-semibold text-[#115a37] underline underline-offset-4"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PRODUCT FEATURE (more colour) */}
      <Section
        title="Featured product: PURE IRON BEANS (Wholesale)"
        subtitle="Clean, natural, ready-to-cook beans prepared for convenience and consistent cooking results."
      >
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          {/* Image block */}
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100">
            <div
              className="h-320px w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/pure-iron-beans.jpg')" }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-2 text-sm font-semibold backdrop-blur">
              PURE IRON BEANS
            </div>
          </div>

          <Card>
            <h3 className="text-xl font-semibold">{PRODUCT_PURE_IRON_BEANS.name}</h3>
            <p className="mt-2 text-sm text-neutral-600">{PRODUCT_PURE_IRON_BEANS.short}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Clean", "Natural", "Ready-to-cook", "Wholesale"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#fff7e6] px-3 py-1 text-xs font-medium text-[#8a6a1f]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              {PRODUCT_PURE_IRON_BEANS.bullets.slice(0, 5).map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#115a37]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/products/pure-iron-beans" variant="gold">
                Wholesale inquiry
              </ButtonLink>
              <ButtonLink href="/products" variant="secondary">
                View products
              </ButtonLink>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
