import { mdiUsbFlashDriveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UsbFlashDriveOutline(props: IconComponentProps) {
  return <Icon path={mdiUsbFlashDriveOutline} {...props} />;
}

export { mdiUsbFlashDriveOutline as path };
