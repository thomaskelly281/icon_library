import { mdiWaterPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterPlus(props: IconComponentProps) {
  return <Icon path={mdiWaterPlus} {...props} />;
}

export { mdiWaterPlus as path };
