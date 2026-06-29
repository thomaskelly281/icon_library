import { mdiCalendarImportOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarImportOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarImportOutline} {...props} />;
}

export { mdiCalendarImportOutline as path };
