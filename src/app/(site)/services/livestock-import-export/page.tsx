import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ButtonLink from "@/components/ui/ButtonLink";

export const metadata = { title: "Livestock Import & Export" };

export default function LivestockPage() {
  return (
    <>
      <Section
        title="Livestock Import & Export"
        subtitle="Trade coordination built on reliable sourcing, professional handling, and clear communication from request to delivery."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">Who this is for</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              {[
                "Importers and exporters seeking dependable coordination",
                "Farms and distributors needing structured supply movement",
                "Institutional buyers requiring clarity and professional follow-through",
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-900" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">What we handle</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              {[
                "Requirements review: quantity, destination, timeline, handling needs",
                "Sourcing coordination and movement planning",
                "Quality-minded handling and communication throughout the process",
                "Documentation support and delivery updates (as applicable)",
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-900" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-8 flex gap-3">
          <ButtonLink href="/contact" variant="primary">Request a Quote</ButtonLink>
          <ButtonLink href="/global-trade" variant="secondary">Global Trade</ButtonLink>
        </div>
      </Section>

      <Section
        title="Process"
        subtitle="A structured approach that keeps timelines and expectations clear."
      >
        <div className="grid gap-4 lg:grid-cols-4">
          {[
            ["1", "Confirm requirements", "We capture your spec and timeline in writing."],
            ["2", "Coordinate supply", "We align sourcing and movement plan."],
            ["3", "Maintain clarity", "You get updates and defined next steps."],
            ["4", "Deliver & confirm", "We coordinate delivery and follow up."],
          ].map(([n, t, d]) => (
            <div key={n} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold text-neutral-600">Step {n}</div>
              <div className="mt-2 text-sm font-semibold">{t}</div>
              <p className="mt-2 text-sm text-neutral-600">{d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
