import { mdiCalendarToday } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarToday(props: IconComponentProps) {
  return <Icon path={mdiCalendarToday} {...props} />;
}

export { mdiCalendarToday as path };
