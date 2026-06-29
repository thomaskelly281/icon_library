import { mdiGate } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Gate(props: IconComponentProps) {
  return <Icon path={mdiGate} {...props} />;
}

export { mdiGate as path };
