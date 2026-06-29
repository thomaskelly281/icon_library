import { mdiCalendarRefresh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarRefresh(props: IconComponentProps) {
  return <Icon path={mdiCalendarRefresh} {...props} />;
}

export { mdiCalendarRefresh as path };
