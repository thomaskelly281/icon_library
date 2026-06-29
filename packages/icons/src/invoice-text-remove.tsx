import { mdiInvoiceTextRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceTextRemove(props: IconComponentProps) {
  return <Icon path={mdiInvoiceTextRemove} {...props} />;
}

export { mdiInvoiceTextRemove as path };
