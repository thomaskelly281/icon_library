import { mdiCalendarQuestion } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarQuestion(props: IconComponentProps) {
  return <Icon path={mdiCalendarQuestion} {...props} />;
}

export { mdiCalendarQuestion as path };
