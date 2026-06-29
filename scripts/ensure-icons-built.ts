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
    console.log("Skipped @sitecore/icons build (up to date)");
    return;
  }

  console.log("Building @sitecore/icons...");
  execSync("pnpm --filter @sitecore/icons build", {
    cwd: ROOT,
    stdio: "inherit",
  });
  writeBuildStamp();
}

ensureIconsBuilt();
