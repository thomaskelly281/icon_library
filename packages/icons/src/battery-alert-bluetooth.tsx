import { mdiBatteryAlertBluetooth } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryAlertBluetooth(props: IconComponentProps) {
  return <Icon path={mdiBatteryAlertBluetooth} {...props} />;
}

export { mdiBatteryAlertBluetooth as path };
