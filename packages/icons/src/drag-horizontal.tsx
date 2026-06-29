import { mdiDragHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DragHorizontal(props: IconComponentProps) {
  return <Icon path={mdiDragHorizontal} {...props} />;
}

export { mdiDragHorizontal as path };
