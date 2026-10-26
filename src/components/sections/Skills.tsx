import { Section } from "@/components/ui/Section";
import { skillCategories, skills } from "@/data/skills";
import type { Accent } from "@/types/portfolio";

const accentStyles: Record<Accent, { dot: string; badge: string; card: string }> = {
  cyan: {
    dot: "bg-accent",
    badge: "border-accent/30 bg-accent/10 text-accent",
    card: "hover:border-accent/40 hover:shadow-[0_8px_40px_-18px_var(--accent)]",
  },
  blue: {
    dot: "bg-accent-secondary",
    badge: "border-accent-secondary/30 bg-accent-secondary/10 text-sky-300",
    card: "hover:border-accent-secondary/40 hover:shadow-[0_8px_40px_-18px_var(--accent-secondary)]",
  },
  violet: {
    dot: "bg-highlight",
    badge: "border-highlight/30 bg-highlight/10 text-violet-300",
    card: "hover:border-highlight/40 hover:shadow-[0_8px_40px_-18px_var(--highlight)]",
  },
};

export function Skills() {
  return (
    <Section
      id="skills"
      title="Technologies I Work With"
      eyebrow="Technical Skills"
      description="Tools and technologies I use to build, integrate, and maintain reliable software."
    >
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => {
          const styles = accentStyles[category.accent];
          const items = skills.filter((s) => s.category === category.id);
          return (
            <li
              key={category.id}
              className={`reveal rounded-2xl border border-white/10 bg-surface p-6 transition duration-300 hover:-translate-y-1 ${styles.card}`}
            >
              <h3 className="flex items-center gap-2 font-heading text-lg font-semibold">
                <span
                  aria-hidden="true"
                  className={`size-2.5 rounded-full ${styles.dot}`}
                />
                {category.title}
              </h3>
              <ul
                aria-label={`${category.title} skills`}
                className="mt-4 flex flex-wrap gap-2"
              >
                {items.map((skill) => (
                  <li
                    key={skill.name}
                    className={`rounded-full border px-3 py-1 text-sm ${styles.badge}`}
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
