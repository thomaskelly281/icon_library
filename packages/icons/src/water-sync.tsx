import { mdiWaterSync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterSync(props: IconComponentProps) {
  return <Icon path={mdiWaterSync} {...props} />;
}

export { mdiWaterSync as path };
