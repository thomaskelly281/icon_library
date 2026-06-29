import { mdiWaterAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiWaterAlertOutline} {...props} />;
}

export { mdiWaterAlertOutline as path };
