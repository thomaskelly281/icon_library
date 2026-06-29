import { mdiReceiptText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReceiptText(props: IconComponentProps) {
  return <Icon path={mdiReceiptText} {...props} />;
}

export { mdiReceiptText as path };
