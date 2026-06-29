import { mdiCalendarWeekBegin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarWeekBegin(props: IconComponentProps) {
  return <Icon path={mdiCalendarWeekBegin} {...props} />;
}

export { mdiCalendarWeekBegin as path };
