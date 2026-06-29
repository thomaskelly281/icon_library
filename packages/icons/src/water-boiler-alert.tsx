import { mdiWaterBoilerAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterBoilerAlert(props: IconComponentProps) {
  return <Icon path={mdiWaterBoilerAlert} {...props} />;
}

export { mdiWaterBoilerAlert as path };
