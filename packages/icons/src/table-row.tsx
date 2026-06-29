import { mdiTableRow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableRow(props: IconComponentProps) {
  return <Icon path={mdiTableRow} {...props} />;
}

export { mdiTableRow as path };
