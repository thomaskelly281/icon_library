import { mdiWaterPolo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterPolo(props: IconComponentProps) {
  return <Icon path={mdiWaterPolo} {...props} />;
}

export { mdiWaterPolo as path };
