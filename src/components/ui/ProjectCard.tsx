import { CaseStudyButton, RepositoryButtons } from "@/components/ui/ProjectActions";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { getCategoryLabel } from "@/data/projects";
import { getProjectImage } from "@/lib/project-images";
import type { Accent, Project } from "@/types/portfolio";

const dot: Record<Accent, string> = {
  cyan: "bg-accent",
  blue: "bg-accent-secondary",
  violet: "bg-highlight",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/3 p-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_40px_-18px_var(--accent)] sm:p-5">
      <ProjectVisual
        category={project.category}
        accent={project.accent}
        image={getProjectImage(project)}
      />
      <div className="flex flex-1 flex-col pt-5">
        <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted">
          <span
            aria-hidden="true"
            className={`size-2 rounded-full ${dot[project.accent]}`}
          />
          {getCategoryLabel(project.category)}
        </p>
        <h3 className="mt-2 font-heading text-xl font-semibold leading-snug transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
        <ul
          aria-label={`Technologies used in ${project.title}`}
          className="mt-4 flex flex-wrap gap-2"
        >
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/10 bg-background/60 px-2.5 py-1 text-xs text-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-col gap-2 border-t border-white/10 pt-5">
          {project.links.length > 0 && (
            <div className="flex flex-col gap-2">
              <RepositoryButtons links={project.links} title={project.title} />
            </div>
          )}
          <CaseStudyButton slug={project.slug} className="w-full">
            View Case Study
            <span className="sr-only">: {project.title}</span>
          </CaseStudyButton>
        </div>
      </div>
    </article>
  );
}
