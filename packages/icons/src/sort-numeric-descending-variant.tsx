import { mdiSortNumericDescendingVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortNumericDescendingVariant(props: IconComponentProps) {
  return <Icon path={mdiSortNumericDescendingVariant} {...props} />;
}

export { mdiSortNumericDescendingVariant as path };
