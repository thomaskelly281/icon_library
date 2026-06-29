import { mdiCalendarRange } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarRange(props: IconComponentProps) {
  return <Icon path={mdiCalendarRange} {...props} />;
}

export { mdiCalendarRange as path };
