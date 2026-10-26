import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { RepositoryButtons } from "@/components/ui/ProjectActions";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { getCategoryLabel } from "@/data/projects";
import { getProjectImage } from "@/lib/project-images";
import type { Project } from "@/types/portfolio";

function DetailSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="font-heading text-xl font-semibold">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-accent">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function SideCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/3 p-5 backdrop-blur">
      <h2 className="font-heading text-base font-semibold">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

const backLink =
  "inline-flex items-center gap-2 rounded-md text-sm text-accent transition-colors hover:text-foreground";

export function ProjectDetail({ project }: { project: Project }) {
  const image = getProjectImage(project);

  return (
    <Container className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <Link href="/#projects" className={backLink}>
          <span aria-hidden="true">&larr;</span> Back to Projects
        </Link>

        <header className="mt-8">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {getCategoryLabel(project.category)}
          </p>
          <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
        </header>

        <figure className="mt-8">
          <ProjectVisual
            category={project.category}
            accent={project.accent}
            image={image}
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
          />
          {image?.caption && (
            <figcaption className="mt-2 text-sm text-muted">{image.caption}</figcaption>
          )}
        </figure>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-12">
          <div>
            <DetailSection title="Overview">
              <p className="leading-relaxed text-muted">{project.description}</p>
              {project.confidential && (
                <p className="mt-4 rounded-lg border border-white/10 bg-surface p-3 text-sm text-muted">
                  Details are limited to what can be shared publicly. Private
                  implementations and internal information are intentionally omitted.
                </p>
              )}
            </DetailSection>

            <DetailSection title="My Contribution">
              <BulletList items={project.contribution} />
            </DetailSection>

            {project.challenges && (
              <DetailSection title="Technical Challenges">
                <BulletList items={project.challenges} />
              </DetailSection>
            )}

            {project.outcomes && (
              <DetailSection title="Outcomes">
                <BulletList items={project.outcomes} />
              </DetailSection>
            )}
          </div>

          <aside aria-label="Project summary" className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <SideCard title="Technologies">
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-white/10 bg-background/60 px-3 py-1 text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </SideCard>

            <SideCard title="Repositories">
              {project.links.length > 0 ? (
                <div className="flex flex-col items-stretch gap-2 [&>a]:justify-center">
                  <RepositoryButtons links={project.links} title={project.title} />
                </div>
              ) : (
                <p className="text-sm text-muted">
                  No public repository is available for this project.
                </p>
              )}
            </SideCard>
          </aside>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <Link href="/#projects" className={backLink}>
            <span aria-hidden="true">&larr;</span> Back to Projects
          </Link>
        </div>
      </div>
    </Container>
  );
}
