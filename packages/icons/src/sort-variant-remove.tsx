import { mdiSortVariantRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortVariantRemove(props: IconComponentProps) {
  return <Icon path={mdiSortVariantRemove} {...props} />;
}

export { mdiSortVariantRemove as path };
