import { mdiCalendarSync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarSync(props: IconComponentProps) {
  return <Icon path={mdiCalendarSync} {...props} />;
}

export { mdiCalendarSync as path };
