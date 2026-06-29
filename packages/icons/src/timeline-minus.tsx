import { mdiTimelineMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimelineMinus(props: IconComponentProps) {
  return <Icon path={mdiTimelineMinus} {...props} />;
}

export { mdiTimelineMinus as path };
