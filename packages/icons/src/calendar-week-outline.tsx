import { mdiCalendarWeekOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarWeekOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarWeekOutline} {...props} />;
}

export { mdiCalendarWeekOutline as path };
