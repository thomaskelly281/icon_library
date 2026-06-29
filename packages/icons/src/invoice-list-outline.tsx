import { mdiInvoiceListOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceListOutline(props: IconComponentProps) {
  return <Icon path={mdiInvoiceListOutline} {...props} />;
}

export { mdiInvoiceListOutline as path };
