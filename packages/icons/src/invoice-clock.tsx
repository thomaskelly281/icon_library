import { mdiInvoiceClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceClock(props: IconComponentProps) {
  return <Icon path={mdiInvoiceClock} {...props} />;
}

export { mdiInvoiceClock as path };
