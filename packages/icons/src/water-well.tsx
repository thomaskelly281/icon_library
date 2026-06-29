import { mdiWaterWell } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterWell(props: IconComponentProps) {
  return <Icon path={mdiWaterWell} {...props} />;
}

export { mdiWaterWell as path };
