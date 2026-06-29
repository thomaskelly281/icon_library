import { mdiPencilBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PencilBox(props: IconComponentProps) {
  return <Icon path={mdiPencilBox} {...props} />;
}

export { mdiPencilBox as path };
