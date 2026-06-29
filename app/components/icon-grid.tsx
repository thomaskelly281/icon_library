"use client";

import { useMemo, useState, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { IconPreview } from "./icon-preview";
import { IconDetailDialog } from "./icon-detail-dialog";
import type { IconManifest, IconManifestEntry, IconOrigin } from "@/lib/types";

const COLUMN_COUNT = 6;
const ROW_HEIGHT = 128;

type OriginFilter = "all" | IconOrigin;

interface IconGridProps {
  manifest: IconManifest;
}

export function IconGrid({ manifest }: IconGridProps) {
  const [query, setQuery] = useState("");
  const [origin, setOrigin] = useState<OriginFilter>("all");
  const [selectedIcon, setSelectedIcon] = useState<IconManifestEntry | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return manifest.icons.filter((icon) => {
      if (origin !== "all" && icon.origin !== origin) {
        return false;
      }
      if (!normalized) {
        return true;
      }
      return (
        icon.slug.includes(normalized) ||
        icon.component.toLowerCase().includes(normalized)
      );
    });
  }, [manifest.icons, origin, query]);

  const rowCount = Math.ceil(filtered.length / COLUMN_COUNT);

  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ROW_HEIGHT,
    overscan: 8,
  });

  const openIcon = (icon: IconManifestEntry) => {
    setSelectedIcon(icon);
    setDialogOpen(true);
  };

  return (
    <>
      <div className="flex h-screen flex-col">
        <header className="sticky top-0 z-10 border-b border-border bg-background/95 px-6 py-4 backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Sitecore Icons</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {manifest.icons.length.toLocaleString()} icons · flat imports like{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                  @sitecore/icons/account
                </code>
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search icons..."
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none ring-ring focus:ring-2 sm:max-w-md"
              />
              <div className="flex gap-2">
                {(["all", "mdi", "svg"] as const).map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setOrigin(value)}
                    className={`rounded-full px-3 py-1.5 text-sm capitalize ${
                      origin === value
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {value === "all" ? "All" : value === "mdi" ? "MDI seed" : "Contributed"}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Showing {filtered.length.toLocaleString()} result
              {filtered.length === 1 ? "" : "s"}
            </p>
          </div>
        </header>

        <div ref={parentRef} className="flex-1 overflow-auto px-6 py-6">
          <div
            className="relative mx-auto max-w-7xl"
            style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const startIndex = virtualRow.index * COLUMN_COUNT;
              const rowIcons = filtered.slice(startIndex, startIndex + COLUMN_COUNT);

              return (
                <div
                  key={virtualRow.key}
                  className="absolute left-0 top-0 grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
                  style={{
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  {rowIcons.map((icon) => (
                    <button
                      key={icon.slug}
                      type="button"
                      onClick={() => openIcon(icon)}
                      className="flex h-[116px] flex-col items-center justify-center rounded-xl border border-border bg-card p-3 text-center transition hover:border-foreground/20 hover:shadow-sm"
                      title={`View ${icon.slug}`}
                    >
                      <IconPreview path={icon.path} size={28} className="text-foreground" />
                      <span className="mt-3 w-full truncate font-mono text-xs font-medium text-foreground">
                        {icon.slug}
                      </span>
                      <span className="mt-1 w-full truncate text-[11px] text-muted-foreground">
                        {icon.component}
                      </span>
                    </button>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <IconDetailDialog
        icon={selectedIcon}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
