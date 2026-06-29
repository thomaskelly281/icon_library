import { mdiEscalatorBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EscalatorBox(props: IconComponentProps) {
  return <Icon path={mdiEscalatorBox} {...props} />;
}

export { mdiEscalatorBox as path };
