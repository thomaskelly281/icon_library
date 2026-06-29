import { mdiInvoiceEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceEditOutline(props: IconComponentProps) {
  return <Icon path={mdiInvoiceEditOutline} {...props} />;
}

export { mdiInvoiceEditOutline as path };
