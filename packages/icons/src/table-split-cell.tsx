import { mdiTableSplitCell } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableSplitCell(props: IconComponentProps) {
  return <Icon path={mdiTableSplitCell} {...props} />;
}

export { mdiTableSplitCell as path };
