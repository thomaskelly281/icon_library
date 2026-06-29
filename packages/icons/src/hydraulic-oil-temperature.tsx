import { mdiHydraulicOilTemperature } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HydraulicOilTemperature(props: IconComponentProps) {
  return <Icon path={mdiHydraulicOilTemperature} {...props} />;
}

export { mdiHydraulicOilTemperature as path };
