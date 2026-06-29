import { mdiCalendarStartOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarStartOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarStartOutline} {...props} />;
}

export { mdiCalendarStartOutline as path };
