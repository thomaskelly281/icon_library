export function pathToSvg(pathData: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="${pathData}"/></svg>`;
}

export function buildImportSnippet(slug: string, component: string): string {
  return `import { ${component} } from "@sitecore/icons/${slug}";`;
}

export function buildUsageSnippet(slug: string, component: string): string {
  return `${buildImportSnippet(slug, component)}\n\n<${component} size={24} />`;
}

export function downloadSvg(pathData: string, filename: string): void {
  const blob = new Blob([pathToSvg(pathData)], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${filename}.svg`;
  anchor.click();
  URL.revokeObjectURL(url);
}
