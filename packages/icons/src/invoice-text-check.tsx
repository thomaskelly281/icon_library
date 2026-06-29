import { mdiInvoiceTextCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceTextCheck(props: IconComponentProps) {
  return <Icon path={mdiInvoiceTextCheck} {...props} />;
}

export { mdiInvoiceTextCheck as path };
