import { mdiTimelineOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimelineOutline(props: IconComponentProps) {
  return <Icon path={mdiTimelineOutline} {...props} />;
}

export { mdiTimelineOutline as path };
