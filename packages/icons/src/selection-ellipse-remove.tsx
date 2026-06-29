import { mdiSelectionEllipseRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectionEllipseRemove(props: IconComponentProps) {
  return <Icon path={mdiSelectionEllipseRemove} {...props} />;
}

export { mdiSelectionEllipseRemove as path };
