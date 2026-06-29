import { mdiInvoiceTextEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceTextEdit(props: IconComponentProps) {
  return <Icon path={mdiInvoiceTextEdit} {...props} />;
}

export { mdiInvoiceTextEdit as path };
