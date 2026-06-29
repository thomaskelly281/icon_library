import { mdiCalendarText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarText(props: IconComponentProps) {
  return <Icon path={mdiCalendarText} {...props} />;
}

export { mdiCalendarText as path };
