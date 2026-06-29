import { mdiCalendarWeekendOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarWeekendOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarWeekendOutline} {...props} />;
}

export { mdiCalendarWeekendOutline as path };
