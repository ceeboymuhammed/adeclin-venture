import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ButtonLink from "@/components/ui/ButtonLink";

export const metadata = { title: "Agricultural Consulting & Training" };

export default function ConsultingTrainingPage() {
  return (
    <>
      <Section
        title="Agricultural Consulting & Training"
        subtitle="Practical training and advisory for farmers, teams, and institutions—focused on discipline, results, and market readiness."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["Farm operations & planning", "Workflows, schedules, and structured execution for better output."],
            ["Quality & handling mindset", "Clean handling habits and consistency practices that protect value."],
            ["Commercial readiness", "Practical guidance for scaling, working with buyers, and improving reliability."],
          ].map(([t, d]) => (
            <Card key={t}>
              <h3 className="text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-neutral-600">{d}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <ButtonLink href="/contact" variant="primary">Request a Training Proposal</ButtonLink>
          <ButtonLink href="/services" variant="secondary">Back to Services</ButtonLink>
        </div>
      </Section>

      <Section
        title="Delivery formats"
        subtitle="We adapt the training to your team size, location, and goals."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            ["On-site sessions", "Practical, hands-on learning at your farm or facility."],
            ["Virtual training", "Remote sessions with clear materials and follow-up."],
            ["Workshops", "Structured group training for cooperatives or institutions."],
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
