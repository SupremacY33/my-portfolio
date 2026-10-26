import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main id="main-content" className="flex flex-1 items-center py-24">
      <Container className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">404</p>
        <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent/85"
        >
          Back to Home
        </Link>
      </Container>
    </main>
  );
}
