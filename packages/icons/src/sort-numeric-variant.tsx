import { mdiSortNumericVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortNumericVariant(props: IconComponentProps) {
  return <Icon path={mdiSortNumericVariant} {...props} />;
}

export { mdiSortNumericVariant as path };
