import { mdiInvoiceTextMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceTextMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiInvoiceTextMinusOutline} {...props} />;
}

export { mdiInvoiceTextMinusOutline as path };
