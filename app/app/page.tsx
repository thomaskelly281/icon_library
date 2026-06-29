import Topbar from "@/components/bloks/top-bar";
import { IconsBrowser } from "@/components/icons-browser";
import manifest from "@/icons/manifest.json";
import type { IconManifest } from "@/lib/types";

const NAV_ITEMS = [
  { label: "Primitives", href: "#" },
  { label: "Bloks", href: "#" },
  { label: "Theming", href: "#" },
  { label: "Graphics", href: "#" },
  { label: "Changelog", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Icons", href: "/", isActive: true },
];

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      <Topbar
        logo={{
          light:
            "https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/logo-blok",
          dark: "https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/logo-blok",
          alt: "Blok",
        }}
        navigation={NAV_ITEMS}
        menuButton={false}
      />

      <main className="px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">Icons</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Browse and search the Blok icon library. Import any icon with
              flat subpath imports like{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                @blok/icons/account
              </code>
              — MDI and custom SVGs share the same path.
            </p>
          </div>

          <IconsBrowser manifest={manifest as IconManifest} />
        </div>
      </main>
    </div>
  );
}
