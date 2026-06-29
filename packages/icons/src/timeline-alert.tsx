import { mdiTimelineAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimelineAlert(props: IconComponentProps) {
  return <Icon path={mdiTimelineAlert} {...props} />;
}

export { mdiTimelineAlert as path };
