import type { SocialLink } from "@/types/portfolio";

export const socialLinks: SocialLink[] = [
  {
    platform: "email",
    label: "Email",
    href: "mailto:abdulsamaddev005@gmail.com",
  },
  {
    platform: "github",
    label: "GitHub",
    href: "https://github.com/SupremacY33",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdul-samad-315457255",
  },
];

export function getSocialLink(platform: SocialLink["platform"]): SocialLink {
  const link = socialLinks.find((l) => l.platform === platform);
  if (!link) throw new Error(`Missing social link: ${platform}`);
  return link;
}

export const contactEmail = getSocialLink("email").href.replace("mailto:", "");
