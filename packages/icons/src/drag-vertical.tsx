import { mdiDragVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DragVertical(props: IconComponentProps) {
  return <Icon path={mdiDragVertical} {...props} />;
}

export { mdiDragVertical as path };
