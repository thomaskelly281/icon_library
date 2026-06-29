export type IconOrigin = "mdi" | "svg";

export interface IconManifestEntry {
  slug: string;
  component: string;
  origin: IconOrigin;
  path: string;
}

export interface IconManifest {
  generatedAt: string;
  icons: IconManifestEntry[];
}
