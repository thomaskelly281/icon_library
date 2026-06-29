import { mdiWaterAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterAlert(props: IconComponentProps) {
  return <Icon path={mdiWaterAlert} {...props} />;
}

export { mdiWaterAlert as path };
