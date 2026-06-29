import { mdiCalendarBlank } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarBlank(props: IconComponentProps) {
  return <Icon path={mdiCalendarBlank} {...props} />;
}

export { mdiCalendarBlank as path };
