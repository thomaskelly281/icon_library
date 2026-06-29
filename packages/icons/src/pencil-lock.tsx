import { mdiPencilLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PencilLock(props: IconComponentProps) {
  return <Icon path={mdiPencilLock} {...props} />;
}

export { mdiPencilLock as path };
