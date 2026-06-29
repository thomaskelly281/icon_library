import { mdiCalendarStart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarStart(props: IconComponentProps) {
  return <Icon path={mdiCalendarStart} {...props} />;
}

export { mdiCalendarStart as path };
