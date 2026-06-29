import { mdiInvoiceTextMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceTextMinus(props: IconComponentProps) {
  return <Icon path={mdiInvoiceTextMinus} {...props} />;
}

export { mdiInvoiceTextMinus as path };
