import Image from "next/image";
import { publicAssetExists } from "@/lib/assets";
import { siteConfig } from "@/data/site";

const codeLines = ["w-2/3", "w-1/2", "w-5/6", "w-1/3", "w-3/5", "w-2/5"];

function CodeWindow({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-xl border border-white/10 bg-surface/90 p-3 shadow-xl ${className ?? ""}`}
    >
      <div className="mb-3 flex gap-1.5">
        <span className="size-2 rounded-full bg-highlight/70" />
        <span className="size-2 rounded-full bg-accent-secondary/70" />
        <span className="size-2 rounded-full bg-accent/70" />
      </div>
      <div className="space-y-2">
        {codeLines.map((w, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full ${w} ${
              i % 3 === 0 ? "bg-accent/60" : i % 3 === 1 ? "bg-accent-secondary/50" : "bg-highlight/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function HeroIllustration() {
  const hasAvatar = publicAssetExists(siteConfig.avatarPath);

  return (
    <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute -left-8 -top-8 size-56 rounded-full bg-accent/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-10 -right-6 size-64 rounded-full bg-highlight/25 blur-3xl"
      />

      <div
        className={
          hasAvatar
            ? "relative aspect-4/3 overflow-hidden rounded-3xl bg-background shadow-[0_0_80px_-24px_var(--accent)] lg:aspect-3/2"
            : "relative aspect-4/3 overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-surface to-background shadow-[0_0_60px_-20px_var(--accent)]"
        }
      >
        {hasAvatar ? (
          <Image
            src={siteConfig.avatarPath}
            alt="Illustration of Abdul Samad, a software engineer, working on a laptop at a desk with code editors open on multiple monitors"
            fill
            priority
            sizes="(min-width: 640px) 512px, 100vw"
            className="object-cover object-[65%_center] lg:object-center"
          />
        ) : (
          <div aria-hidden="true" className="absolute inset-0">
            <CodeWindow className="absolute left-[8%] top-[12%] w-[46%]" />
            <CodeWindow className="absolute right-[8%] top-[24%] w-[38%]" />
            <div className="absolute inset-x-[10%] bottom-[22%] h-[3px] rounded-full bg-linear-to-r from-accent via-accent-secondary to-highlight" />
            <div className="absolute inset-x-0 bottom-0 h-[22%] bg-linear-to-t from-white/5 to-transparent" />
          </div>
        )}
      </div>
    </div>
  );
}
