import { mdiTimelineRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimelineRemove(props: IconComponentProps) {
  return <Icon path={mdiTimelineRemove} {...props} />;
}

export { mdiTimelineRemove as path };
