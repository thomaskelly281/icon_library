import { mdiCalendarMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarMinus(props: IconComponentProps) {
  return <Icon path={mdiCalendarMinus} {...props} />;
}

export { mdiCalendarMinus as path };
