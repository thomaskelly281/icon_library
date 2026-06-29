import { mdiBatteryChargingMedium } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryChargingMedium(props: IconComponentProps) {
  return <Icon path={mdiBatteryChargingMedium} {...props} />;
}

export { mdiBatteryChargingMedium as path };
