import { mdiGateArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GateArrowRight(props: IconComponentProps) {
  return <Icon path={mdiGateArrowRight} {...props} />;
}

export { mdiGateArrowRight as path };
