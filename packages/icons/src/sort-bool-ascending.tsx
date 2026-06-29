import { mdiSortBoolAscending } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortBoolAscending(props: IconComponentProps) {
  return <Icon path={mdiSortBoolAscending} {...props} />;
}

export { mdiSortBoolAscending as path };
