import { mdiTimelineClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimelineClockOutline(props: IconComponentProps) {
  return <Icon path={mdiTimelineClockOutline} {...props} />;
}

export { mdiTimelineClockOutline as path };
