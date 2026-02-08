import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ButtonLink from "@/components/ui/ButtonLink";

export const metadata = { title: "Global Trade" };

export default function GlobalTradePage() {
  return (
    <>
      <Section
        title="Import & export coordination—built on local strength and professional execution"
        subtitle="We support livestock trade and agricultural supply coordination with a focus on clarity, reliability, and quality-minded handling."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["Livestock trade", "Priority focus: coordinated sourcing, movement, and follow-through for buyers and partners."],
            ["Agricultural operations support", "Farm management and consulting that improve consistency and delivery readiness."],
            ["Products & commodities", "Starting with PURE IRON BEANS wholesale; structured to add more products over time."],
          ].map(([t, d]) => (
            <Card key={t}>
              <h3 className="text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-neutral-600">{d}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <ButtonLink href="/contact" variant="primary">Start a Supply Conversation</ButtonLink>
        </div>
      </Section>

      <Section
        title="Trade workflow"
        subtitle="A simple process designed to keep specs, timelines, and updates clear."
      >
        <div className="grid gap-4 lg:grid-cols-5">
          {[
            ["Spec & quote", "You share requirements and timeline."],
            ["Coordination", "We align sourcing/operations."],
            ["Quality mindset", "Clean handling and consistency approach."],
            ["Logistics support", "Coordinated movement and updates."],
            ["Delivery", "Confirmation and follow-up."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold">{t}</div>
              <div className="mt-2 text-sm text-neutral-600">{d}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
