import { mdiCalendarWeekBeginOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarWeekBeginOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarWeekBeginOutline} {...props} />;
}

export { mdiCalendarWeekBeginOutline as path };
