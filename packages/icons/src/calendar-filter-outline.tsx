import { mdiCalendarFilterOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarFilterOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarFilterOutline} {...props} />;
}

export { mdiCalendarFilterOutline as path };
