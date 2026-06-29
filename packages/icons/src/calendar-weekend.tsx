import { mdiCalendarWeekend } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarWeekend(props: IconComponentProps) {
  return <Icon path={mdiCalendarWeekend} {...props} />;
}

export { mdiCalendarWeekend as path };
