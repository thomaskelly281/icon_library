import { mdiDragVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DragVariant(props: IconComponentProps) {
  return <Icon path={mdiDragVariant} {...props} />;
}

export { mdiDragVariant as path };
