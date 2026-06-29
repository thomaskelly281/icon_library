import { mdiCalendarMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarMinusOutline} {...props} />;
}

export { mdiCalendarMinusOutline as path };
