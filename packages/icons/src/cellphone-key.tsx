import { mdiCellphoneKey } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CellphoneKey(props: IconComponentProps) {
  return <Icon path={mdiCellphoneKey} {...props} />;
}

export { mdiCellphoneKey as path };
