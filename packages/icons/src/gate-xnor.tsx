import { mdiGateXnor } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GateXnor(props: IconComponentProps) {
  return <Icon path={mdiGateXnor} {...props} />;
}

export { mdiGateXnor as path };
