import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import InquiryForm from "@/components/forms/InquiryForm";
import { COMPANY, WHATSAPP } from "@/lib/constants";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <Section
        title="Let’s talk supply, farms, or training"
        subtitle="Share your requirements and timeline. We’ll respond with clear next steps."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <Card>
              <h3 className="text-lg font-semibold">Direct contact</h3>
              <div className="mt-3 space-y-2 text-sm text-neutral-700">
                <div>
                  <span className="text-neutral-600">Phone/WhatsApp: </span>
                  <a className="font-medium hover:underline" href={`tel:${COMPANY.phoneE164}`}>
                    {COMPANY.phoneDisplay}
                  </a>
                </div>
                <div>
                  <span className="text-neutral-600">Email: </span>
                  <a className="font-medium hover:underline" href={`mailto:${COMPANY.email}`}>
                    {COMPANY.email}
                  </a>
                </div>
                <div>
                  <span className="text-neutral-600">Address: </span>
                  <div className="mt-1 text-neutral-700">{COMPANY.address}</div>
                </div>
              </div>

              <div className="mt-5">
                <a
                  href={WHATSAPP.url()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold">What to include (to get a fast quote)</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                {[
                  "Service/product needed (e.g., livestock trade, farm management, training, PURE IRON BEANS wholesale)",
                  "Quantity and destination (for trade/wholesale)",
                  "Your timeline and delivery expectations",
                  "Any special handling or documentation needs (if applicable)",
                ].map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-900" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <InquiryForm sourcePage="/contact" />
        </div>
      </Section>
    </>
  );
}
