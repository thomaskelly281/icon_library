import { mdiGateOr } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GateOr(props: IconComponentProps) {
  return <Icon path={mdiGateOr} {...props} />;
}

export { mdiGateOr as path };
