import { mdiCalendarLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarLock(props: IconComponentProps) {
  return <Icon path={mdiCalendarLock} {...props} />;
}

export { mdiCalendarLock as path };
