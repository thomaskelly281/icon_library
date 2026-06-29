import { mdiCalendarMonth } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarMonth(props: IconComponentProps) {
  return <Icon path={mdiCalendarMonth} {...props} />;
}

export { mdiCalendarMonth as path };
