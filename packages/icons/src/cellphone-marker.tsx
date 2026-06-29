import { mdiCellphoneMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CellphoneMarker(props: IconComponentProps) {
  return <Icon path={mdiCellphoneMarker} {...props} />;
}

export { mdiCellphoneMarker as path };
