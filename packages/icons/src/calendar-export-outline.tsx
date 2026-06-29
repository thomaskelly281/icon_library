import { mdiCalendarExportOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarExportOutline(props: IconComponentProps) {
  return <Icon path={mdiCalendarExportOutline} {...props} />;
}

export { mdiCalendarExportOutline as path };
