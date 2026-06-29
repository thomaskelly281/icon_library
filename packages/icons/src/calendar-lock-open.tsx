import { mdiCalendarLockOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarLockOpen(props: IconComponentProps) {
  return <Icon path={mdiCalendarLockOpen} {...props} />;
}

export { mdiCalendarLockOpen as path };
