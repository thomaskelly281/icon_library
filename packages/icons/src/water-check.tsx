import { mdiWaterCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterCheck(props: IconComponentProps) {
  return <Icon path={mdiWaterCheck} {...props} />;
}

export { mdiWaterCheck as path };
