import { mdiInvoiceImport } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceImport(props: IconComponentProps) {
  return <Icon path={mdiInvoiceImport} {...props} />;
}

export { mdiInvoiceImport as path };
