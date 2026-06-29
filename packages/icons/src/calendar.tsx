import { mdiCalendar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Calendar(props: IconComponentProps) {
  return <Icon path={mdiCalendar} {...props} />;
}

export { mdiCalendar as path };
