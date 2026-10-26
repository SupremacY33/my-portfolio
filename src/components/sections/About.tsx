import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ResumeButton } from "@/components/ui/ResumeButton";
import { SpecializationIconSvg } from "@/components/ui/SpecializationIcon";
import { aboutContent, specializations } from "@/data/about";
import { siteConfig } from "@/data/site";
import { publicAssetExists } from "@/lib/assets";

export function About() {
  const resumeHref = publicAssetExists(siteConfig.resumePath)
    ? siteConfig.resumePath
    : null;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 py-16 sm:py-20"
    >
      <Container className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="reveal">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            About Me
          </p>
          <h2
            id="about-heading"
            className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
          >
            {aboutContent.heading}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            {aboutContent.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ResumeButton href={resumeHref} className="px-6 py-3" />
            <ButtonLink
              href="#contact"
              variant="secondary"
              className="justify-center px-6 py-3"
            >
              Contact Me
            </ButtonLink>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {specializations.map((item, i) => (
            <li
              key={item.id}
              className="reveal group rounded-2xl border border-white/10 bg-linear-to-br from-surface to-background p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_40px_-16px_var(--accent)]"
            >
              <span
                className={`flex size-12 items-center justify-center rounded-xl ${
                  i % 2 === 0
                    ? "bg-accent/10 text-accent"
                    : "bg-highlight/15 text-highlight"
                }`}
              >
                <SpecializationIconSvg name={item.icon} />
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
