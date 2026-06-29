import { cpSync, existsSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(ROOT, "app", ".next");
const dest = path.join(ROOT, ".next");

if (!existsSync(src)) {
  throw new Error(
    `Expected Next.js output at ${src}. Ensure "pnpm --filter app build" completed successfully.`,
  );
}

rmSync(dest, { recursive: true, force: true });
cpSync(src, dest, { recursive: true });
console.log(`Synced Next.js output: ${src} -> ${dest}`);
