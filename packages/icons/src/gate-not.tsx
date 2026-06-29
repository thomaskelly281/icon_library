import { mdiGateNot } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GateNot(props: IconComponentProps) {
  return <Icon path={mdiGateNot} {...props} />;
}

export { mdiGateNot as path };
