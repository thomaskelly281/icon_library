import { IconGrid } from "./components/icon-grid";
import manifest from "@/icons/manifest.json";
import type { IconManifest } from "@/lib/types";

export default function HomePage() {
  return <IconGrid manifest={manifest as IconManifest} />;
}
