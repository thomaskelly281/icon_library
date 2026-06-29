import { mdiTimelineCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimelineCheck(props: IconComponentProps) {
  return <Icon path={mdiTimelineCheck} {...props} />;
}

export { mdiTimelineCheck as path };
