import { mdiCalendarBadgeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarBadgeOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarBadgeOutline} {...props} />;
}

export { mdiCalendarBadgeOutline as path };
