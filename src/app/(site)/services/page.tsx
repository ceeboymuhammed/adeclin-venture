import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { PRIORITY_SERVICES } from "@/lib/constants";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <Section
        title="Agricultural services built for results"
        subtitle="We help buyers, partners, and institutions reduce risk and improve outcomes through structured execution and clear communication."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {PRIORITY_SERVICES.map((s) => (
            <Card key={s.title}>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{s.summary}</p>
              <div className="mt-5">
                <Link className="text-sm font-medium text-neutral-900 underline underline-offset-4" href={s.href}>
                  View service
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="What you can expect"
        subtitle="A professional working style designed to make every engagement easier."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["Clear requirements", "We start with specifications, timelines, and expectations."],
            ["Consistent coordination", "You get updates, ownership, and follow-through."],
            ["Quality mindset", "Clean handling and consistency are built into the process."],
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
