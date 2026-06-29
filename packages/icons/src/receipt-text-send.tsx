import { mdiReceiptTextSend } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReceiptTextSend(props: IconComponentProps) {
  return <Icon path={mdiReceiptTextSend} {...props} />;
}

export { mdiReceiptTextSend as path };
