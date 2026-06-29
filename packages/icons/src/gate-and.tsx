import { mdiGateAnd } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GateAnd(props: IconComponentProps) {
  return <Icon path={mdiGateAnd} {...props} />;
}

export { mdiGateAnd as path };
