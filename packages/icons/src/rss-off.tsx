import { mdiRssOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RssOff(props: IconComponentProps) {
  return <Icon path={mdiRssOff} {...props} />;
}

export { mdiRssOff as path };
