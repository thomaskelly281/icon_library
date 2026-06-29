import { mdiInvoicePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoicePlus(props: IconComponentProps) {
  return <Icon path={mdiInvoicePlus} {...props} />;
}

export { mdiInvoicePlus as path };
