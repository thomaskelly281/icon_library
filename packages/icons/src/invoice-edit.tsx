import { mdiInvoiceEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceEdit(props: IconComponentProps) {
  return <Icon path={mdiInvoiceEdit} {...props} />;
}

export { mdiInvoiceEdit as path };
