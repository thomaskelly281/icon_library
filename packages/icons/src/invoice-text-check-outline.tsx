import { mdiInvoiceTextCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceTextCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiInvoiceTextCheckOutline} {...props} />;
}

export { mdiInvoiceTextCheckOutline as path };
