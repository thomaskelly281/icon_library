import { mdiCalendarCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarCheckOutline} {...props} />;
}

export { mdiCalendarCheckOutline as path };
