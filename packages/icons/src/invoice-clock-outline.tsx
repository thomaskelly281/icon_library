import { mdiInvoiceClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceClockOutline(props: IconComponentProps) {
  return <Icon path={mdiInvoiceClockOutline} {...props} />;
}

export { mdiInvoiceClockOutline as path };
