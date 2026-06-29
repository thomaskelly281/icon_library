import { mdiPenOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PenOff(props: IconComponentProps) {
  return <Icon path={mdiPenOff} {...props} />;
}

export { mdiPenOff as path };
