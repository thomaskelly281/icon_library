import { mdiPencilMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PencilMinus(props: IconComponentProps) {
  return <Icon path={mdiPencilMinus} {...props} />;
}

export { mdiPencilMinus as path };
