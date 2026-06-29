import { mdiInvoiceTextFast } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceTextFast(props: IconComponentProps) {
  return <Icon path={mdiInvoiceTextFast} {...props} />;
}

export { mdiInvoiceTextFast as path };
