import { mdiCalendarCursor } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarCursor(props: IconComponentProps) {
  return <Icon path={mdiCalendarCursor} {...props} />;
}

export { mdiCalendarCursor as path };
