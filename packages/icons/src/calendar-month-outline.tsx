import { mdiCalendarMonthOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarMonthOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarMonthOutline} {...props} />;
}

export { mdiCalendarMonthOutline as path };
