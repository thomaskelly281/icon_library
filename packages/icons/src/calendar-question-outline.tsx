import { mdiCalendarQuestionOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarQuestionOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarQuestionOutline} {...props} />;
}

export { mdiCalendarQuestionOutline as path };
