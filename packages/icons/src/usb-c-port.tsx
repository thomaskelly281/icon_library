import { mdiUsbCPort } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UsbCPort(props: IconComponentProps) {
  return <Icon path={mdiUsbCPort} {...props} />;
}

export { mdiUsbCPort as path };
