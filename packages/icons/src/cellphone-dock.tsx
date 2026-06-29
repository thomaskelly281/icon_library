import { mdiCellphoneDock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CellphoneDock(props: IconComponentProps) {
  return <Icon path={mdiCellphoneDock} {...props} />;
}

export { mdiCellphoneDock as path };
