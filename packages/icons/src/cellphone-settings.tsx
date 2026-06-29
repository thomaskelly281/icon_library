import { mdiCellphoneSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CellphoneSettings(props: IconComponentProps) {
  return <Icon path={mdiCellphoneSettings} {...props} />;
}

export { mdiCellphoneSettings as path };
