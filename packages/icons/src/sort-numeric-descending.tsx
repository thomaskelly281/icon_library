import { mdiSortNumericDescending } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortNumericDescending(props: IconComponentProps) {
  return <Icon path={mdiSortNumericDescending} {...props} />;
}

export { mdiSortNumericDescending as path };
