import { mdiCellphoneCharging } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CellphoneCharging(props: IconComponentProps) {
  return <Icon path={mdiCellphoneCharging} {...props} />;
}

export { mdiCellphoneCharging as path };
