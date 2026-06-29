import { mdiCalendarCollapseHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarCollapseHorizontal(props: IconComponentProps) {
  return <Icon path={mdiCalendarCollapseHorizontal} {...props} />;
}

export { mdiCalendarCollapseHorizontal as path };
