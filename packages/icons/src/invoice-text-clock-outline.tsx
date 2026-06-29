import { mdiInvoiceTextClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceTextClockOutline(props: IconComponentProps) {
  return <Icon path={mdiInvoiceTextClockOutline} {...props} />;
}

export { mdiInvoiceTextClockOutline as path };
