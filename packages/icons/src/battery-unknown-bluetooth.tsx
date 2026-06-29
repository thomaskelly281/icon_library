import { mdiBatteryUnknownBluetooth } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryUnknownBluetooth(props: IconComponentProps) {
  return <Icon path={mdiBatteryUnknownBluetooth} {...props} />;
}

export { mdiBatteryUnknownBluetooth as path };
