import { mdiCellphoneLink } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CellphoneLink(props: IconComponentProps) {
  return <Icon path={mdiCellphoneLink} {...props} />;
}

export { mdiCellphoneLink as path };
