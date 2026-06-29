import * as crypto from "node:crypto";
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import * as mdi from "@mdi/js";
import { optimize } from "svgo";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const ICONS_DIR = path.join(ROOT, "icons");
const SVG_DIR = ICONS_DIR;
const MANIFEST_PATH = path.join(ICONS_DIR, "manifest.json");
const APP_MANIFEST_PATH = path.join(ROOT, "app", "icons", "manifest.json");
const PACKAGE_SRC = path.join(ROOT, "packages", "icons", "src");
const CACHE_DIR = path.join(ROOT, ".cache");
const CACHE_PATH = path.join(CACHE_DIR, "icons-cache.json");
const BUILD_STAMP_PATH = path.join(CACHE_DIR, "icons-build-stamp.json");

const KEBAB_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const FORCE = process.argv.includes("--force");

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

interface IconsCache {
  mdiVersion: string;
  svgFingerprints: Record<string, string>;
  iconCount: number;
}

export function camelToKebab(value: string): string {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

export function slugToComponent(slug: string): string {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

export function mdiExportToSlug(exportName: string): string {
  if (!exportName.startsWith("mdi")) {
    throw new Error(`Invalid MDI export name: ${exportName}`);
  }
  const rest = exportName.slice(3);
  if (!rest) {
    throw new Error(`Invalid MDI export name: ${exportName}`);
  }
  return camelToKebab(rest.charAt(0).toLowerCase() + rest.slice(1));
}

export function extractSvgPaths(svgContent: string): string {
  const result = optimize(svgContent, {
    multipass: true,
    plugins: ["preset-default", { name: "removeViewBox", active: false }],
  });

  const paths: string[] = [];
  const pathRegex = /\sd="([^"]+)"/g;
  let match: RegExpExecArray | null;
  while ((match = pathRegex.exec(result.data)) !== null) {
    paths.push(match[1]);
  }

  if (paths.length === 0) {
    throw new Error("SVG does not contain any path data");
  }

  return paths.join("");
}

function generateMdiIconFile(
  slug: string,
  component: string,
  exportName: string,
): string {
  return `import { ${exportName} } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ${component}(props: IconComponentProps) {
  return <Icon path={${exportName}} {...props} />;
}

export { ${exportName} as path };
`;
}

function generateSvgIconFile(
  slug: string,
  component: string,
  pathData: string,
): string {
  const escaped = JSON.stringify(pathData);
  return `import { Icon, type IconComponentProps } from "./icon.js";

const path = ${escaped};

export function ${component}(props: IconComponentProps) {
  return <Icon path={path} {...props} />;
}

export { path };
`;
}

function assertKebabSlug(slug: string, context: string): void {
  if (!KEBAB_REGEX.test(slug)) {
    throw new Error(
      `${context}: "${slug}" is not valid kebab-case. Use lowercase letters, numbers, and hyphens only.`,
    );
  }
}

function readMdiVersion(): string {
  const mdiPackageJson = JSON.parse(
    fs.readFileSync(
      path.join(ROOT, "node_modules", "@mdi", "js", "package.json"),
      "utf8",
    ),
  ) as { version: string };
  return mdiPackageJson.version;
}

function hashFile(filePath: string): string {
  return crypto.createHash("sha1").update(fs.readFileSync(filePath)).digest("hex");
}

function readSvgFingerprints(): Record<string, string> {
  if (!fs.existsSync(SVG_DIR)) {
    return {};
  }

  const fingerprints: Record<string, string> = {};
  for (const file of fs.readdirSync(SVG_DIR).filter((entry) => entry.endsWith(".svg"))) {
    fingerprints[file] = hashFile(path.join(SVG_DIR, file));
  }
  return fingerprints;
}

function readCache(): IconsCache | null {
  if (!fs.existsSync(CACHE_PATH)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(CACHE_PATH, "utf8")) as IconsCache;
}

function writeCache(cache: IconsCache): void {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  fs.writeFileSync(CACHE_PATH, `${JSON.stringify(cache, null, 2)}\n`, "utf8");
}

function writeIfChanged(filePath: string, content: string): boolean {
  if (fs.existsSync(filePath)) {
    const existing = fs.readFileSync(filePath, "utf8");
    if (existing === content) {
      return false;
    }
  }
  fs.writeFileSync(filePath, content, "utf8");
  return true;
}

function collectMdiIcons(): Map<string, IconManifestEntry> {
  const icons = new Map<string, IconManifestEntry>();

  for (const exportName of Object.keys(mdi)) {
    if (!exportName.startsWith("mdi")) {
      continue;
    }

    const pathValue = mdi[exportName as keyof typeof mdi];
    if (typeof pathValue !== "string") {
      continue;
    }

    const slug = mdiExportToSlug(exportName);
    assertKebabSlug(slug, `MDI export ${exportName}`);

    if (icons.has(slug)) {
      throw new Error(`Duplicate MDI slug "${slug}" from export ${exportName}`);
    }

    icons.set(slug, {
      slug,
      component: slugToComponent(slug),
      origin: "mdi",
      path: pathValue,
    });
  }

  return icons;
}

function collectSvgIcons(
  existing: Map<string, IconManifestEntry>,
): Map<string, IconManifestEntry> {
  const icons = new Map(existing);

  if (!fs.existsSync(SVG_DIR)) {
    fs.mkdirSync(SVG_DIR, { recursive: true });
    return icons;
  }

  const files = fs
    .readdirSync(SVG_DIR)
    .filter((file) => file.endsWith(".svg"))
    .sort();

  for (const file of files) {
    const slug = path.basename(file, ".svg");
    assertKebabSlug(slug, `SVG file ${file}`);

    if (icons.has(slug)) {
      throw new Error(
        `SVG "${file}" conflicts with existing icon slug "${slug}". Rename the SVG file.`,
      );
    }

    const svgContent = fs.readFileSync(path.join(SVG_DIR, file), "utf8");
    const pathData = extractSvgPaths(svgContent);

    icons.set(slug, {
      slug,
      component: slugToComponent(slug),
      origin: "svg",
      path: pathData,
    });
  }

  return icons;
}

function buildSlugToMdiExport(): Map<string, string> {
  const slugToMdiExport = new Map<string, string>();
  for (const exportName of Object.keys(mdi)) {
    if (!exportName.startsWith("mdi")) {
      continue;
    }
    const pathValue = mdi[exportName as keyof typeof mdi];
    if (typeof pathValue !== "string") {
      continue;
    }
    slugToMdiExport.set(mdiExportToSlug(exportName), exportName);
  }
  return slugToMdiExport;
}

function writeIconSources(
  icons: Map<string, IconManifestEntry>,
  options: { regenerateMdi: boolean },
): number {
  fs.mkdirSync(PACKAGE_SRC, { recursive: true });
  const slugToMdiExport = buildSlugToMdiExport();
  const expectedFiles = new Set<string>(["icon.tsx"]);
  let written = 0;

  for (const entry of icons.values()) {
    if (entry.origin === "mdi" && !options.regenerateMdi) {
      expectedFiles.add(`${entry.slug}.tsx`);
      continue;
    }

    const fileName = `${entry.slug}.tsx`;
    expectedFiles.add(fileName);
    const filePath = path.join(PACKAGE_SRC, fileName);

    const content =
      entry.origin === "mdi"
        ? generateMdiIconFile(
            entry.slug,
            entry.component,
            slugToMdiExport.get(entry.slug)!,
          )
        : generateSvgIconFile(entry.slug, entry.component, entry.path);

    if (writeIfChanged(filePath, content)) {
      written += 1;
    }
  }

  if (options.regenerateMdi) {
    for (const file of fs.readdirSync(PACKAGE_SRC)) {
      if (!file.endsWith(".tsx") || file === "icon.tsx") {
        continue;
      }
      if (!expectedFiles.has(file)) {
        fs.unlinkSync(path.join(PACKAGE_SRC, file));
      }
    }
  } else {
    for (const file of fs.readdirSync(PACKAGE_SRC)) {
      if (!file.endsWith(".tsx") || file === "icon.tsx") {
        continue;
      }
      const slug = file.replace(/\.tsx$/, "");
      const entry = icons.get(slug);
      if (entry?.origin === "svg" && !expectedFiles.has(file)) {
        fs.unlinkSync(path.join(PACKAGE_SRC, file));
      }
    }
  }

  return written;
}

function writeManifest(icons: Map<string, IconManifestEntry>): boolean {
  const manifest: IconManifest = {
    generatedAt: new Date().toISOString(),
    icons: [...icons.values()].sort((a, b) => a.slug.localeCompare(b.slug)),
  };

  const serialized = `${JSON.stringify(manifest, null, 2)}\n`;
  let changed = false;

  fs.mkdirSync(ICONS_DIR, { recursive: true });
  if (!fs.existsSync(MANIFEST_PATH) || fs.readFileSync(MANIFEST_PATH, "utf8") !== serialized) {
    fs.writeFileSync(MANIFEST_PATH, serialized, "utf8");
    changed = true;
  }

  fs.mkdirSync(path.dirname(APP_MANIFEST_PATH), { recursive: true });
  if (
    !fs.existsSync(APP_MANIFEST_PATH) ||
    fs.readFileSync(APP_MANIFEST_PATH, "utf8") !== serialized
  ) {
    fs.writeFileSync(APP_MANIFEST_PATH, serialized, "utf8");
    changed = true;
  }

  const packageManifestPath = path.join(ROOT, "packages", "icons", "manifest.json");
  if (
    !fs.existsSync(packageManifestPath) ||
    fs.readFileSync(packageManifestPath, "utf8") !== serialized
  ) {
    fs.writeFileSync(packageManifestPath, serialized, "utf8");
    changed = true;
  }

  return changed;
}

function fingerprintsEqual(
  left: Record<string, string>,
  right: Record<string, string>,
): boolean {
  const leftKeys = Object.keys(left).sort();
  const rightKeys = Object.keys(right).sort();
  if (leftKeys.length !== rightKeys.length) {
    return false;
  }
  return leftKeys.every((key, index) => key === rightKeys[index] && left[key] === right[key]);
}

export function generateIcons(): IconManifest {
  const started = performance.now();
  const mdiVersion = readMdiVersion();
  const svgFingerprints = readSvgFingerprints();
  const cache = readCache();
  const mdiIcons = collectMdiIcons();
  const allIcons = collectSvgIcons(mdiIcons);

  const mdiUnchanged = cache?.mdiVersion === mdiVersion;
  const svgsUnchanged = cache
    ? fingerprintsEqual(cache.svgFingerprints, svgFingerprints)
    : false;
  const countUnchanged = cache?.iconCount === allIcons.size;

  if (
    !FORCE &&
    mdiUnchanged &&
    svgsUnchanged &&
    countUnchanged &&
    fs.existsSync(MANIFEST_PATH) &&
    fs.existsSync(path.join(PACKAGE_SRC, "account.tsx"))
  ) {
    console.log(
      `Skipped icon generation (cache hit, ${allIcons.size} icons) in ${Math.round(performance.now() - started)}ms`,
    );
    return JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8")) as IconManifest;
  }

  const regenerateMdi = FORCE || !mdiUnchanged || !fs.existsSync(path.join(PACKAGE_SRC, "account.tsx"));
  const filesWritten = writeIconSources(allIcons, { regenerateMdi });
  const manifestChanged = writeManifest(allIcons);

  writeCache({
    mdiVersion,
    svgFingerprints,
    iconCount: allIcons.size,
  });

  if (filesWritten > 0 || manifestChanged) {
    fs.rmSync(BUILD_STAMP_PATH, { force: true });
  }

  const svgCount = [...allIcons.values()].filter((icon) => icon.origin === "svg").length;
  const mdiCount = allIcons.size - svgCount;

  console.log(
    `Generated ${allIcons.size} icons (${svgCount} SVG, ${mdiCount} MDI) · wrote ${filesWritten} file(s) in ${Math.round(performance.now() - started)}ms`,
  );

  return {
    generatedAt: new Date().toISOString(),
    icons: [...allIcons.values()].sort((a, b) => a.slug.localeCompare(b.slug)),
  };
}

export function getSourceFingerprint(): string {
  if (!fs.existsSync(PACKAGE_SRC)) {
    return "missing";
  }

  let latest = 0;
  let count = 0;
  for (const file of fs.readdirSync(PACKAGE_SRC)) {
    if (!file.endsWith(".tsx")) {
      continue;
    }
    count += 1;
    latest = Math.max(latest, fs.statSync(path.join(PACKAGE_SRC, file)).mtimeMs);
  }

  return `${count}:${latest}`;
}

export function needsIconsBuild(): boolean {
  const distIcon = path.join(ROOT, "packages", "icons", "dist", "icon.js");
  if (!fs.existsSync(distIcon)) {
    return true;
  }

  const fingerprint = getSourceFingerprint();
  if (fs.existsSync(BUILD_STAMP_PATH)) {
    const stamp = JSON.parse(fs.readFileSync(BUILD_STAMP_PATH, "utf8")) as {
      fingerprint: string;
    };
    if (stamp.fingerprint === fingerprint) {
      return false;
    }
  }

  const srcIcon = path.join(PACKAGE_SRC, "icon.tsx");
  return fs.statSync(srcIcon).mtimeMs > fs.statSync(distIcon).mtimeMs;
}

export function writeBuildStamp(): void {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  fs.writeFileSync(
    BUILD_STAMP_PATH,
    `${JSON.stringify({ fingerprint: getSourceFingerprint() }, null, 2)}\n`,
    "utf8",
  );
}

if (process.argv[1]?.includes("generate-icons")) {
  generateIcons();
}
