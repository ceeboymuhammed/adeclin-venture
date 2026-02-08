import Section from "@/components/ui/Section";

export const metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <Section
      title="Privacy Policy"
      subtitle="We respect your privacy. This page explains what we collect and how we use it."
    >
      <div className="prose max-w-none prose-neutral">
        <p>
          When you submit an inquiry, we collect the information you provide (such as name,
          email, phone number, and message) so we can respond to your request.
        </p>
        <p>
          We do not sell your data. We only use it for communication and service delivery.
          If you want your information removed, contact us at hello@adeclinventure.com.
        </p>
      </div>
    </Section>
  );
}
