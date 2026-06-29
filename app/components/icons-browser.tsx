"use client";

import { useState } from "react";

import { IconGrid } from "@/components/icon-grid";
import { IconsToolbar, type IconFilter } from "@/components/icons-toolbar";
import type { IconManifest } from "@/lib/types";

interface IconsBrowserProps {
  manifest: IconManifest;
}

export function IconsBrowser({ manifest }: IconsBrowserProps) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<IconFilter>("all");

  return (
    <>
      <IconsToolbar
        query={query}
        onQueryChange={setQuery}
        filter={filter}
        onFilterChange={setFilter}
      />
      <IconGrid manifest={manifest} query={query} filter={filter} />
    </>
  );
}
