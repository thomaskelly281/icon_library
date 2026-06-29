import { mdiCellphonePlay } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CellphonePlay(props: IconComponentProps) {
  return <Icon path={mdiCellphonePlay} {...props} />;
}

export { mdiCellphonePlay as path };
