import { mdiUsb } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Usb(props: IconComponentProps) {
  return <Icon path={mdiUsb} {...props} />;
}

export { mdiUsb as path };
