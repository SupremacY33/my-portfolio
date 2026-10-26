import { ButtonLink } from "@/components/ui/Button";
import { ServiceIconSvg } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { services } from "@/data/services";
import type { ServiceAccent } from "@/types/portfolio";

const accents: Record<ServiceAccent, { icon: string; card: string }> = {
  cyan: {
    icon: "bg-accent/10 text-accent",
    card: "hover:border-accent/40 hover:shadow-[0_8px_40px_-18px_var(--accent)]",
  },
  blue: {
    icon: "bg-accent-secondary/15 text-sky-300",
    card: "hover:border-accent-secondary/40 hover:shadow-[0_8px_40px_-18px_var(--accent-secondary)]",
  },
  teal: {
    icon: "bg-teal-400/10 text-teal-300",
    card: "hover:border-teal-400/40 hover:shadow-[0_8px_40px_-18px_var(--color-teal-400)]",
  },
  violet: {
    icon: "bg-highlight/15 text-violet-300",
    card: "hover:border-highlight/40 hover:shadow-[0_8px_40px_-18px_var(--highlight)]",
  },
};

export function Services() {
  return (
    <Section
      id="services"
      title="How I Can Help"
      eyebrow="My Services"
      description="From developing new applications to improving existing systems, I provide software engineering services focused on reliability, performance, and practical business results."
    >
      <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => {
          const styles = accents[service.accent];
          return (
            <li key={service.id} className="reveal">
              <article
                className={`flex h-full flex-col rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 ${styles.card}`}
              >
                <span
                  className={`flex size-12 items-center justify-center rounded-xl ${styles.icon}`}
                >
                  <ServiceIconSvg name={service.icon} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul
                  aria-label={`Technologies for ${service.title}`}
                  className="mt-auto flex flex-wrap gap-2 pt-5"
                >
                  {service.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/10 bg-background/60 px-2.5 py-1 text-xs text-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          );
        })}
      </ul>

      <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-surface px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-heading text-lg font-medium">
          Have a project in mind? Let&apos;s discuss how I can help.
        </p>
        <ButtonLink href="#contact" className="shrink-0 px-6 py-3">
          Start a Conversation
        </ButtonLink>
      </div>
    </Section>
  );
}
