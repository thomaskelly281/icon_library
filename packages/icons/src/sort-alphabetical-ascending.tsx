import { mdiSortAlphabeticalAscending } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortAlphabeticalAscending(props: IconComponentProps) {
  return <Icon path={mdiSortAlphabeticalAscending} {...props} />;
}

export { mdiSortAlphabeticalAscending as path };
