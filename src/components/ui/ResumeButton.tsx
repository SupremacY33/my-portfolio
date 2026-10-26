import { cn } from "@/lib/cn";

interface ResumeButtonProps {
  href: string | null;
  className?: string;
}

export function ResumeButton({ href, className }: ResumeButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold whitespace-nowrap transition";
  if (!href) {
    return (
      <span
        role="link"
        aria-disabled="true"
        title="Résumé coming soon"
        className={cn(
          base,
          "cursor-not-allowed border border-white/10 text-muted",
          className,
        )}
      >
        Resume coming soon
      </span>
    );
  }
  return (
    <a
      href={href}
      download={href.split("/").pop()}
      className={cn(
        base,
        "bg-linear-to-r from-accent to-accent-secondary text-background hover:brightness-110 hover:shadow-[0_0_24px_-4px_var(--accent)]",
        className,
      )}
    >
      Download Resume
    </a>
  );
}
