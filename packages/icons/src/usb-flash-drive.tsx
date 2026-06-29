import { mdiUsbFlashDrive } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UsbFlashDrive(props: IconComponentProps) {
  return <Icon path={mdiUsbFlashDrive} {...props} />;
}

export { mdiUsbFlashDrive as path };
