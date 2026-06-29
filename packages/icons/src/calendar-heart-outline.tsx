import { mdiCalendarHeartOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarHeartOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarHeartOutline} {...props} />;
}

export { mdiCalendarHeartOutline as path };
