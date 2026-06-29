import { mdiBatteryChargingHigh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryChargingHigh(props: IconComponentProps) {
  return <Icon path={mdiBatteryChargingHigh} {...props} />;
}

export { mdiBatteryChargingHigh as path };
