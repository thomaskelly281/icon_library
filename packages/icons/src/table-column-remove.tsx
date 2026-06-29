import { mdiTableColumnRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableColumnRemove(props: IconComponentProps) {
  return <Icon path={mdiTableColumnRemove} {...props} />;
}

export { mdiTableColumnRemove as path };
