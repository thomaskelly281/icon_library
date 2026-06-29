import { mdiCalendarStarFourPoints } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarStarFourPoints(props: IconComponentProps) {
  return <Icon path={mdiCalendarStarFourPoints} {...props} />;
}

export { mdiCalendarStarFourPoints as path };
