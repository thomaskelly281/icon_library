import { mdiWaterOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterOff(props: IconComponentProps) {
  return <Icon path={mdiWaterOff} {...props} />;
}

export { mdiWaterOff as path };
