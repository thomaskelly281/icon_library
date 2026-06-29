import { mdiCalendarClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarClock(props: IconComponentProps) {
  return <Icon path={mdiCalendarClock} {...props} />;
}

export { mdiCalendarClock as path };
