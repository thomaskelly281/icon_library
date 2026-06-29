import { mdiCellphoneMessage } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CellphoneMessage(props: IconComponentProps) {
  return <Icon path={mdiCellphoneMessage} {...props} />;
}

export { mdiCellphoneMessage as path };
