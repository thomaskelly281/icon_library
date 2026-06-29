import { mdiCellphoneSound } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CellphoneSound(props: IconComponentProps) {
  return <Icon path={mdiCellphoneSound} {...props} />;
}

export { mdiCellphoneSound as path };
