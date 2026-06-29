import { mdiSitemapOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SitemapOutline(props: IconComponentProps) {
  return <Icon path={mdiSitemapOutline} {...props} />;
}

export { mdiSitemapOutline as path };
