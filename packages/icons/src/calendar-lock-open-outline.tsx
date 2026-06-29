import { mdiCalendarLockOpenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarLockOpenOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarLockOpenOutline} {...props} />;
}

export { mdiCalendarLockOpenOutline as path };
