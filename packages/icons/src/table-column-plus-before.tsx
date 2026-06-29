import { mdiTableColumnPlusBefore } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableColumnPlusBefore(props: IconComponentProps) {
  return <Icon path={mdiTableColumnPlusBefore} {...props} />;
}

export { mdiTableColumnPlusBefore as path };
