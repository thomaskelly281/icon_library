import { mdiSortReverseVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortReverseVariant(props: IconComponentProps) {
  return <Icon path={mdiSortReverseVariant} {...props} />;
}

export { mdiSortReverseVariant as path };
