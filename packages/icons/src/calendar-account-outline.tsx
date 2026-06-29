import { mdiCalendarAccountOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarAccountOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarAccountOutline} {...props} />;
}

export { mdiCalendarAccountOutline as path };
