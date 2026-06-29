import { mdiTableLargeRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableLargeRemove(props: IconComponentProps) {
  return <Icon path={mdiTableLargeRemove} {...props} />;
}

export { mdiTableLargeRemove as path };
