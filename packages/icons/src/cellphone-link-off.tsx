import { mdiCellphoneLinkOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CellphoneLinkOff(props: IconComponentProps) {
  return <Icon path={mdiCellphoneLinkOff} {...props} />;
}

export { mdiCellphoneLinkOff as path };
