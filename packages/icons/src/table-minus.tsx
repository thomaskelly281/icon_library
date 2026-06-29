import { mdiTableMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableMinus(props: IconComponentProps) {
  return <Icon path={mdiTableMinus} {...props} />;
}

export { mdiTableMinus as path };
