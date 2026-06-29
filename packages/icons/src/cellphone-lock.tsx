import { mdiCellphoneLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CellphoneLock(props: IconComponentProps) {
  return <Icon path={mdiCellphoneLock} {...props} />;
}

export { mdiCellphoneLock as path };
