import { NavbarClient } from "@/components/layout/NavbarClient";
import { navItems, siteConfig } from "@/data/site";
import { publicAssetExists } from "@/lib/assets";

export function Navbar() {
  const resumeHref = publicAssetExists(siteConfig.resumePath)
    ? siteConfig.resumePath
    : null;

  return (
    <NavbarClient
      items={navItems}
      name={siteConfig.name}
      role={siteConfig.role}
      resumeHref={resumeHref}
    />
  );
}
