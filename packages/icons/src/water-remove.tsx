import { mdiWaterRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterRemove(props: IconComponentProps) {
  return <Icon path={mdiWaterRemove} {...props} />;
}

export { mdiWaterRemove as path };
