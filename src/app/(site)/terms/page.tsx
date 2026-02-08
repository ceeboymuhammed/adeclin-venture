import Section from "@/components/ui/Section";

export const metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <Section
      title="Terms of Use"
      subtitle="By using this website, you agree to the terms below."
    >
      <div className="prose max-w-none prose-neutral">
        <p>
          This website provides general information about Adeclin Venture Services.
          Submitting an inquiry does not create a contract until confirmed in writing.
        </p>
        <p>
          We may update these terms from time to time. For questions, contact
          hello@adeclinventure.com.
        </p>
      </div>
    </Section>
  );
}
