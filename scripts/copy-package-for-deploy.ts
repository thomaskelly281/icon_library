import { execSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const DIST_PACKAGES = path.join(ROOT, "dist-packages");
const PUBLIC_TARBALL = path.join(PUBLIC_DIR, "blok-icons.tgz");

export function copyPackageTarballForDeploy(): void {
  execSync("pnpm icons:build", { cwd: ROOT, stdio: "inherit" });
  execSync(`pnpm --filter @blok/icons pack --pack-destination "${DIST_PACKAGES}"`, {
    cwd: ROOT,
    stdio: "inherit",
  });

  if (!existsSync(DIST_PACKAGES)) {
    throw new Error("Pack did not create dist-packages/");
  }

  const tarball = readdirSync(DIST_PACKAGES).find((file) =>
    file.startsWith("blok-icons-") && file.endsWith(".tgz"),
  );

  if (!tarball) {
    throw new Error("Could not find blok-icons tarball in dist-packages/");
  }

  mkdirSync(PUBLIC_DIR, { recursive: true });
  cpSync(path.join(DIST_PACKAGES, tarball), PUBLIC_TARBALL);
  console.log(`Published install tarball at public/blok-icons.tgz (from ${tarball})`);
}

if (process.argv[1]?.includes("copy-package-for-deploy")) {
  copyPackageTarballForDeploy();
}
