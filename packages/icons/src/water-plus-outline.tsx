import { mdiWaterPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiWaterPlusOutline} {...props} />;
}

export { mdiWaterPlusOutline as path };
