import { mdiWaterPumpOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterPumpOff(props: IconComponentProps) {
  return <Icon path={mdiWaterPumpOff} {...props} />;
}

export { mdiWaterPumpOff as path };
