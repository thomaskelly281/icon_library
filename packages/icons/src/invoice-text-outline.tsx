import { mdiInvoiceTextOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceTextOutline(props: IconComponentProps) {
  return <Icon path={mdiInvoiceTextOutline} {...props} />;
}

export { mdiInvoiceTextOutline as path };
