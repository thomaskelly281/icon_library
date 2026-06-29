import { mdiSortAlphabeticalDescending } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortAlphabeticalDescending(props: IconComponentProps) {
  return <Icon path={mdiSortAlphabeticalDescending} {...props} />;
}

export { mdiSortAlphabeticalDescending as path };
