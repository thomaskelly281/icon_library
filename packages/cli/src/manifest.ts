import { readFileSync, existsSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";
import type { IconManifest } from "./manifest-types.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export function findManifestPath(startDir = process.cwd()): string | null {
  const candidates = [
    join(startDir, "node_modules", "@blok", "icons", "manifest.json"),
    join(startDir, "icons", "manifest.json"),
    join(__dirname, "..", "manifest.json"),
    join(__dirname, "..", "..", "..", "icons", "manifest.json"),
  ];

  for (const candidate of candidates) {
    if (existsSync(candidate)) {
      return candidate;
    }
  }

  return null;
}

export function loadManifest(cwd = process.cwd()): IconManifest {
  const manifestPath = findManifestPath(cwd);
  if (!manifestPath) {
    throw new Error(
      "Could not find icon manifest. Install @blok/icons or run from the Blok Icons workspace.",
    );
  }

  return JSON.parse(readFileSync(manifestPath, "utf8")) as IconManifest;
}

export function findIcon(manifest: IconManifest, slug: string) {
  const icon = manifest.icons.find((entry) => entry.slug === slug);
  if (!icon) {
    throw new Error(`Icon "${slug}" was not found in the manifest.`);
  }
  return icon;
}

export function detectPackageManager(cwd: string): "pnpm" | "npm" | "yarn" {
  if (existsSync(join(cwd, "pnpm-lock.yaml"))) return "pnpm";
  if (existsSync(join(cwd, "yarn.lock"))) return "yarn";
  return "npm";
}

export function ensureIconsDependency(
  cwd: string,
  from = "@blok/icons",
): void {
  const packageJsonPath = join(cwd, "package.json");
  if (!existsSync(packageJsonPath)) {
    throw new Error("No package.json found in the current directory.");
  }

  const pkg = JSON.parse(readFileSync(packageJsonPath, "utf8")) as {
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
  };

  if (pkg.dependencies?.["@blok/icons"] || pkg.devDependencies?.["@blok/icons"]) {
    return;
  }

  const pm = detectPackageManager(cwd);
  const installCmd =
    pm === "pnpm"
      ? `pnpm add ${from}`
      : pm === "yarn"
        ? `yarn add ${from}`
        : `npm install ${from}`;

  execSync(installCmd, { cwd, stdio: "inherit" });
}

export function scaffoldReExport(
  cwd: string,
  slug: string,
  component: string,
  outputPath?: string,
): string {
  const target =
    outputPath ?? join(cwd, "components", "icons", `${slug}.tsx`);
  mkdirSync(dirname(target), { recursive: true });

  const content = `export { ${component} } from "@blok/icons/${slug}";
`;

  writeFileSync(target, content, "utf8");
  return target;
}

export function buildImportStatement(slug: string, component: string): string {
  return `import { ${component} } from "@blok/icons/${slug}";`;
}
