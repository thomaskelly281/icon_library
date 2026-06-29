import { mdiTimelineTextOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimelineTextOutline(props: IconComponentProps) {
  return <Icon path={mdiTimelineTextOutline} {...props} />;
}

export { mdiTimelineTextOutline as path };
