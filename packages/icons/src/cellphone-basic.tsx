import { mdiCellphoneBasic } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CellphoneBasic(props: IconComponentProps) {
  return <Icon path={mdiCellphoneBasic} {...props} />;
}

export { mdiCellphoneBasic as path };
