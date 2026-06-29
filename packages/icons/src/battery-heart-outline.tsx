import { mdiBatteryHeartOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryHeartOutline(props: IconComponentProps) {
  return <Icon path={mdiBatteryHeartOutline} {...props} />;
}

export { mdiBatteryHeartOutline as path };
