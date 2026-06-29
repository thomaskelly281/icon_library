import { mdiBluetoothConnect } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BluetoothConnect(props: IconComponentProps) {
  return <Icon path={mdiBluetoothConnect} {...props} />;
}

export { mdiBluetoothConnect as path };
