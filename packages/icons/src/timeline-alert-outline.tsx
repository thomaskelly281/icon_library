import { mdiTimelineAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimelineAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiTimelineAlertOutline} {...props} />;
}

export { mdiTimelineAlertOutline as path };
