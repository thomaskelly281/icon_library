import { mdiTimelineRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimelineRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiTimelineRemoveOutline} {...props} />;
}

export { mdiTimelineRemoveOutline as path };
