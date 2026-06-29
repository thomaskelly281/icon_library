import { mdiSortDescending } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortDescending(props: IconComponentProps) {
  return <Icon path={mdiSortDescending} {...props} />;
}

export { mdiSortDescending as path };
