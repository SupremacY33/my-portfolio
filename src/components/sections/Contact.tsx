import { SocialIconSvg } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { contactEmail, getSocialLink } from "@/data/social-links";
import { siteConfig } from "@/data/site";

const button =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-200";

const audiences = [
  {
    id: "hiring",
    title: "Hiring",
    text: "Open to remote and international software engineering opportunities with engineering teams.",
    subject: "Job opportunity",
  },
  {
    id: "freelance",
    title: "Freelance & Collaboration",
    text: "Available for freelance projects and technical collaborations.",
    subject: "Freelance project",
  },
] as const;

export function Contact() {
  const email = getSocialLink("email");
  const github = getSocialLink("github");
  const linkedin = getSocialLink("linkedin");

  return (
    <Section
      id="contact"
      title="Let's Build Something Great"
      eyebrow="Get in Touch"
      description="I'm open to international software engineering opportunities, freelance projects, and technical collaborations. Whether you're hiring for an engineering team or looking for someone to build a solution, I'd be happy to connect."
    >
      <div className="reveal rounded-3xl border border-white/10 bg-linear-to-br from-surface to-background p-6 shadow-[0_0_60px_-30px_var(--accent)] sm:p-10">
        <ul className="grid gap-4 md:grid-cols-2">
          {audiences.map((a) => (
            <li
              key={a.id}
              className="rounded-2xl border border-white/10 bg-white/3 p-5"
            >
              <h3 className="font-heading text-lg font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{a.text}</p>
              <a
                href={`${email.href}?subject=${encodeURIComponent(a.subject)}`}
                className="mt-4 inline-block text-sm text-accent underline-offset-4 hover:underline"
              >
                Email about {a.title === "Hiring" ? "an opportunity" : "a project"}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={email.href}
            className={`${button} bg-linear-to-r from-accent to-accent-secondary text-background hover:brightness-110`}
          >
            <SocialIconSvg platform="email" />
            Send Me an Email
          </a>
          <a
            href={github.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GitHub profile (opens in a new tab)"
            className={`${button} border border-white/15 hover:border-accent/50 hover:text-accent`}
          >
            <SocialIconSvg platform="github" />
            View GitHub
          </a>
          <a
            href={linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on LinkedIn (opens in a new tab)"
            className={`${button} border border-white/15 hover:border-accent/50 hover:text-accent`}
          >
            <SocialIconSvg platform="linkedin" />
            Connect on LinkedIn
          </a>
        </div>

        <dl className="mt-8 grid gap-4 border-t border-white/10 pt-6 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-muted">Name</dt>
            <dd className="mt-1 font-medium">{siteConfig.name}</dd>
          </div>
          <div>
            <dt className="text-muted">Email</dt>
            <dd className="mt-1 break-all font-medium">{contactEmail}</dd>
          </div>
          <div>
            <dt className="text-muted">Location</dt>
            <dd className="mt-1 font-medium">{siteConfig.location}</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
