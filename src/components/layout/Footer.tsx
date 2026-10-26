import { SocialIconSvg } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { navItems, siteConfig } from "@/data/site";
import { socialLinks } from "@/data/social-links";

const focus =
  "rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export function Footer() {
  const initials = siteConfig.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <footer className="border-t border-white/10 bg-background py-12">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-accent to-accent-secondary font-heading text-sm font-bold text-background"
            >
              {initials}
            </span>
            <div>
              <p className="font-heading font-semibold">{siteConfig.name}</p>
              <p className="text-sm text-muted">{siteConfig.headline}</p>
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm text-muted sm:grid-cols-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={`/${item.href}`}
                    className={`transition-colors hover:text-accent ${focus}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul aria-label="Social links" className="flex gap-3">
            {socialLinks.map((link) => {
              const external = !link.href.startsWith("mailto:");
              return (
                <li key={link.platform}>
                  <a
                    href={link.href}
                    aria-label={external ? `${link.label} (opens in a new tab)` : link.label}
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                    className={`flex size-10 items-center justify-center rounded-lg border border-white/10 text-muted transition-colors hover:border-accent/50 hover:text-accent ${focus}`}
                  >
                    <SocialIconSvg platform={link.platform} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-sm text-muted">
          &copy; 2026 {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}
