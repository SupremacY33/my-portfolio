export type SkillCategory =
  | "backend"
  | "frontend"
  | "databases"
  | "devops"
  | "practices";

export type Accent = "cyan" | "blue" | "violet";

export interface SkillCategoryMeta {
  id: SkillCategory;
  title: string;
  accent: Accent;
}

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  /** Format: YYYY-MM */
  startDate: string;
  /** Format: YYYY-MM, or "Present" */
  endDate: string;
  highlights: string[];
  technologies: string[];
}

export type SpecializationIcon = "server" | "layers" | "database" | "cloud";

export interface Specialization {
  id: string;
  title: string;
  description: string;
  icon: SpecializationIcon;
}

export interface ProjectImage {
  /** Path under /public; rendered only if the file exists. */
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  accent: Accent;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  image?: ProjectImage;
  contribution: string[];
  challenges?: string[];
  outcomes?: string[];
  /** Shows a note that private details are intentionally omitted. */
  confidential?: boolean;
}

export type ProjectCategory = "full-stack" | "backend" | "enterprise" | "mobile";

export type ProjectLinkKind = "frontend" | "backend" | "source";

export interface ProjectLink {
  kind: ProjectLinkKind;
  href: string;
}

export type SocialPlatform = "github" | "linkedin" | "email" | "twitter" | "other";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export type ServiceIcon = "web" | "api" | "database" | "automation";

export type ServiceAccent = "cyan" | "blue" | "teal" | "violet";

export interface Service {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  icon: ServiceIcon;
  accent: ServiceAccent;
}

export interface NavItem {
  label: string;
  href: `#${string}`;
}
