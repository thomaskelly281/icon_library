import { mdiEscalatorDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EscalatorDown(props: IconComponentProps) {
  return <Icon path={mdiEscalatorDown} {...props} />;
}

export { mdiEscalatorDown as path };
