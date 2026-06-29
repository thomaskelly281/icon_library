import { mdiCalendarBlankOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarBlankOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarBlankOutline} {...props} />;
}

export { mdiCalendarBlankOutline as path };
