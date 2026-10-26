"use client";

import { useEffect, useRef, useState } from "react";
import { ResumeButton as ResumeCta } from "@/components/ui/ResumeButton";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/types/portfolio";

interface NavbarClientProps {
  items: NavItem[];
  name: string;
  role: string;
  resumeHref: string | null;
}

const linkFocus =
  "rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export function NavbarClient({ items, name, role, resumeHref }: NavbarClientProps) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [active, setActive] = useState<string>(items[0]?.href ?? "");

  useEffect(() => {
    const targets = items
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-8">
        <a href="#home" className={cn("flex min-w-0 items-center gap-3", linkFocus)}>
          <span
            aria-hidden="true"
            className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-accent to-accent-secondary font-heading text-sm font-bold text-background"
          >
            {initials}
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-heading text-sm font-semibold">{name}</span>
            <span className="truncate text-xs text-muted">{role}</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {items.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "relative block px-3 py-2 text-sm transition-colors",
                      linkFocus,
                      isActive ? "text-accent" : "text-muted hover:text-foreground",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-linear-to-r from-accent to-accent-secondary transition-opacity",
                        isActive ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ResumeCta href={resumeHref} className="max-lg:hidden" />
          <button
            type="button"
            ref={menuButtonRef}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-lg border border-white/10 text-foreground hover:border-accent/50 lg:hidden",
              linkFocus,
            )}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-white/10 bg-background/95 lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-6xl px-4 py-4 sm:px-8">
          <ul className="flex flex-col gap-1">
            {items.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "block rounded-lg px-3 py-3 text-base transition-colors",
                      linkFocus,
                      isActive
                        ? "bg-white/5 text-accent"
                        : "text-muted hover:bg-white/5 hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <ResumeCta href={resumeHref} className="mt-4 w-full py-3" />
        </nav>
      </div>
    </header>
  );
}
