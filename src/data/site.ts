import type { NavItem } from "@/types/portfolio";

export const siteConfig = {
  name: "Abdul Samad",
  title: "Abdul Samad | Software Engineer & Full-Stack Developer",
  description:
    "Software engineer with 3+ years of experience building enterprise applications, secure APIs, and web apps with .NET, Java, Kotlin, Spring Boot, React, and Angular.",
  role: "Software Engineer",
  headline: "Software Engineer & Full-Stack Developer",
  location: "Karachi, Pakistan",
  resumePath: "/resume/Abdul-Samad-Resume.pdf",
  avatarPath: "/images/developer-avatar.webp",
} as const;

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
