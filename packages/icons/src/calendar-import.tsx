import { mdiCalendarImport } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarImport(props: IconComponentProps) {
  return <Icon path={mdiCalendarImport} {...props} />;
}

export { mdiCalendarImport as path };
