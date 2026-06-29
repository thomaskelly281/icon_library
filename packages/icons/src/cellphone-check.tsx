import { mdiCellphoneCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CellphoneCheck(props: IconComponentProps) {
  return <Icon path={mdiCellphoneCheck} {...props} />;
}

export { mdiCellphoneCheck as path };
