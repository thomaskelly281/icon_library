"use client";

import { useVirtualizer } from "@tanstack/react-virtual";
import { useMemo, useRef, useState } from "react";

import { IconDetailDialog } from "@/components/icon-detail-dialog";
import { IconPreview } from "@/components/icon-preview";
import type { IconFilter } from "@/components/icons-toolbar";
import type { IconManifest, IconManifestEntry } from "@/lib/types";
import { cn } from "@/lib/utils";

const COLUMN_COUNT = 6;
const ROW_ESTIMATE = 88;

interface IconGridProps {
  manifest: IconManifest;
  query: string;
  filter: IconFilter;
}

function filterIcons(
  icons: IconManifestEntry[],
  query: string,
  filter: IconFilter,
) {
  const normalized = query.trim().toLowerCase();

  return icons.filter((icon) => {
    if (filter === "mdi" && icon.origin !== "mdi") {
      return false;
    }

    if (filter === "custom" && icon.origin !== "svg") {
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
}

export function IconGrid({ manifest, query, filter }: IconGridProps) {
  const [selectedIcon, setSelectedIcon] = useState<IconManifestEntry | null>(
    null,
  );
  const [dialogOpen, setDialogOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => filterIcons(manifest.icons, query, filter),
    [manifest.icons, query, filter],
  );

  const rowCount = Math.ceil(filtered.length / COLUMN_COUNT);

  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ROW_ESTIMATE,
    overscan: 8,
    measureElement: (element) => element.getBoundingClientRect().height,
  });

  const openIcon = (icon: IconManifestEntry) => {
    setSelectedIcon(icon);
    setDialogOpen(true);
  };

  if (filtered.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-muted-foreground">
        No icons match your search.
      </p>
    );
  }

  return (
    <>
      <div
        ref={parentRef}
        className="max-h-[calc(100svh-20rem)] overflow-auto"
      >
        <div
          className="relative w-full"
          style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const startIndex = virtualRow.index * COLUMN_COUNT;
            const rowIcons = filtered.slice(
              startIndex,
              startIndex + COLUMN_COUNT,
            );

            return (
              <div
                key={virtualRow.key}
                data-index={virtualRow.index}
                ref={rowVirtualizer.measureElement}
                className="absolute left-0 top-0 grid w-full grid-cols-2 gap-3 pb-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
                style={{
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                {rowIcons.map((icon) => (
                  <button
                    key={icon.slug}
                    type="button"
                    onClick={() => openIcon(icon)}
                    title={`View ${icon.slug}`}
                    className={cn(
                      "flex w-full flex-col items-center gap-2 rounded-[8px] border border-border bg-body-bg p-3 text-center",
                      "transition-colors hover:bg-subtle-bg",
                    )}
                  >
                    <IconPreview path={icon.path} size={28} />
                    <span className="w-full truncate font-mono text-xs font-medium">
                      {icon.slug}
                    </span>
                  </button>
                ))}
              </div>
            );
          })}
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
