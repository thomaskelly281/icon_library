import { mdiQrcode } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Qrcode(props: IconComponentProps) {
  return <Icon path={mdiQrcode} {...props} />;
}

export { mdiQrcode as path };
