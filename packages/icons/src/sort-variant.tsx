import { mdiSortVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortVariant(props: IconComponentProps) {
  return <Icon path={mdiSortVariant} {...props} />;
}

export { mdiSortVariant as path };
