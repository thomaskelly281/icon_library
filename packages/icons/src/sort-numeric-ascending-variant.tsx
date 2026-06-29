import { mdiSortNumericAscendingVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortNumericAscendingVariant(props: IconComponentProps) {
  return <Icon path={mdiSortNumericAscendingVariant} {...props} />;
}

export { mdiSortNumericAscendingVariant as path };
