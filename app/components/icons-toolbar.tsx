"use client";

import { mdiMagnify } from "@mdi/js";

import {
  SearchInput,
  SearchInputClearButton,
  SearchInputField,
  SearchInputLeftElement,
  SearchInputRightElement,
} from "@/components/ui/search-input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Icon } from "@/lib/icon";

export type IconFilter = "all" | "mdi" | "custom";

interface IconsToolbarProps {
  query: string;
  onQueryChange: (value: string) => void;
  filter: IconFilter;
  onFilterChange: (value: IconFilter) => void;
}

export function IconsToolbar({
  query,
  onQueryChange,
  filter,
  onFilterChange,
}: IconsToolbarProps) {
  return (
    <TooltipProvider>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <SearchInput className="h-10 w-full max-w-[560px] bg-subtle-bg dark:bg-input/30">
          <SearchInputLeftElement>
            <Icon path={mdiMagnify} size={1.1} aria-hidden="true" />
          </SearchInputLeftElement>
          <SearchInputField
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search icons"
            aria-label="Search icons"
          />
          {query ? (
            <SearchInputRightElement>
              <SearchInputClearButton onClear={() => onQueryChange("")} />
            </SearchInputRightElement>
          ) : null}
        </SearchInput>

        <ToggleGroup
          type="single"
          variant="rounded"
          size="sm"
          value={filter}
          onValueChange={(value) => {
            if (value) {
              onFilterChange(value as IconFilter);
            }
          }}
          aria-label="Filter icons by source"
        >
          <ToggleGroupItem value="all">All</ToggleGroupItem>
          <ToggleGroupItem value="mdi">MDI</ToggleGroupItem>
          <ToggleGroupItem value="custom">Custom</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </TooltipProvider>
  );
}
