import { mdiWaterPercentAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterPercentAlert(props: IconComponentProps) {
  return <Icon path={mdiWaterPercentAlert} {...props} />;
}

export { mdiWaterPercentAlert as path };
