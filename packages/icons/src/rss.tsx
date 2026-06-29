import { mdiRss } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Rss(props: IconComponentProps) {
  return <Icon path={mdiRss} {...props} />;
}

export { mdiRss as path };
