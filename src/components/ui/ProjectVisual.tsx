import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Accent, ProjectCategory, ProjectImage } from "@/types/portfolio";

const glow: Record<Accent, string> = {
  cyan: "from-accent/30 via-accent-secondary/10",
  blue: "from-accent-secondary/30 via-accent/10",
  violet: "from-highlight/30 via-accent-secondary/10",
};

const bar: Record<Accent, string> = {
  cyan: "bg-accent/60",
  blue: "bg-accent-secondary/60",
  violet: "bg-highlight/60",
};

function Scene({ category, accent }: { category: ProjectCategory; accent: Accent }) {
  const b = bar[accent];
  switch (category) {
    case "full-stack":
      return (
        <div className="absolute inset-6 flex gap-3">
          <div className="w-2/3 rounded-lg border border-white/10 bg-background/60 p-3">
            <div className={cn("h-1.5 w-1/2 rounded-full", b)} />
            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="h-8 rounded bg-white/5" />
              <div className="h-8 rounded bg-white/5" />
              <div className="h-8 rounded bg-white/5" />
            </div>
            <div className="mt-3 h-10 rounded bg-white/5" />
          </div>
          <div className="flex-1 space-y-2 rounded-lg border border-white/10 bg-background/60 p-3">
            <div className={cn("h-1.5 w-2/3 rounded-full", b)} />
            <div className="h-1.5 w-full rounded-full bg-white/10" />
            <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
          </div>
        </div>
      );
    case "backend":
      return (
        <div className="absolute inset-6 space-y-2.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-background/60 px-3 py-2.5"
            >
              <span className={cn("size-2 rounded-full", b)} />
              <span className="h-1.5 w-1/3 rounded-full bg-white/15" />
              <span className={cn("ml-auto h-1.5 w-1/5 rounded-full", b)} />
            </div>
          ))}
        </div>
      );
    case "enterprise":
      return (
        <div className="absolute inset-6 flex items-end gap-2.5 rounded-lg border border-white/10 bg-background/60 p-4">
          {["h-1/3", "h-1/2", "h-2/3", "h-2/5", "h-3/4", "h-3/5"].map((h, i) => (
            <span key={i} className={cn("flex-1 rounded-t", h, b)} />
          ))}
        </div>
      );
    case "mobile":
      return (
        <div className="absolute inset-y-5 left-1/2 w-24 -translate-x-1/2 rounded-2xl border border-white/15 bg-background/70 p-2.5">
          <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-white/20" />
          <div className={cn("h-8 rounded-lg", b)} />
          <div className="mt-2 space-y-1.5">
            <div className="h-1.5 rounded-full bg-white/10" />
            <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
            <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
          </div>
        </div>
      );
  }
}

interface ProjectVisualProps {
  category: ProjectCategory;
  accent: Accent;
  image?: ProjectImage;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

export function ProjectVisual({
  category,
  accent,
  image,
  sizes = "(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw",
  priority = false,
  className,
}: ProjectVisualProps) {
  return (
    <div
      {...(!image && { "aria-hidden": true })}
      className={cn(
        "relative aspect-16/10 overflow-hidden rounded-xl border border-white/10 bg-linear-to-br to-surface",
        glow[accent],
        className,
      )}
    >
      <div className="absolute inset-0 transition-transform duration-500 motion-safe:group-hover:scale-[1.04]">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-top"
          />
        ) : (
          <Scene category={category} accent={accent} />
        )}
      </div>
    </div>
  );
}


