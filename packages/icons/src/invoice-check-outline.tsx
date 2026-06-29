import { mdiInvoiceCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiInvoiceCheckOutline} {...props} />;
}

export { mdiInvoiceCheckOutline as path };
