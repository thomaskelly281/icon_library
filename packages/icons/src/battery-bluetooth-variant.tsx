import { mdiBatteryBluetoothVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatteryBluetoothVariant(props: IconComponentProps) {
  return <Icon path={mdiBatteryBluetoothVariant} {...props} />;
}

export { mdiBatteryBluetoothVariant as path };
