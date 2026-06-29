import { mdiBluetoothTransfer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BluetoothTransfer(props: IconComponentProps) {
  return <Icon path={mdiBluetoothTransfer} {...props} />;
}

export { mdiBluetoothTransfer as path };
