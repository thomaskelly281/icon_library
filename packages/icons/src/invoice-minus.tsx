import { mdiInvoiceMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceMinus(props: IconComponentProps) {
  return <Icon path={mdiInvoiceMinus} {...props} />;
}

export { mdiInvoiceMinus as path };
