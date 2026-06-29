import { mdiGateBuffer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GateBuffer(props: IconComponentProps) {
  return <Icon path={mdiGateBuffer} {...props} />;
}

export { mdiGateBuffer as path };
