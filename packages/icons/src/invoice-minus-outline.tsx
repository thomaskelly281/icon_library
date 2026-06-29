import { mdiInvoiceMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiInvoiceMinusOutline} {...props} />;
}

export { mdiInvoiceMinusOutline as path };
