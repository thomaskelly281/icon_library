import { mdiCalendarSyncOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarSyncOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarSyncOutline} {...props} />;
}

export { mdiCalendarSyncOutline as path };
