import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ButtonLink from "@/components/ui/ButtonLink";

export const metadata = { title: "Farming & Farm Management" };

export default function FarmManagementPage() {
  return (
    <>
      <Section
        title="Farming & Farm Management"
        subtitle="Hands-on farm operations support to improve yield, reduce waste, and strengthen consistency across the production cycle."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["Planning & execution", "Season planning, operational schedules, and structured follow-through."],
            ["Operations oversight", "On-ground support, supervision, and progress reporting."],
            ["Consistency & improvement", "Practical systems that reduce loss and improve output quality."],
          ].map(([t, d]) => (
            <Card key={t}>
              <h3 className="text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-neutral-600">{d}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <ButtonLink href="/contact" variant="primary">Book a Consultation</ButtonLink>
        </div>
      </Section>

      <Section
        title="Who it’s for"
        subtitle="Farm owners, cooperatives, and investors who want disciplined operations and measurable improvement."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {[
            ["Private farms", "Strengthen day-to-day operations and get consistent reporting."],
            ["Cooperatives & groups", "Coordinate production and improve consistency across members."],
            ["Investors & projects", "Support execution and reduce operational risk."],
            ["Institutions", "Practical operational support aligned with outcomes."],
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
