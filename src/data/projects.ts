import type { Project, ProjectCategory } from "@/types/portfolio";

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "full-stack", label: "Full-Stack" },
  { id: "backend", label: "Backend" },
  { id: "enterprise", label: "Enterprise" },
  { id: "mobile", label: "Mobile" },
];

export const projects: Project[] = [
  {
    slug: "school-management-system",
    title: "School Management System",
    category: "full-stack",
    accent: "cyan",
    description:
      "A full-stack school management application with separate React frontend and .NET backend repositories, covering school administration and management workflows.",
    technologies: ["React", "TypeScript", "C#", ".NET", "Entity Framework"],
    links: [
      {
        kind: "frontend",
        href: "https://github.com/SupremacY33/School-Management",
      },
      {
        kind: "backend",
        href: "https://github.com/SupremacY33/DotNet-EFCA-Project",
      },
    ],
    image: {
      src: "/projects/school-management.webp",
      alt: "Screenshot of the School Management System application",
    },
    contribution: [
      "Built as two separate repositories: a React and TypeScript frontend, and a C# .NET backend using Entity Framework.",
      "Covers school administration and management workflows.",
    ],
  },
  {
    slug: "enterprise-payroll-platform",
    title: "Enterprise Payroll Platform",
    category: "enterprise",
    accent: "blue",
    description:
      "Contributed to enterprise payroll processing, tax form validation, SQL optimization, and complex backend workflows.",
    technologies: ["C#", ".NET", "SQL Server"],
    links: [],
    contribution: [
      "Contributed to enterprise payroll processing and tax form validation.",
      "Optimized SQL Server stored procedures and payroll workflows.",
      "Investigated production issues involving tax processing, payroll output, validation, and reporting.",
    ],
    challenges: [
      "Reducing locking in SQL Server stored procedures and payroll workflows to improve execution performance.",
    ],
    confidential: true,
  },
  {
    slug: "healthcare-workflow-platform",
    title: "Healthcare Workflow Platform",
    category: "enterprise",
    accent: "violet",
    description:
      "Contributed to clinical software workflows involving patient questionnaires, anesthesia, perfusion, reporting, and application modernization.",
    technologies: ["Angular", "React", ".NET"],
    links: [],
    contribution: [
      "Contributed to clinical workflows involving patient questionnaires, anesthesia, perfusion, and reporting.",
      "Contributed to application modernization using Angular, React, and .NET.",
    ],
    confidential: true,
  },
  {
    slug: "rize-my-fintech-app",
    title: "Rize MY Fintech App",
    category: "backend",
    accent: "cyan",
    description:
      "Developed backend APIs supporting onboarding, identity verification, authentication, and transaction-related workflows.",
    technologies: ["Java", "Spring Boot", "Spring Security", "JWT"],
    links: [],
    contribution: [
      "Developed backend APIs supporting onboarding, identity verification, authentication, and transaction-related workflows.",
      "Built with Spring Boot, Spring Security, and JWT.",
    ],
    confidential: true,
  },
  {
    slug: "project-revux",
    title: "Project ReVux",
    category: "backend",
    accent: "violet",
    description:
      "Developed backend services for a real-estate platform supporting listings, bookings, payments, and geolocation integrations.",
    technologies: ["PHP", "MySQL", "REST APIs"],
    links: [],
    contribution: [
      "Developed backend services supporting property listings, bookings, payments, and geolocation integrations.",
      "Implemented authentication for the platform.",
    ],
    challenges: [
      "Improving page-loading performance through database and caching optimization.",
    ],
    outcomes: [
      "Contributed to database and caching optimizations that improved page-loading performance by approximately 30%.",
    ],
  },
  {
    slug: "android-learning-management-system",
    title: "Android Learning Management System",
    category: "mobile",
    accent: "blue",
    description:
      "An Android application project based on student learning-management portals.",
    technologies: ["Java", "Android"],
    links: [
      {
        kind: "source",
        href: "https://github.com/SupremacY33/Learning-Management-System",
      },
    ],
    image: {
      src: "/projects/android-lms.webp",
      alt: "Screenshot of the Android Learning Management System application",
    },
    contribution: [
      "An Android application built with Java, based on student learning-management portals.",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getCategoryLabel(category: ProjectCategory): string {
  return projectCategories.find((c) => c.id === category)?.label ?? category;
}

export const projectLinkLabels = {
  frontend: "Frontend Repository",
  backend: "Backend Repository",
  source: "View Source Code",
} as const;
