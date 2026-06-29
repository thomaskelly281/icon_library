import { mdiCalendarEndOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarEndOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarEndOutline} {...props} />;
}

export { mdiCalendarEndOutline as path };
