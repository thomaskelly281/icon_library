import { mdiBatteryBluetooth } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryBluetooth(props: IconComponentProps) {
  return <Icon path={mdiBatteryBluetooth} {...props} />;
}

export { mdiBatteryBluetooth as path };
