import { NextResponse, type NextRequest } from "next/server";
import { projects } from "@/data/projects";

// Unknown slugs would otherwise stream a 200 before notFound() runs under Cache Components.
export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/")[2];
  // Static files in public/projects (e.g. screenshots) must pass through.
  if (slug.includes(".") || projects.some((p) => p.slug === slug)) {
    return NextResponse.next();
  }
  return NextResponse.rewrite(new URL("/_unknown-project", request.url));
}

export const config = {
  matcher: "/projects/:slug",
};
