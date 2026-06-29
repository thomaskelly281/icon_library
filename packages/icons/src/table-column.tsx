import { mdiTableColumn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableColumn(props: IconComponentProps) {
  return <Icon path={mdiTableColumn} {...props} />;
}

export { mdiTableColumn as path };
