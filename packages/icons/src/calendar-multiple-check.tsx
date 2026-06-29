import { mdiCalendarMultipleCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarMultipleCheck(props: IconComponentProps) {
  return <Icon path={mdiCalendarMultipleCheck} {...props} />;
}

export { mdiCalendarMultipleCheck as path };
