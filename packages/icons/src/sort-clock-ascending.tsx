import { mdiSortClockAscending } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortClockAscending(props: IconComponentProps) {
  return <Icon path={mdiSortClockAscending} {...props} />;
}

export { mdiSortClockAscending as path };
