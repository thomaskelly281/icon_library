import { mdiReceiptTextEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReceiptTextEdit(props: IconComponentProps) {
  return <Icon path={mdiReceiptTextEdit} {...props} />;
}

export { mdiReceiptTextEdit as path };
