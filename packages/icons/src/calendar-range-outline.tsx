import { mdiCalendarRangeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarRangeOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarRangeOutline} {...props} />;
}

export { mdiCalendarRangeOutline as path };
