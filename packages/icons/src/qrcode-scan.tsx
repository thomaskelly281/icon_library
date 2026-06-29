import { mdiQrcodeScan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function QrcodeScan(props: IconComponentProps) {
  return <Icon path={mdiQrcodeScan} {...props} />;
}

export { mdiQrcodeScan as path };
