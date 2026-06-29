import { mdiCalendarClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarClockOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarClockOutline} {...props} />;
}

export { mdiCalendarClockOutline as path };
