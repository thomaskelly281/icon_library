import { mdiSortAscending } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortAscending(props: IconComponentProps) {
  return <Icon path={mdiSortAscending} {...props} />;
}

export { mdiSortAscending as path };
