import { mdiCellphoneInformation } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CellphoneInformation(props: IconComponentProps) {
  return <Icon path={mdiCellphoneInformation} {...props} />;
}

export { mdiCellphoneInformation as path };
