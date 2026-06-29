import { mdiCalendarArrowLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarArrowLeft(props: IconComponentProps) {
  return <Icon path={mdiCalendarArrowLeft} {...props} />;
}

export { mdiCalendarArrowLeft as path };
