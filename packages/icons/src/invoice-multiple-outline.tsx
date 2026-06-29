import { mdiInvoiceMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiInvoiceMultipleOutline} {...props} />;
}

export { mdiInvoiceMultipleOutline as path };
