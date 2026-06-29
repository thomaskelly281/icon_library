import { mdiTableFilter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableFilter(props: IconComponentProps) {
  return <Icon path={mdiTableFilter} {...props} />;
}

export { mdiTableFilter as path };
