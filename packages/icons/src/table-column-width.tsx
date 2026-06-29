import { mdiTableColumnWidth } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableColumnWidth(props: IconComponentProps) {
  return <Icon path={mdiTableColumnWidth} {...props} />;
}

export { mdiTableColumnWidth as path };
