import { mdiCalendarExport } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CalendarExport(props: IconComponentProps) {
  return <Icon path={mdiCalendarExport} {...props} />;
}

export { mdiCalendarExport as path };
