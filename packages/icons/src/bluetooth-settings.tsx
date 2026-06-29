import { mdiBluetoothSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BluetoothSettings(props: IconComponentProps) {
  return <Icon path={mdiBluetoothSettings} {...props} />;
}

export { mdiBluetoothSettings as path };
