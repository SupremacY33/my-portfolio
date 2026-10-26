import Link from "next/link";
import { Container } from "@/components/ui/Container";

const block = "animate-pulse rounded-lg bg-white/8";

export function ProjectDetailSkeleton() {
  return (
    <Container className="py-12 sm:py-16">
      <div role="status" aria-live="polite" className="mx-auto max-w-5xl">
        <span className="sr-only">Loading project details…</span>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-foreground"
        >
          <span aria-hidden="true">&larr;</span> Back to Projects
        </Link>

        <div aria-hidden="true">
          <div className={`mt-8 h-4 w-24 ${block}`} />
          <div className={`mt-3 h-10 w-3/4 ${block}`} />
          <div
            className={`mt-8 aspect-16/10 rounded-xl border border-white/10 bg-linear-to-br from-accent/10 to-surface ${block}`}
          />
          <div className={`mt-10 h-6 w-32 ${block}`} />
          <div className="mt-4 space-y-2">
            <div className={`h-4 w-full ${block}`} />
            <div className={`h-4 w-5/6 ${block}`} />
          </div>
          <div className={`mt-10 h-6 w-48 ${block}`} />
          <div className="mt-4 space-y-2">
            <div className={`h-4 w-full ${block}`} />
            <div className={`h-4 w-2/3 ${block}`} />
          </div>
        </div>
      </div>
    </Container>
  );
}
