import { mdiGateOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GateOpen(props: IconComponentProps) {
  return <Icon path={mdiGateOpen} {...props} />;
}

export { mdiGateOpen as path };
