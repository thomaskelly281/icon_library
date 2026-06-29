import { mdiPencil } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pencil(props: IconComponentProps) {
  return <Icon path={mdiPencil} {...props} />;
}

export { mdiPencil as path };
