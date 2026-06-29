import { mdiQrcodePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function QrcodePlus(props: IconComponentProps) {
  return <Icon path={mdiQrcodePlus} {...props} />;
}

export { mdiQrcodePlus as path };
