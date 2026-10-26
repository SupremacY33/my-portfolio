import type { Specialization } from "@/types/portfolio";

export const aboutContent = {
  heading: "Engineering Solutions That Make a Difference",
  paragraphs: [
    "I'm a software engineer with 3+ years of professional experience developing enterprise applications, secure backend services, and modern web experiences across payroll, healthcare, fintech, logistics, and real estate.",
    "My primary strengths include backend engineering with .NET, Java, Kotlin, and Spring Boot, complemented by full-stack development experience with React, Angular, and TypeScript.",
    "I enjoy solving complex engineering problems, optimizing database operations, improving existing systems, and delivering maintainable solutions that address real business needs.",
  ],
} as const;

export const specializations: Specialization[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    description: ".NET, Java, Kotlin, Spring Boot and REST APIs",
    icon: "server",
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description: "React, Angular, TypeScript and API integration",
    icon: "layers",
  },
  {
    id: "database",
    title: "Database & Performance",
    description: "SQL Server, PostgreSQL, MySQL and query optimization",
    icon: "database",
  },
  {
    id: "devops",
    title: "DevOps & Delivery",
    description: "Docker, CI/CD, GitHub Actions and Azure DevOps",
    icon: "cloud",
  },
];
