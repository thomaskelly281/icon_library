import { mdiWaterWellOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterWellOutline(props: IconComponentProps) {
  return <Icon path={mdiWaterWellOutline} {...props} />;
}

export { mdiWaterWellOutline as path };
