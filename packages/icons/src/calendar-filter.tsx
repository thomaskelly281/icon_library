import { mdiCalendarFilter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarFilter(props: IconComponentProps) {
  return <Icon path={mdiCalendarFilter} {...props} />;
}

export { mdiCalendarFilter as path };
