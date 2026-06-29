import { mdiBatteryChargingLow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryChargingLow(props: IconComponentProps) {
  return <Icon path={mdiBatteryChargingLow} {...props} />;
}

export { mdiBatteryChargingLow as path };
