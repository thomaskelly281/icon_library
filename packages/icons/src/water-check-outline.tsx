import { mdiWaterCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiWaterCheckOutline} {...props} />;
}

export { mdiWaterCheckOutline as path };
