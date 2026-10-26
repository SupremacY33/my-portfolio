import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { projectLinkLabels } from "@/data/projects";
import type { ProjectLink } from "@/types/portfolio";

const button =
  "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200";
const primary = "bg-accent text-background hover:bg-accent/85";
const secondary = "border border-white/15 text-foreground hover:border-accent/50 hover:text-accent";

export function CaseStudyButton({
  slug,
  children = "View Case Study",
  className,
}: {
  slug: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Link href={`/projects/${slug}`} className={cn(button, primary, className)}>
      {children}
    </Link>
  );
}

export function RepositoryButtons({
  links,
  title,
}: {
  links: ProjectLink[];
  title: string;
}) {
  return (
    <>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${projectLinkLabels[link.kind]} for ${title} (opens in a new tab)`}
          className={cn(button, secondary)}
        >
          {projectLinkLabels[link.kind]}
        </a>
      ))}
    </>
  );
}
