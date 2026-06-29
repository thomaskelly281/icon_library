import { mdiWaterCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterCircle(props: IconComponentProps) {
  return <Icon path={mdiWaterCircle} {...props} />;
}

export { mdiWaterCircle as path };
