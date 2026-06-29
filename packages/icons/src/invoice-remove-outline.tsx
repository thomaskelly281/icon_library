import { mdiInvoiceRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiInvoiceRemoveOutline} {...props} />;
}

export { mdiInvoiceRemoveOutline as path };
