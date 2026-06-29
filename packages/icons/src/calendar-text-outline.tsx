import { mdiCalendarTextOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarTextOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarTextOutline} {...props} />;
}

export { mdiCalendarTextOutline as path };
