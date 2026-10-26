import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site-url";

// Empty until NEXT_PUBLIC_SITE_URL is set, so no localhost URLs are ever published.
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return [
    { url: new URL("/", siteUrl).toString() },
    ...projects.map((p) => ({
      url: new URL(`/projects/${p.slug}`, siteUrl).toString(),
    })),
  ];
}
