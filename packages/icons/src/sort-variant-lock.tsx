import { mdiSortVariantLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortVariantLock(props: IconComponentProps) {
  return <Icon path={mdiSortVariantLock} {...props} />;
}

export { mdiSortVariantLock as path };
