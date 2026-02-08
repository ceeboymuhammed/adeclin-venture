import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { PRODUCT_PURE_IRON_BEANS } from "@/lib/constants";

export const metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <>
      <Section
        title="Clean, customer-ready agricultural products"
        subtitle="Starting with PURE IRON BEANS for wholesale supply—prepared for convenience and consistent cooking results."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold">{PRODUCT_PURE_IRON_BEANS.name}</h3>
            <p className="mt-2 text-sm text-neutral-600">{PRODUCT_PURE_IRON_BEANS.short}</p>
            <div className="mt-5">
              <Link className="text-sm font-medium text-neutral-900 underline underline-offset-4" href={PRODUCT_PURE_IRON_BEANS.href}>
                View product
              </Link>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
