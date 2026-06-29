import { mdiInvoiceTextPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceTextPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiInvoiceTextPlusOutline} {...props} />;
}

export { mdiInvoiceTextPlusOutline as path };
