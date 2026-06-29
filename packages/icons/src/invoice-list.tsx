import { mdiInvoiceList } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceList(props: IconComponentProps) {
  return <Icon path={mdiInvoiceList} {...props} />;
}

export { mdiInvoiceList as path };
