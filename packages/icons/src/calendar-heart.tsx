import { mdiCalendarHeart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarHeart(props: IconComponentProps) {
  return <Icon path={mdiCalendarHeart} {...props} />;
}

export { mdiCalendarHeart as path };
