import { mdiCalendarAccount } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarAccount(props: IconComponentProps) {
  return <Icon path={mdiCalendarAccount} {...props} />;
}

export { mdiCalendarAccount as path };
