import { mdiCellphoneNfcOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CellphoneNfcOff(props: IconComponentProps) {
  return <Icon path={mdiCellphoneNfcOff} {...props} />;
}

export { mdiCellphoneNfcOff as path };
