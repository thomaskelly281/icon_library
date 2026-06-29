import { mdiInvoiceExportOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceExportOutline(props: IconComponentProps) {
  return <Icon path={mdiInvoiceExportOutline} {...props} />;
}

export { mdiInvoiceExportOutline as path };
