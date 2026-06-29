import { mdiCalendarBlankMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarBlankMultiple(props: IconComponentProps) {
  return <Icon path={mdiCalendarBlankMultiple} {...props} />;
}

export { mdiCalendarBlankMultiple as path };
