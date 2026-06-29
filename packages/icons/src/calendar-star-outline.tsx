import { mdiCalendarStarOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarStarOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarStarOutline} {...props} />;
}

export { mdiCalendarStarOutline as path };
