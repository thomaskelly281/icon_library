"use client";

import { cn } from "@/lib/utils";
import type { IconOrigin } from "@/lib/types";

export type OriginFilter = "all" | IconOrigin;

interface SidebarItem {
  value: OriginFilter;
  label: string;
  count: number;
}

interface BlokSidebarProps {
  origin: OriginFilter;
  onOriginChange: (value: OriginFilter) => void;
  counts: Record<OriginFilter, number>;
}

export function BlokSidebar({ origin, onOriginChange, counts }: BlokSidebarProps) {
  const items: SidebarItem[] = [
    { value: "all", label: "All icons", count: counts.all },
    { value: "mdi", label: "MDI seed", count: counts.mdi },
    { value: "svg", label: "Contributed", count: counts.svg },
  ];

  return (
    <nav
      aria-label="Icon library navigation"
      className="hidden w-56 shrink-0 overflow-y-auto border-r border-border bg-background px-3 py-4 lg:block"
    >
      <p className="px-2 pb-2 text-2xs font-semibold uppercase tracking-wider text-subtle-text">
        Library
      </p>
      <ul className="flex flex-col gap-0.5">
        {items.map((item) => {
          const isActive = origin === item.value;

          return (
            <li key={item.value}>
              <button
                type="button"
                onClick={() => onOriginChange(item.value)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-base font-medium transition-colors outline-none",
                  "focus-visible:ring-2 focus-visible:ring-ring/50",
                  isActive
                    ? "bg-primary-bg text-primary-fg"
                    : "text-neutral-fg hover:bg-neutral-bg",
                )}
              >
                <span className="truncate">{item.label}</span>
                <span
                  className={cn(
                    "shrink-0 text-2xs tabular-nums",
                    isActive ? "text-primary-fg/70" : "text-subtle-text",
                  )}
                >
                  {item.count.toLocaleString()}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
