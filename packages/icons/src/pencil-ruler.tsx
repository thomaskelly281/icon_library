import { mdiPencilRuler } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PencilRuler(props: IconComponentProps) {
  return <Icon path={mdiPencilRuler} {...props} />;
}

export { mdiPencilRuler as path };
