import { mdiGateAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GateAlert(props: IconComponentProps) {
  return <Icon path={mdiGateAlert} {...props} />;
}

export { mdiGateAlert as path };
