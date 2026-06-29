import { mdiTimelineMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimelineMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiTimelineMinusOutline} {...props} />;
}

export { mdiTimelineMinusOutline as path };
