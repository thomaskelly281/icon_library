import { mdiInvoiceOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceOutline(props: IconComponentProps) {
  return <Icon path={mdiInvoiceOutline} {...props} />;
}

export { mdiInvoiceOutline as path };
