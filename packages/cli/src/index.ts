#!/usr/bin/env node
import { Command } from "commander";
import { execSync } from "node:child_process";
import {
  buildImportStatement,
  detectPackageManager,
  ensureIconsDependency,
  findIcon,
  loadManifest,
  scaffoldReExport,
} from "./manifest.js";

const program = new Command();

program
  .name("sitecore-icons")
  .description("Add and manage Sitecore icons in your project")
  .version("0.1.0");

program
  .command("add")
  .description("Add an icon to the current project")
  .argument("<slug>", "Icon slug, e.g. account or sitecore-logo")
  .option("--from <source>", "Dependency source for @sitecore/icons")
  .option("--scaffold", "Create a local re-export file")
  .option(
    "--path <file>",
    "Output path for scaffolded re-export (default: components/icons/{slug}.tsx)",
  )
  .action((slug: string, options: { from?: string; scaffold?: boolean; path?: string }) => {
    const cwd = process.cwd();
    const manifest = loadManifest(cwd);
    const icon = findIcon(manifest, slug);

    ensureIconsDependency(cwd, options.from);

    const importStatement = buildImportStatement(icon.slug, icon.component);
    console.log(importStatement);

    if (options.scaffold) {
      const target = scaffoldReExport(cwd, icon.slug, icon.component, options.path);
      console.log(`\nCreated re-export at ${target}`);
    }

    console.log(`\nUsage example:\n\n${importStatement}\n\n<${icon.component} size={24} />`);
  });

program
  .command("update")
  .description("Update @sitecore/icons in the current project")
  .action(() => {
    const cwd = process.cwd();
    const pm = detectPackageManager(cwd);
    const cmd =
      pm === "pnpm"
        ? "pnpm update @sitecore/icons"
        : pm === "yarn"
          ? "yarn upgrade @sitecore/icons"
          : "npm update @sitecore/icons";

    execSync(cmd, { cwd, stdio: "inherit" });
  });

program
  .command("list")
  .description("List icons from the manifest")
  .option("--search <query>", "Filter icons by slug or component name")
  .option("--origin <origin>", "Filter by origin: mdi or svg")
  .action((options: { search?: string; origin?: "mdi" | "svg" }) => {
    const manifest = loadManifest();
    const query = options.search?.trim().toLowerCase();

    const icons = manifest.icons.filter((icon) => {
      if (options.origin && icon.origin !== options.origin) {
        return false;
      }
      if (!query) {
        return true;
      }
      return (
        icon.slug.includes(query) ||
        icon.component.toLowerCase().includes(query)
      );
    });

    for (const icon of icons.slice(0, 100)) {
      console.log(`${icon.slug}\t${icon.component}\t${icon.origin}`);
    }

    if (icons.length > 100) {
      console.log(`\nShowing 100 of ${icons.length} icons. Refine with --search.`);
    } else {
      console.log(`\n${icons.length} icon(s)`);
    }
  });

program.parse();
