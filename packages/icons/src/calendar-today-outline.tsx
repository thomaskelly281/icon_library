import { mdiCalendarTodayOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarTodayOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarTodayOutline} {...props} />;
}

export { mdiCalendarTodayOutline as path };
