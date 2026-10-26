import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-background hover:bg-accent/85",
  secondary: "border border-white/15 text-foreground hover:border-accent/50",
};

interface ButtonLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  variant?: Variant;
}

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
