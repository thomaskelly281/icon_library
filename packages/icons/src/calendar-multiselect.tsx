import { mdiCalendarMultiselect } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarMultiselect(props: IconComponentProps) {
  return <Icon path={mdiCalendarMultiselect} {...props} />;
}

export { mdiCalendarMultiselect as path };
