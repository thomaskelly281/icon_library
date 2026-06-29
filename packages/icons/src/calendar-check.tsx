import { mdiCalendarCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarCheck(props: IconComponentProps) {
  return <Icon path={mdiCalendarCheck} {...props} />;
}

export { mdiCalendarCheck as path };
