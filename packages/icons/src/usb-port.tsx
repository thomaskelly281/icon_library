import { mdiUsbPort } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UsbPort(props: IconComponentProps) {
  return <Icon path={mdiUsbPort} {...props} />;
}

export { mdiUsbPort as path };
