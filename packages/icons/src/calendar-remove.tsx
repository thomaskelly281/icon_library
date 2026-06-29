import { mdiCalendarRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarRemove(props: IconComponentProps) {
  return <Icon path={mdiCalendarRemove} {...props} />;
}

export { mdiCalendarRemove as path };
