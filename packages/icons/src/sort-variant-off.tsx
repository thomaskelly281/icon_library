import { mdiSortVariantOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortVariantOff(props: IconComponentProps) {
  return <Icon path={mdiSortVariantOff} {...props} />;
}

export { mdiSortVariantOff as path };
