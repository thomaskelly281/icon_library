import { mdiSortAlphabeticalVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortAlphabeticalVariant(props: IconComponentProps) {
  return <Icon path={mdiSortAlphabeticalVariant} {...props} />;
}

export { mdiSortAlphabeticalVariant as path };
