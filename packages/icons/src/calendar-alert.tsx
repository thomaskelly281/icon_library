import { mdiCalendarAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarAlert(props: IconComponentProps) {
  return <Icon path={mdiCalendarAlert} {...props} />;
}

export { mdiCalendarAlert as path };
