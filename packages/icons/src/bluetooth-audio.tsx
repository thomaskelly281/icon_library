import { mdiBluetoothAudio } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BluetoothAudio(props: IconComponentProps) {
  return <Icon path={mdiBluetoothAudio} {...props} />;
}

export { mdiBluetoothAudio as path };
