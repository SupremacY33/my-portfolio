import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export function Card({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-surface p-6 transition-colors duration-200 hover:border-accent/40",
        className,
      )}
      {...props}
    />
  );
}
