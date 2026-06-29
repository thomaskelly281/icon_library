"use client";

import {
  mdiGithub,
  mdiMagnify,
  mdiOpenInNew,
  mdiWeatherNight,
  mdiWhiteBalanceSunny,
} from "@mdi/js";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  SearchInput,
  SearchInputClearButton,
  SearchInputField,
  SearchInputLeftElement,
  SearchInputRightElement,
} from "@/components/ui/search-input";
import { Toggle } from "@/components/ui/toggle";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Icon } from "@/lib/icon";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  "Primitives",
  "Bloks",
  "Theming",
  "Graphics",
  "Changelog",
  "Icons",
  "Resources",
] as const;

const ACTIVE_NAV_ITEM = "Icons";

interface BlokTopbarProps {
  searchQuery: string;
  onSearchQueryChange: (value: string) => void;
}

export function BlokTopbar({ searchQuery, onSearchQueryChange }: BlokTopbarProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const handleThemeToggle = (pressed: boolean) => {
    setIsDark(pressed);
    document.documentElement.classList.toggle("dark", pressed);
  };

  return (
    <header
      aria-label="Site header"
      className="fixed left-0 right-0 top-0 z-50 w-full border-b border-border bg-background"
    >
      <TooltipProvider>
        <div className="flex h-12 items-center justify-between px-4">
          <div className="flex min-w-0 items-center gap-4">
            <a
              href="/"
              aria-label="Blok home"
              className="rounded p-1 transition-colors active:bg-primary-background active:text-primary-fg"
            >
              <img
                src="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/logo-blok"
                alt="Blok"
                className="h-7 w-auto object-contain"
              />
            </a>

            <NavigationMenu
              viewport={false}
              aria-label="Top navigation"
              className="hidden max-w-none lg:flex"
            >
              <NavigationMenuList className="gap-1 bg-transparent">
                {NAV_ITEMS.map((item) => {
                  const isActive = item === ACTIVE_NAV_ITEM;

                  return (
                    <NavigationMenuItem key={item}>
                      <span
                        aria-current={isActive ? "page" : undefined}
                        aria-disabled={!isActive ? true : undefined}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          isActive
                            ? "active"
                            : "cursor-default select-none",
                        )}
                      >
                        {item}
                      </span>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex w-full items-center justify-end gap-2 lg:w-auto">
            <SearchInput
              className="h-9 w-full max-w-md bg-subtle-bg lg:w-72 dark:bg-input/30"
              role="search"
            >
              <SearchInputLeftElement>
                <Icon path={mdiMagnify} size={1.1} aria-hidden="true" />
              </SearchInputLeftElement>
              <SearchInputField
                type="search"
                value={searchQuery}
                onChange={(event) => onSearchQueryChange(event.target.value)}
                placeholder="Search icons"
                aria-label="Search icons"
              />
              {searchQuery ? (
                <SearchInputRightElement>
                  <SearchInputClearButton
                    onClear={() => onSearchQueryChange("")}
                  />
                </SearchInputRightElement>
              ) : null}
            </SearchInput>

            <Button
              variant="ghost"
              size="sm"
              colorScheme="neutral"
              className="hidden sm:inline-flex"
              asChild
            >
              <a
                href="https://blok-zeta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon path={mdiOpenInNew} aria-hidden="true" />
                Chakra V1
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon-sm"
              colorScheme="neutral"
              asChild
            >
              <a
                href="https://github.com/Sitecore/blok"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub repository"
              >
                <Icon path={mdiGithub} />
              </a>
            </Button>

            <Toggle
              variant="rounded"
              size="default"
              pressed={isDark}
              onPressedChange={handleThemeToggle}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="size-8 min-w-8 rounded-full px-0"
            >
              <Icon
                path={isDark ? mdiWhiteBalanceSunny : mdiWeatherNight}
                size={1}
                aria-hidden="true"
              />
            </Toggle>
          </div>
        </div>
      </TooltipProvider>
    </header>
  );
}
