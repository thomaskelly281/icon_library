import { mdiGateNor } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GateNor(props: IconComponentProps) {
  return <Icon path={mdiGateNor} {...props} />;
}

export { mdiGateNor as path };
