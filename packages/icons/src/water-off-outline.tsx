import { mdiWaterOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterOffOutline(props: IconComponentProps) {
  return <Icon path={mdiWaterOffOutline} {...props} />;
}

export { mdiWaterOffOutline as path };
