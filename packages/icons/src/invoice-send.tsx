import { mdiInvoiceSend } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceSend(props: IconComponentProps) {
  return <Icon path={mdiInvoiceSend} {...props} />;
}

export { mdiInvoiceSend as path };
