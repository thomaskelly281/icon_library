import { mdiCellphoneOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CellphoneOff(props: IconComponentProps) {
  return <Icon path={mdiCellphoneOff} {...props} />;
}

export { mdiCellphoneOff as path };
