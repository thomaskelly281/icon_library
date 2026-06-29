import { mdiInvoiceMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceMultiple(props: IconComponentProps) {
  return <Icon path={mdiInvoiceMultiple} {...props} />;
}

export { mdiInvoiceMultiple as path };
