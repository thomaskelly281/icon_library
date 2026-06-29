import { mdiBatteryChargingOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryChargingOutline(props: IconComponentProps) {
  return <Icon path={mdiBatteryChargingOutline} {...props} />;
}

export { mdiBatteryChargingOutline as path };
