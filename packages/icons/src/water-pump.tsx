import { mdiWaterPump } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterPump(props: IconComponentProps) {
  return <Icon path={mdiWaterPump} {...props} />;
}

export { mdiWaterPump as path };
