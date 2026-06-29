import { mdiPencilCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PencilCircle(props: IconComponentProps) {
  return <Icon path={mdiPencilCircle} {...props} />;
}

export { mdiPencilCircle as path };
