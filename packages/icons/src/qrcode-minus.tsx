import { mdiQrcodeMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function QrcodeMinus(props: IconComponentProps) {
  return <Icon path={mdiQrcodeMinus} {...props} />;
}

export { mdiQrcodeMinus as path };
