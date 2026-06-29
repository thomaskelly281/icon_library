import { mdiTableRowRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableRowRemove(props: IconComponentProps) {
  return <Icon path={mdiTableRowRemove} {...props} />;
}

export { mdiTableRowRemove as path };
