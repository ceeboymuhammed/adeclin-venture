import { ReactNode } from "react";
import Container from "./Container";

export default function Section({
  title,
  subtitle,
  children,
}: {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        {(title || subtitle) && (
          <div className="mb-8 max-w-3xl">
            {title && (
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-base leading-relaxed text-neutral-600">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
