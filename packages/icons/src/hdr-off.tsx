import { mdiHdrOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HdrOff(props: IconComponentProps) {
  return <Icon path={mdiHdrOff} {...props} />;
}

export { mdiHdrOff as path };
