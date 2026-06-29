import { mdiBluetoothOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BluetoothOff(props: IconComponentProps) {
  return <Icon path={mdiBluetoothOff} {...props} />;
}

export { mdiBluetoothOff as path };
