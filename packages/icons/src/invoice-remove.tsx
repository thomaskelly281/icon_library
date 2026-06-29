import { mdiInvoiceRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceRemove(props: IconComponentProps) {
  return <Icon path={mdiInvoiceRemove} {...props} />;
}

export { mdiInvoiceRemove as path };
