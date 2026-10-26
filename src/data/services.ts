import type { Service } from "@/types/portfolio";

export const services: Service[] = [
  {
    id: "web-applications",
    title: "Custom Web Application Development",
    description:
      "Building responsive web applications, dashboards, and tailored business platforms using modern frontend and backend technologies.",
    technologies: ["React", "Angular", ".NET"],
    icon: "web",
    accent: "cyan",
  },
  {
    id: "backend-apis",
    title: "Backend & API Development",
    description:
      "Developing backend services, secure REST APIs, authentication workflows, and integrations to power modern applications.",
    technologies: ["C#", ".NET", "Java", "Spring Boot"],
    icon: "api",
    accent: "blue",
  },
  {
    id: "database-engineering",
    title: "Database Engineering & Optimization",
    description:
      "Designing database solutions, optimizing SQL queries, investigating bottlenecks, and improving application performance.",
    technologies: ["SQL Server", "PostgreSQL", "MySQL"],
    icon: "database",
    accent: "teal",
  },
  {
    id: "automation-integrations",
    title: "Automation & System Integrations",
    description:
      "Automating repetitive workflows, integrating third-party services, and developing software solutions that improve business operations.",
    technologies: ["REST APIs", "C#", "Java"],
    icon: "automation",
    accent: "violet",
  },
];
