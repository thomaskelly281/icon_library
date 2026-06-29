import { mdiSelectionDrag } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectionDrag(props: IconComponentProps) {
  return <Icon path={mdiSelectionDrag} {...props} />;
}

export { mdiSelectionDrag as path };
