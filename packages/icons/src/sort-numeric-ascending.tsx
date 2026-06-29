import { mdiSortNumericAscending } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortNumericAscending(props: IconComponentProps) {
  return <Icon path={mdiSortNumericAscending} {...props} />;
}

export { mdiSortNumericAscending as path };
