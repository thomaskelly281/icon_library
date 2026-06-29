import { mdiRssBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RssBox(props: IconComponentProps) {
  return <Icon path={mdiRssBox} {...props} />;
}

export { mdiRssBox as path };
