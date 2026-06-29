import { mdiSerialPort } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SerialPort(props: IconComponentProps) {
  return <Icon path={mdiSerialPort} {...props} />;
}

export { mdiSerialPort as path };
