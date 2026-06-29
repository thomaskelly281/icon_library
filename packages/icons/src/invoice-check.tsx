import { mdiInvoiceCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceCheck(props: IconComponentProps) {
  return <Icon path={mdiInvoiceCheck} {...props} />;
}

export { mdiInvoiceCheck as path };
