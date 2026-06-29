import { mdiSortAlphabeticalDescendingVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortAlphabeticalDescendingVariant(props: IconComponentProps) {
  return <Icon path={mdiSortAlphabeticalDescendingVariant} {...props} />;
}

export { mdiSortAlphabeticalDescendingVariant as path };
