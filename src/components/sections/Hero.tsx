import { ButtonLink } from "@/components/ui/Button";
import { HeroIllustration } from "@/components/ui/HeroIllustration";
import { siteConfig } from "@/data/site";

const technologies = [
  ".NET",
  "C#",
  "Spring Boot",
  "React",
  "Angular",
  "SQL Server",
  "PostgreSQL",
];

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative scroll-mt-20 overflow-x-clip py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent sm:text-sm">
            <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
            Open to Remote Opportunities &amp; Freelance Projects
          </p>

          <h1
            id="hero-heading"
            className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl xl:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="bg-linear-to-r from-accent via-accent-secondary to-highlight bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </h1>

          <p className="mt-4 font-heading text-lg font-medium text-foreground sm:text-xl">
            Software Engineer &amp; Full-Stack Developer
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Building scalable enterprise systems, secure APIs, and modern web
            applications that solve real business problems.
          </p>

          <ul aria-label="Core technologies" className="mt-6 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-white/10 bg-surface px-3 py-1 text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#projects" className="justify-center px-6 py-3">
              View My Projects
            </ButtonLink>
            <ButtonLink
              href="#contact"
              variant="secondary"
              className="justify-center px-6 py-3"
            >
              Let&apos;s Work Together
            </ButtonLink>
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm text-muted">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-4 text-accent"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            {siteConfig.location}
          </p>
        </div>

        <div className="animate-fade-up [animation-delay:150ms]">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
