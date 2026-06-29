import { mdiCalendarPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarPlus(props: IconComponentProps) {
  return <Icon path={mdiCalendarPlus} {...props} />;
}

export { mdiCalendarPlus as path };
