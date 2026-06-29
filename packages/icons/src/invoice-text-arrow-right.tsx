import { mdiInvoiceTextArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvoiceTextArrowRight(props: IconComponentProps) {
  return <Icon path={mdiInvoiceTextArrowRight} {...props} />;
}

export { mdiInvoiceTextArrowRight as path };
