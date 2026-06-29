import { mdiCalendarStar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarStar(props: IconComponentProps) {
  return <Icon path={mdiCalendarStar} {...props} />;
}

export { mdiCalendarStar as path };
