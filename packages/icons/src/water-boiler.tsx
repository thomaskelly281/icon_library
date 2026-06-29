import { mdiWaterBoiler } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterBoiler(props: IconComponentProps) {
  return <Icon path={mdiWaterBoiler} {...props} />;
}

export { mdiWaterBoiler as path };
