import { mdiDragVerticalVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DragVerticalVariant(props: IconComponentProps) {
  return <Icon path={mdiDragVerticalVariant} {...props} />;
}

export { mdiDragVerticalVariant as path };
