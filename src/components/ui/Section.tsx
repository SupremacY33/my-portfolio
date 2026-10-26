import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  className?: string;
  children?: ReactNode;
}

export function Section({
  id,
  title,
  eyebrow,
  description,
  className,
  children,
}: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("scroll-mt-20 py-16 sm:py-20", className)}
    >
      <Container>
        {eyebrow && (
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
        )}
        <h2
          id={headingId}
          className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-2xl text-base text-muted sm:text-lg">
            {description}
          </p>
        )}
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}
