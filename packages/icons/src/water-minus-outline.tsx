import { mdiWaterMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiWaterMinusOutline} {...props} />;
}

export { mdiWaterMinusOutline as path };
