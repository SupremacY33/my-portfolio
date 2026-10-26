import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectFilter } from "@/components/ui/ProjectFilter";
import { Section } from "@/components/ui/Section";
import { projectCategories, projects } from "@/data/projects";

export function Projects() {
  const items = projects.map((project) => ({
    id: project.slug,
    category: project.category,
    node: <ProjectCard project={project} />,
  }));

  return (
    <Section
      id="projects"
      title="Some Things I've Built"
      eyebrow="Projects"
      description="A collection of professional engineering contributions and personal development projects."
    >
      <ProjectFilter categories={projectCategories} items={items} />
    </Section>
  );
}
