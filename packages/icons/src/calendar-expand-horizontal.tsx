import { mdiCalendarExpandHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarExpandHorizontal(props: IconComponentProps) {
  return <Icon path={mdiCalendarExpandHorizontal} {...props} />;
}

export { mdiCalendarExpandHorizontal as path };
