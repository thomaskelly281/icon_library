import { mdiCellphoneText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CellphoneText(props: IconComponentProps) {
  return <Icon path={mdiCellphoneText} {...props} />;
}

export { mdiCellphoneText as path };
