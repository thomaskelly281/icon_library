import { mdiCalendarArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarArrowRight(props: IconComponentProps) {
  return <Icon path={mdiCalendarArrowRight} {...props} />;
}

export { mdiCalendarArrowRight as path };
