# Sitecore Icons

A flat, tree-shakeable icon library seeded from [Material Design Icons](https://pictogrammers.com/library/mdi/) (`@mdi/js`) plus contributed SVGs. Includes a Next.js browser and a CLI for adding icons to projects.

## Quick start (browser)

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to browse ~7,400 icons. Each grid tile shows the import slug and component name. Click an icon to open a detail dialog with a larger preview, SVG download, and copyable import snippet.

## Install in your app

### Production (after npm publish)

```bash
pnpm add @sitecore/icons
```

### Testing without npm (proof of concept)

The **deployed website URL** (e.g. `https://sitecore-icons.vercel.app`) is for **browsing only** — search icons, copy import snippets, download SVGs. You cannot run `pnpm add https://your-app-url/...` to install icons; package managers need a git repo, local path, or tarball.

Use one of these instead while testing:

#### Option 1: Local path (same machine)

From your test app, point at the built package in this repo:

```bash
pnpm add file:../Sitecore_icons/packages/icons
```

Or with pnpm link:

```bash
# In Sitecore_icons
cd packages/icons && pnpm link --global

# In your test app
pnpm link --global @sitecore/icons
```

#### Option 2: GitHub (after pushing this repo)

Install the package subdirectory from git (not the whole monorepo root):

```bash
pnpm add "git+https://github.com/ThomasKelly/Sitecore_icons.git#main&path:packages/icons"
```

Replace `ThomasKelly/Sitecore_icons` with your GitHub org/repo.

#### Option 3: Tarball file or URL

Build a `.tgz` you can share or host:

```bash
pnpm pack:icons
# Creates dist-packages/sitecore-icons-0.1.0.tgz
```

Install from a local file:

```bash
pnpm add ./path/to/sitecore-icons-0.1.0.tgz
```

Or host the `.tgz` somewhere static (S3, GitHub release, or `public/` on your deployed site) and install from that URL:

```bash
pnpm add https://your-site.example.com/sitecore-icons-0.1.0.tgz
```

To ship the tarball with your deployed browser, copy it into `public/` before deploy:

```bash
pnpm pack:icons
cp dist-packages/sitecore-icons-*.tgz public/
```

Then consumers can run `pnpm add https://your-deployed-app.vercel.app/sitecore-icons-0.1.0.tgz`.

## Use an icon

Every icon uses the same flat import pattern — no `mdi/` or `custom/` prefix:

```tsx
import { Account } from "@sitecore/icons/account";
import { SitecoreLogo } from "@sitecore/icons/sitecore-logo";

export function Example() {
  return (
    <>
      <Account size={24} className="text-neutral-900" />
      <SitecoreLogo size={24} />
    </>
  );
}
```

Each icon module is separate, so bundlers tree-shake unused icons when `sideEffects: false` is respected.

## CLI

Install the CLI in a project (or run with `pnpm dlx` after publish):

```bash
pnpm dlx @sitecore/icons-cli add account
pnpm dlx @sitecore/icons-cli add sitecore-logo
pnpm dlx @sitecore/icons-cli add account --scaffold
pnpm dlx @sitecore/icons-cli update
pnpm dlx @sitecore/icons-cli list --search account
```

| Command | Description |
|---|---|
| `add <slug>` | Ensures `@sitecore/icons` is installed and prints the import |
| `add <slug> --scaffold` | Also creates `components/icons/<slug>.tsx` re-export |
| `add <slug> --from <source>` | Install package from git URL, file path, or tarball (see testing section above) |
| `update` | Updates `@sitecore/icons` via your package manager |
| `list [--search] [--origin]` | Search the icon catalog |

From this monorepo during development:

```bash
node packages/cli/dist/index.js add account
```

## Contribute an icon

1. Add a kebab-case SVG to [`icons/`](icons/) (e.g. `icons/my-icon.svg`)
2. Run generation:

   ```bash
   pnpm generate
   ```

3. Commit the SVG, generated `packages/icons/src/my-icon.tsx`, and updated manifests

If the SVG slug matches an existing icon, generation fails — rename the file.

**Naming rules**

- Slug: kebab-case filename without extension (`account`, `sitecore-logo`)
- Component: PascalCase from slug (`Account`, `SitecoreLogo`)
- Import: `@sitecore/icons/<slug>`

## Repository layout

```
icons/                    # Drop contributed SVGs here
icons/manifest.json       # Generated catalog (used by browser + CLI)
packages/icons/           # @sitecore/icons publishable package
packages/cli/             # @sitecore/icons-cli
scripts/generate-icons.ts # MDI sync + SVG → React pipeline
app/                      # Next.js icon browser
```

## Scripts

| Script | Description |
|---|---|
| `pnpm generate` | Sync MDI icons + process SVGs (cached; skips when unchanged) |
| `pnpm generate:force` | Regenerate all icon sources regardless of cache |
| `pnpm icons:build` | Incrementally build `@sitecore/icons` when sources changed |
| `pnpm pack:icons` | Build and create `dist-packages/sitecore-icons-*.tgz` for POC installs |
| `pnpm dev` | Fast dev startup (skips unchanged generate/build), then Next.js |
| `pnpm build` | Full production build |

### Build performance

Generation and compilation are cached between runs:

- **Icon generation** skips entirely when `@mdi/js` version and contributed SVGs are unchanged (~20ms vs several seconds)
- **Icon package build** skips when source fingerprints match the last successful build
- Only new or changed SVGs are rewritten during incremental generation
- Use `pnpm generate:force` after upgrading `@mdi/js` or to rebuild all MDI wrappers

## Publishing

```bash
pnpm generate
pnpm --filter @sitecore/icons build
pnpm --filter @sitecore/icons publish
pnpm --filter @sitecore/icons-cli publish
```

## License

MIT
