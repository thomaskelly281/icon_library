import { mdiCalendarEnd } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarEnd(props: IconComponentProps) {
  return <Icon path={mdiCalendarEnd} {...props} />;
}

export { mdiCalendarEnd as path };
