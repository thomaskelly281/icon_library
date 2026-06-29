import { mdiCellphoneWireless } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CellphoneWireless(props: IconComponentProps) {
  return <Icon path={mdiCellphoneWireless} {...props} />;
}

export { mdiCellphoneWireless as path };
