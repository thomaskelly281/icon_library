import { mdiEscalatorUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EscalatorUp(props: IconComponentProps) {
  return <Icon path={mdiEscalatorUp} {...props} />;
}

export { mdiEscalatorUp as path };
