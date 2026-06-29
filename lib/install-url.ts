export const PACKAGE_INSTALL_URL =
  process.env.NEXT_PUBLIC_PACKAGE_INSTALL_URL ??
  "https://icon-library-5y84.vercel.app/sitecore-icons.tgz";

export function buildPackageInstallCommand(
  packageManager: "pnpm" | "npm" | "yarn" = "pnpm",
): string {
  const url = PACKAGE_INSTALL_URL;
  if (packageManager === "npm") {
    return `npm install ${url}`;
  }
  if (packageManager === "yarn") {
    return `yarn add ${url}`;
  }
  return `pnpm add ${url}`;
}
