import type { Skill, SkillCategoryMeta } from "@/types/portfolio";

export const skillCategories: SkillCategoryMeta[] = [
  { id: "backend", title: "Backend", accent: "cyan" },
  { id: "frontend", title: "Frontend", accent: "violet" },
  { id: "databases", title: "Databases", accent: "blue" },
  { id: "devops", title: "DevOps & Tools", accent: "cyan" },
  { id: "practices", title: "Security & Practices", accent: "violet" },
];

export const skills: Skill[] = [
  ...[
    "C#",
    "ASP.NET Core",
    ".NET Core",
    "Java",
    "Kotlin",
    "Spring Boot",
    "Spring Security",
    "REST APIs",
    "Microservices",
    "PHP",
  ].map((name): Skill => ({ name, category: "backend" })),
  ...["React", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3"].map(
    (name): Skill => ({ name, category: "frontend" }),
  ),
  ...["SQL Server", "PostgreSQL", "MySQL", "MongoDB"].map(
    (name): Skill => ({ name, category: "databases" }),
  ),
  ...[
    "Git",
    "Docker",
    "GitHub Actions",
    "Azure DevOps",
    "CI/CD",
    "Postman",
    "Swagger/OpenAPI",
  ].map((name): Skill => ({ name, category: "devops" })),
  ...[
    "JWT",
    "OAuth2",
    "Agile/Scrum",
    "API Integration",
    "Performance Optimization",
  ].map((name): Skill => ({ name, category: "practices" })),
];
