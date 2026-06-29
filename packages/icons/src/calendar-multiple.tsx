import { mdiCalendarMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarMultiple(props: IconComponentProps) {
  return <Icon path={mdiCalendarMultiple} {...props} />;
}

export { mdiCalendarMultiple as path };
