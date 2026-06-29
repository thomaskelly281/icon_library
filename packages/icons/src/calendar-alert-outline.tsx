import { mdiCalendarAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarAlertOutline} {...props} />;
}

export { mdiCalendarAlertOutline as path };
