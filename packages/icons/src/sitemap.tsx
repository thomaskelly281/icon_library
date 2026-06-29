import { mdiSitemap } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Sitemap(props: IconComponentProps) {
  return <Icon path={mdiSitemap} {...props} />;
}

export { mdiSitemap as path };
