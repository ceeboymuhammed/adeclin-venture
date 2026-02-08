import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { COMPANY } from "@/lib/constants";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <Section
        title="Built to deliver clean food standards and global trade capability."
        subtitle={`${COMPANY.name} is an agricultural company in Nigeria supporting livestock trade, farm operations, and training—guided by professionalism, quality mindset, and dependable execution.`}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">Mission</h3>
            <p className="mt-2 text-sm text-neutral-600">
              {COMPANY.tagline}. We support agricultural growth through practical services
              and strong execution across Nigeria and West Africa.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Our commitment</h3>
            <p className="mt-2 text-sm text-neutral-600">
              {COMPANY.promise}. Clean handling, honest delivery, and customer-focused solutions.
            </p>
          </Card>
        </div>
      </Section>

      <Section
        title="Regional strength, global collaboration"
        subtitle="Partnering with Cameroon (Central Africa) and Canada, we proudly represent Nigeria and West Africa in the global agricultural market."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["Nigeria & West Africa", "Local execution, coordination, and operational support."],
            ["Cameroon collaboration", "Regional partnership and market connection."],
            ["Canada partnership", "International collaboration and global-market alignment."],
          ].map(([t, d]) => (
            <Card key={t}>
              <h3 className="text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-neutral-600">{d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="What we stand for"
        subtitle="Simple values that protect quality, timelines, and trust."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {["Quality", "Integrity", "Reliability", "Collaboration", "Continuous improvement"].map((v) => (
            <div key={v} className="rounded-2xl border border-neutral-200 bg-white p-5 text-sm font-medium shadow-sm">
              {v}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
