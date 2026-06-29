import { mdiInvoiceTextSend } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceTextSend(props: IconComponentProps) {
  return <Icon path={mdiInvoiceTextSend} {...props} />;
}

export { mdiInvoiceTextSend as path };
