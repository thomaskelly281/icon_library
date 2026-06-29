import { mdiGateNand } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GateNand(props: IconComponentProps) {
  return <Icon path={mdiGateNand} {...props} />;
}

export { mdiGateNand as path };
