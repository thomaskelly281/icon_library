import { mdiWaterOpacity } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterOpacity(props: IconComponentProps) {
  return <Icon path={mdiWaterOpacity} {...props} />;
}

export { mdiWaterOpacity as path };
