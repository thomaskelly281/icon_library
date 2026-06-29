import { mdiCalendarCollapseHorizontalOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarCollapseHorizontalOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarCollapseHorizontalOutline} {...props} />;
}

export { mdiCalendarCollapseHorizontalOutline as path };
