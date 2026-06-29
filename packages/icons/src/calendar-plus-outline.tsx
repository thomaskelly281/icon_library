import { mdiCalendarPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarPlusOutline} {...props} />;
}

export { mdiCalendarPlusOutline as path };
