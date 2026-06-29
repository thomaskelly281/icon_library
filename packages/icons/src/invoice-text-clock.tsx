import { mdiInvoiceTextClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceTextClock(props: IconComponentProps) {
  return <Icon path={mdiInvoiceTextClock} {...props} />;
}

export { mdiInvoiceTextClock as path };
