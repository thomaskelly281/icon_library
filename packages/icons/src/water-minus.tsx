import { mdiWaterMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterMinus(props: IconComponentProps) {
  return <Icon path={mdiWaterMinus} {...props} />;
}

export { mdiWaterMinus as path };
