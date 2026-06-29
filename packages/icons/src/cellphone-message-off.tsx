import { mdiCellphoneMessageOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CellphoneMessageOff(props: IconComponentProps) {
  return <Icon path={mdiCellphoneMessageOff} {...props} />;
}

export { mdiCellphoneMessageOff as path };
