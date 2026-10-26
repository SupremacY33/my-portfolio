import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Footer } from "@/components/layout/Footer";
import { ProjectDetail } from "@/components/sections/ProjectDetail";
import { ProjectDetailSkeleton } from "@/components/sections/ProjectDetailSkeleton";
import { getProjectBySlug, projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { siteUrl } from "@/lib/site-url";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    ...(siteUrl && { alternates: { canonical: `/projects/${project.slug}` } }),
    openGraph: {
      type: "website",
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      images: siteUrl
        ? [{ url: "/og", width: 1200, height: 630, alt: siteConfig.title }]
        : undefined,
    },
    twitter: {
      card: siteUrl ? "summary_large_image" : "summary",
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      images: siteUrl ? ["/og"] : undefined,
    },
  };
}

type ProjectPageProps = PageProps<"/projects/[slug]">;

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <>
      <main id="main-content" className="flex-1">
        <Suspense fallback={<ProjectDetailSkeleton />}>
          <ProjectContent params={params} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

async function ProjectContent({ params }: { params: ProjectPageProps["params"] }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
