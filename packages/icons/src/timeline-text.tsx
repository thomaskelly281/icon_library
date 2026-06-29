import { mdiTimelineText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimelineText(props: IconComponentProps) {
  return <Icon path={mdiTimelineText} {...props} />;
}

export { mdiTimelineText as path };
