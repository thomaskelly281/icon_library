import { mdiInvoiceTextPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceTextPlus(props: IconComponentProps) {
  return <Icon path={mdiInvoiceTextPlus} {...props} />;
}

export { mdiInvoiceTextPlus as path };
