import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";
import {
  generateIcons,
  needsIconsBuild,
  writeBuildStamp,
} from "./generate-icons.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

function ensureIconsBuilt(): void {
  generateIcons();

  if (!needsIconsBuild()) {
    console.log("Skipped @blok/icons build (up to date)");
    return;
  }

  console.log("Building @blok/icons...");
  execSync("pnpm --filter @blok/icons build", {
    cwd: ROOT,
    stdio: "inherit",
  });
  writeBuildStamp();
}

ensureIconsBuilt();
