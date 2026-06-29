# Custom icons

Drop SVG files here to add custom icons to the library. Each file becomes a flat import:

```tsx
import { SitecoreLogo } from "@blok/icons/sitecore-logo";
```

## Adding a custom icon

1. Save your SVG as `{kebab-case-name}.svg` in this folder (e.g. `sitecore-logo.svg`).
2. Run from the repo root:

   ```bash
   pnpm generate
   ```

3. Commit the SVG plus the generated files under `packages/icons/src/`.

## Naming rules

- Use **kebab-case** only: `my-brand-icon.svg`
- Names must not collide with existing MDI icon slugs
- The component name is derived automatically (`my-brand-icon` → `MyBrandIcon`)

## How it works

| Source | Origin | Import |
|--------|--------|--------|
| `@mdi/js` (all MDI icons) | `mdi` | `@blok/icons/{slug}` |
| SVG files in this folder | `svg` | `@blok/icons/{slug}` |

Both MDI and custom icons share the same flat import path — no `mdi/` or `custom/` prefix. This replaces importing from `@mdi/js` directly.

## Example

```
icons/
  sitecore-logo.svg   ← your custom SVG
  manifest.json       ← generated, do not edit
```

After `pnpm generate`:

- `packages/icons/src/sitecore-logo.tsx` is created
- `manifest.json` is updated (browser + npm package)
- The icon appears in the icon browser under **Custom**
