import { mdiBatteryChargingWireless } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryChargingWireless(props: IconComponentProps) {
  return <Icon path={mdiBatteryChargingWireless} {...props} />;
}

export { mdiBatteryChargingWireless as path };
