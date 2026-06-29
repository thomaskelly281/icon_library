import { mdiInvoiceFast } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceFast(props: IconComponentProps) {
  return <Icon path={mdiInvoiceFast} {...props} />;
}

export { mdiInvoiceFast as path };
