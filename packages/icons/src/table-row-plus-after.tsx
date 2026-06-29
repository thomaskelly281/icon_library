import { mdiTableRowPlusAfter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableRowPlusAfter(props: IconComponentProps) {
  return <Icon path={mdiTableRowPlusAfter} {...props} />;
}

export { mdiTableRowPlusAfter as path };
