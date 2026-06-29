import { mdiCalendarRefreshOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarRefreshOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarRefreshOutline} {...props} />;
}

export { mdiCalendarRefreshOutline as path };
