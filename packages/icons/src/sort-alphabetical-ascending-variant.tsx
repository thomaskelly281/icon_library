import { mdiSortAlphabeticalAscendingVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortAlphabeticalAscendingVariant(props: IconComponentProps) {
  return <Icon path={mdiSortAlphabeticalAscendingVariant} {...props} />;
}

export { mdiSortAlphabeticalAscendingVariant as path };
