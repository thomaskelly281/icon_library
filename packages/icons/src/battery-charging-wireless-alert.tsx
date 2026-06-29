import { mdiBatteryChargingWirelessAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryChargingWirelessAlert(props: IconComponentProps) {
  return <Icon path={mdiBatteryChargingWirelessAlert} {...props} />;
}

export { mdiBatteryChargingWirelessAlert as path };
