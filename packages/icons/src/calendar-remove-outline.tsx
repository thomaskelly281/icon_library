import { mdiCalendarRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarRemoveOutline} {...props} />;
}

export { mdiCalendarRemoveOutline as path };
