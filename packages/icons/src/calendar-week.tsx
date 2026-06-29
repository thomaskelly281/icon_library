import { mdiCalendarWeek } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarWeek(props: IconComponentProps) {
  return <Icon path={mdiCalendarWeek} {...props} />;
}

export { mdiCalendarWeek as path };
