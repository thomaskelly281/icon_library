import { mdiCalendarLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarLockOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarLockOutline} {...props} />;
}

export { mdiCalendarLockOutline as path };
