import { mdiTableRowPlusBefore } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableRowPlusBefore(props: IconComponentProps) {
  return <Icon path={mdiTableRowPlusBefore} {...props} />;
}

export { mdiTableRowPlusBefore as path };
