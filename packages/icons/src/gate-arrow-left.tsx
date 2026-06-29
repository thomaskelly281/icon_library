import { mdiGateArrowLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GateArrowLeft(props: IconComponentProps) {
  return <Icon path={mdiGateArrowLeft} {...props} />;
}

export { mdiGateArrowLeft as path };
