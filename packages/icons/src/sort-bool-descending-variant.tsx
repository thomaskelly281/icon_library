import { mdiSortBoolDescendingVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortBoolDescendingVariant(props: IconComponentProps) {
  return <Icon path={mdiSortBoolDescendingVariant} {...props} />;
}

export { mdiSortBoolDescendingVariant as path };
