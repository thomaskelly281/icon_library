import { mdiInvoiceImportOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceImportOutline(props: IconComponentProps) {
  return <Icon path={mdiInvoiceImportOutline} {...props} />;
}

export { mdiInvoiceImportOutline as path };
