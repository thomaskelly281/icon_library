import { mdiReceiptSend } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReceiptSend(props: IconComponentProps) {
  return <Icon path={mdiReceiptSend} {...props} />;
}

export { mdiReceiptSend as path };
