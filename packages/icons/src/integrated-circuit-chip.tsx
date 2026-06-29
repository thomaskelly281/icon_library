import { mdiIntegratedCircuitChip } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function IntegratedCircuitChip(props: IconComponentProps) {
  return <Icon path={mdiIntegratedCircuitChip} {...props} />;
}

export { mdiIntegratedCircuitChip as path };
