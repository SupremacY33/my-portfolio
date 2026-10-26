"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { ProjectCategory } from "@/types/portfolio";

interface FilterItem {
  id: string;
  category: ProjectCategory;
  node: ReactNode;
}

interface ProjectFilterProps {
  categories: { id: ProjectCategory; label: string }[];
  items: FilterItem[];
}

type Filter = ProjectCategory | "all";

export function ProjectFilter({ categories, items }: ProjectFilterProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const options: { id: Filter; label: string }[] = [
    { id: "all", label: "All Projects" },
    ...categories,
  ];
  const visible = items.filter((i) => filter === "all" || i.category === filter);

  return (
    <div>
      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
        {options.map((option) => {
          const pressed = filter === option.id;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={pressed}
              onClick={() => setFilter(option.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                pressed
                  ? "border-accent bg-accent/15 text-accent"
                  : "border-white/10 text-muted hover:border-accent/40 hover:text-foreground",
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <p role="status" className="sr-only">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>

      <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <li key={item.id} className="reveal">
            {item.node}
          </li>
        ))}
      </ul>
    </div>
  );
}
