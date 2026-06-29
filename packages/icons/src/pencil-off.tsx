import { mdiPencilOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PencilOff(props: IconComponentProps) {
  return <Icon path={mdiPencilOff} {...props} />;
}

export { mdiPencilOff as path };
