import { mdiCalendarEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarEditOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarEditOutline} {...props} />;
}

export { mdiCalendarEditOutline as path };
