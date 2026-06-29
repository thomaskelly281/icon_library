import { mdiSortCalendarAscending } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortCalendarAscending(props: IconComponentProps) {
  return <Icon path={mdiSortCalendarAscending} {...props} />;
}

export { mdiSortCalendarAscending as path };
