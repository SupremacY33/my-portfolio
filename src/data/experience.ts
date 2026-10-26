import type { Experience } from "@/types/portfolio";

// Most recent first.
export const experience: Experience[] = [
  {
    id: "mazilytics",
    role: "Software Engineer",
    company: "Mazilytics",
    startDate: "2025-09",
    endDate: "Present",
    highlights: [
      "Contributed to enterprise payroll and healthcare applications using .NET, C#, Angular, React, and SQL Server.",
      "Optimized SQL Server stored procedures and payroll workflows to reduce locking and improve execution performance.",
      "Investigated production issues involving tax processing, payroll output, validation, and reporting.",
      "Contributed to healthcare application functionality involving patient workflows, anesthesia, perfusion, and clinical reporting.",
      "Supported frontend modernization, authentication, and API integration.",
    ],
    technologies: [".NET", "C#", "Angular", "React", "SQL Server"],
  },
  {
    id: "techroot",
    role: "Backend Developer (PHP)",
    company: "Techroot.ca",
    startDate: "2025-06",
    endDate: "2025-09",
    highlights: [
      "Developed backend modules for Project ReVux, a real-estate platform.",
      "Implemented property listing, authentication, booking, payment, and geolocation functionality.",
      "Optimized MySQL queries and caching, contributing to approximately 30% faster page loads.",
    ],
    technologies: ["PHP", "MySQL"],
  },
  {
    id: "binary-axon",
    role: "Fullstack Developer (Contract)",
    company: "Binary Axon",
    startDate: "2025-04",
    endDate: "2025-05",
    highlights: [
      "Developed .NET Core REST APIs and React/TypeScript application interfaces.",
      "Implemented JWT authentication, third-party integrations, and PostgreSQL improvements.",
      "Participated in code reviews, debugging, and production releases.",
    ],
    technologies: [".NET Core", "React", "TypeScript", "JWT", "PostgreSQL"],
  },
  {
    id: "ssssco",
    role: "Backend Developer (Java & Kotlin)",
    company: "SSSSCO",
    startDate: "2023-08",
    endDate: "2025-02",
    highlights: [
      "Developed and maintained Spring Boot microservices for logistics, fintech, onboarding, and customer identity workflows.",
      "Refactored legacy Java implementations into Kotlin.",
      "Implemented secure APIs using Spring Security and JWT.",
      "Supported GitHub Actions CI/CD pipelines.",
    ],
    technologies: [
      "Java",
      "Kotlin",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "GitHub Actions",
    ],
  },
  {
    id: "lamtans",
    role: "Web Developer Intern",
    company: "LamTans",
    startDate: "2023-04",
    endDate: "2023-06",
    highlights: [
      "Customized WordPress themes and plugins using PHP, JavaScript, HTML, and CSS.",
      "Developed responsive, SEO-friendly website templates.",
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "HTML", "CSS"],
  },
];
