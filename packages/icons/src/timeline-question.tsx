import { mdiTimelineQuestion } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimelineQuestion(props: IconComponentProps) {
  return <Icon path={mdiTimelineQuestion} {...props} />;
}

export { mdiTimelineQuestion as path };
