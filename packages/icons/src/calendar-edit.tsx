import { mdiCalendarEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarEdit(props: IconComponentProps) {
  return <Icon path={mdiCalendarEdit} {...props} />;
}

export { mdiCalendarEdit as path };
