import { mdiPencilRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PencilRemove(props: IconComponentProps) {
  return <Icon path={mdiPencilRemove} {...props} />;
}

export { mdiPencilRemove as path };
