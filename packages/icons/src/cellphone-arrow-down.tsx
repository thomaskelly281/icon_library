import { mdiCellphoneArrowDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CellphoneArrowDown(props: IconComponentProps) {
  return <Icon path={mdiCellphoneArrowDown} {...props} />;
}

export { mdiCellphoneArrowDown as path };
