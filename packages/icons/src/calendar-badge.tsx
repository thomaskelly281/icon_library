import { mdiCalendarBadge } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarBadge(props: IconComponentProps) {
  return <Icon path={mdiCalendarBadge} {...props} />;
}

export { mdiCalendarBadge as path };
