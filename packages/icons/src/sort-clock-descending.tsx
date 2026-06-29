import { mdiSortClockDescending } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortClockDescending(props: IconComponentProps) {
  return <Icon path={mdiSortClockDescending} {...props} />;
}

export { mdiSortClockDescending as path };
