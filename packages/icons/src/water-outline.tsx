import { mdiWaterOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterOutline(props: IconComponentProps) {
  return <Icon path={mdiWaterOutline} {...props} />;
}

export { mdiWaterOutline as path };
