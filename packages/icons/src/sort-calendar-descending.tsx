import { mdiSortCalendarDescending } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortCalendarDescending(props: IconComponentProps) {
  return <Icon path={mdiSortCalendarDescending} {...props} />;
}

export { mdiSortCalendarDescending as path };
