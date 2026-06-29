import { mdiTableLargePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableLargePlus(props: IconComponentProps) {
  return <Icon path={mdiTableLargePlus} {...props} />;
}

export { mdiTableLargePlus as path };
