import { mdiWaterPercent } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterPercent(props: IconComponentProps) {
  return <Icon path={mdiWaterPercent} {...props} />;
}

export { mdiWaterPercent as path };
