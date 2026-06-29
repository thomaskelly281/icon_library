import { mdiCellphoneRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CellphoneRemove(props: IconComponentProps) {
  return <Icon path={mdiCellphoneRemove} {...props} />;
}

export { mdiCellphoneRemove as path };
