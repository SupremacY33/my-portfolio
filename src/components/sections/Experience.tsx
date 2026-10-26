import { Section } from "@/components/ui/Section";
import { experience } from "@/data/experience";
import { formatMonth, periodsOverlap } from "@/lib/dates";

export function Experience() {
  return (
    <Section
      id="experience"
      title="My Professional Journey"
      eyebrow="Experience"
      description="Building software across enterprise systems, financial technology, healthcare, and business applications."
    >
      <ol className="relative space-y-8">
        <span
          aria-hidden="true"
          className="absolute bottom-2 left-[11px] top-2 w-px bg-linear-to-b from-accent via-accent-secondary to-highlight/40"
        />
        {experience.map((job) => {
          const overlaps = experience.filter(
            (other) => other.id !== job.id && periodsOverlap(job, other),
          );
          const isCurrent = job.endDate === "Present";
          return (
            <li key={job.id} className="reveal relative pl-10">
              <span
                aria-hidden="true"
                className={`absolute left-0 top-6 flex size-6 items-center justify-center rounded-full border-2 bg-background ${
                  isCurrent ? "border-accent" : "border-accent-secondary/70"
                }`}
              >
                <span
                  className={`size-2 rounded-full ${
                    isCurrent ? "bg-accent" : "bg-accent-secondary"
                  }`}
                />
              </span>

              <article className="rounded-2xl border border-white/10 bg-surface p-5 transition duration-300 hover:border-accent/40 sm:p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="font-heading text-lg font-semibold sm:text-xl">
                      {job.role}
                    </h3>
                    <p className="text-accent">{job.company}</p>
                  </div>
                  <p className="text-sm text-muted sm:text-right">
                    <time dateTime={job.startDate}>{formatMonth(job.startDate)}</time>
                    {" – "}
                    {isCurrent ? (
                      "Present"
                    ) : (
                      <time dateTime={job.endDate}>{formatMonth(job.endDate)}</time>
                    )}
                  </p>
                </div>

                {overlaps.length > 0 && (
                  <p className="mt-3 inline-block rounded-full border border-highlight/30 bg-highlight/10 px-3 py-1 text-xs text-violet-300">
                    Overlaps with {overlaps.map((o) => o.company).join(", ")}
                  </p>
                )}

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-accent sm:text-base">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <ul
                  aria-label={`Technologies used at ${job.company}`}
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {job.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/10 bg-background px-3 py-1 text-xs text-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
