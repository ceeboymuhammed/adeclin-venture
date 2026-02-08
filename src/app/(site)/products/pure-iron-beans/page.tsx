import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ButtonLink from "@/components/ui/ButtonLink";
import InquiryForm from "@/components/forms/InquiryForm";
import { PRODUCT_PURE_IRON_BEANS } from "@/lib/constants";

export const metadata = { title: "PURE IRON BEANS (Wholesale)" };

export default function PureIronBeansPage() {
  return (
    <>
      <Section
        title="PURE IRON BEANS — clean, natural, ready to cook"
        subtitle="Wholesale supply for distributors, retailers, and bulk buyers. Prepared for convenience, consistency, and customer satisfaction."
      >
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <Card>
            <h3 className="text-lg font-semibold">Product highlights</h3>
            <p className="mt-2 text-sm text-neutral-600">{PRODUCT_PURE_IRON_BEANS.short}</p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              {PRODUCT_PURE_IRON_BEANS.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-900" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-neutral-200 p-4">
                <div className="text-sm font-semibold">Best for</div>
                <div className="mt-2 text-sm text-neutral-600">
                  Porridge • Moi Moi • Rice & Beans • Beans & Yam
                </div>
              </div>
              <div className="rounded-xl border border-neutral-200 p-4">
                <div className="text-sm font-semibold">Wholesale-ready</div>
                <div className="mt-2 text-sm text-neutral-600">
                  Share quantity, destination, and timeline to get pricing and next steps.
                </div>
              </div>
            </div>

            <div className="mt-6">
              <ButtonLink href="/contact" variant="secondary">General inquiry</ButtonLink>
            </div>
          </Card>

          <div>
            <InquiryForm sourcePage="/products/pure-iron-beans" />
          </div>
        </div>
      </Section>

      <Section
        title="Why wholesale buyers choose it"
        subtitle="Designed to reduce stress for end customers and improve repeat purchases."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["Cleaner experience", "No stones, no dirt—less sorting and more confidence for customers."],
            ["Convenient cooking", "Faster cooking and easier preparation supports consistent results."],
            ["Customer satisfaction", "Simple, honest quality that encourages repeat buying."],
          ].map(([t, d]) => (
            <Card key={t}>
              <h3 className="text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-neutral-600">{d}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
