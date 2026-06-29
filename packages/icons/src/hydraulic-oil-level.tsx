import { mdiHydraulicOilLevel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HydraulicOilLevel(props: IconComponentProps) {
  return <Icon path={mdiHydraulicOilLevel} {...props} />;
}

export { mdiHydraulicOilLevel as path };
