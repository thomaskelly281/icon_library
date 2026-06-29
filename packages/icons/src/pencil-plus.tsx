import { mdiPencilPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PencilPlus(props: IconComponentProps) {
  return <Icon path={mdiPencilPlus} {...props} />;
}

export { mdiPencilPlus as path };
