import { mdiGateXor } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GateXor(props: IconComponentProps) {
  return <Icon path={mdiGateXor} {...props} />;
}

export { mdiGateXor as path };
