import { mdiTimelineQuestionOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimelineQuestionOutline(props: IconComponentProps) {
  return <Icon path={mdiTimelineQuestionOutline} {...props} />;
}

export { mdiTimelineQuestionOutline as path };
