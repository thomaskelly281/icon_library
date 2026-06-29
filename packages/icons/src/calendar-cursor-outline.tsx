import { mdiCalendarCursorOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarCursorOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarCursorOutline} {...props} />;
}

export { mdiCalendarCursorOutline as path };
