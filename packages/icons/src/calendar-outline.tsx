import { mdiCalendarOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarOutline} {...props} />;
}

export { mdiCalendarOutline as path };
