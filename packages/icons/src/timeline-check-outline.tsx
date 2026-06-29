import { mdiTimelineCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimelineCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiTimelineCheckOutline} {...props} />;
}

export { mdiTimelineCheckOutline as path };
