import { mdiWaterBoilerOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterBoilerOff(props: IconComponentProps) {
  return <Icon path={mdiWaterBoilerOff} {...props} />;
}

export { mdiWaterBoilerOff as path };
