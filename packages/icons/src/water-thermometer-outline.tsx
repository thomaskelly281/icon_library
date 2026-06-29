import { mdiWaterThermometerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterThermometerOutline(props: IconComponentProps) {
  return <Icon path={mdiWaterThermometerOutline} {...props} />;
}

export { mdiWaterThermometerOutline as path };
