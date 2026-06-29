import { mdiDragHorizontalVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DragHorizontalVariant(props: IconComponentProps) {
  return <Icon path={mdiDragHorizontalVariant} {...props} />;
}

export { mdiDragHorizontalVariant as path };
