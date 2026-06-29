import { mdiTimelinePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimelinePlus(props: IconComponentProps) {
  return <Icon path={mdiTimelinePlus} {...props} />;
}

export { mdiTimelinePlus as path };
