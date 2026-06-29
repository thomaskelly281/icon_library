import { mdiInvoiceTextMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceTextMultiple(props: IconComponentProps) {
  return <Icon path={mdiInvoiceTextMultiple} {...props} />;
}

export { mdiInvoiceTextMultiple as path };
