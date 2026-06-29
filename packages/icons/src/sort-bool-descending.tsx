import { mdiSortBoolDescending } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SortBoolDescending(props: IconComponentProps) {
  return <Icon path={mdiSortBoolDescending} {...props} />;
}

export { mdiSortBoolDescending as path };
