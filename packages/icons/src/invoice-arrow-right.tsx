import { mdiInvoiceArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceArrowRight(props: IconComponentProps) {
  return <Icon path={mdiInvoiceArrowRight} {...props} />;
}

export { mdiInvoiceArrowRight as path };
