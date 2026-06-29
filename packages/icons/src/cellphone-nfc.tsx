import { mdiCellphoneNfc } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CellphoneNfc(props: IconComponentProps) {
  return <Icon path={mdiCellphoneNfc} {...props} />;
}

export { mdiCellphoneNfc as path };
