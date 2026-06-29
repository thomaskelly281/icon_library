import { mdiSelectionEllipseArrowInside } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectionEllipseArrowInside(props: IconComponentProps) {
  return <Icon path={mdiSelectionEllipseArrowInside} {...props} />;
}

export { mdiSelectionEllipseArrowInside as path };
