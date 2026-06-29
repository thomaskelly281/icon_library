import { mdiWaterRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiWaterRemoveOutline} {...props} />;
}

export { mdiWaterRemoveOutline as path };
