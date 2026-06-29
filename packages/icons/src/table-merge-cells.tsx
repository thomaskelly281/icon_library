import { mdiTableMergeCells } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableMergeCells(props: IconComponentProps) {
  return <Icon path={mdiTableMergeCells} {...props} />;
}

export { mdiTableMergeCells as path };
