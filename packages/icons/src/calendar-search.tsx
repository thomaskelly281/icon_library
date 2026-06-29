import { mdiCalendarSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarSearch(props: IconComponentProps) {
  return <Icon path={mdiCalendarSearch} {...props} />;
}

export { mdiCalendarSearch as path };
