import { mdiCalendarSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarSearchOutline} {...props} />;
}

export { mdiCalendarSearchOutline as path };
